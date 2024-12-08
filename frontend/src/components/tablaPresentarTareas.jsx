import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, notification } from 'antd';
import axios from 'axios';
import moment from 'moment';

const TablaPresentarTareas = ({ id_estudiante, id_curso }) => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTarea, setSelectedTarea] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tareas/tareas-estudiante-curso/${id_estudiante}/${id_curso}`);
        setDataSource(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id_estudiante, id_curso]);

  const handlePresentar = async (record) => {
    if (record.estado === 'Evaluado') {
      notification.error({
        message: 'Error',
        description: 'La tarea ya ha sido evaluada.',
      });
      return;
    }

    if (record.estado === 'Presentada') {
      notification.error({
        message: 'Error',
        description: 'La tarea ya ha sido presentada.',
      });
      return;
    }

    if (moment().isBefore(moment(record.Fecha_Entrega))) {
      try {
        const fechaPresentacion = moment().format('YYYY-MM-DD HH:mm:ss');
        await axios.put(`http://localhost:5000/tareas/actualizar-estudiante-tarea/${record.id_estudiante_tareas}`, {
          Tarea_Presentada: true,
          estado: 'Presentada',
          Fecha_Presentacion: fechaPresentacion,
        });
        notification.success({
          message: 'Éxito',
          description: 'La tarea ha sido presentada exitosamente.',
        });
        setDataSource((prevData) =>
          prevData.map((item) =>
            item.id_estudiante_tareas === record.id_estudiante_tareas
              ? { ...item, Tarea_Presentada: true, estado: 'Presentada', Fecha_Presentacion: fechaPresentacion }
              : item
          )
        );
      } catch (error) {
        console.error('Error presenting tarea:', error);
        notification.error({
          message: 'Error',
          description: 'Hubo un error al presentar la tarea.',
        });
      }
    } else {
      notification.error({
        message: 'Error',
        description: 'No se puede presentar la tarea después de la fecha de entrega.',
      });
    }
  };

  const handleCancelar = (record) => {
    if (record.estado === 'Evaluado') {
      notification.error({
        message: 'Error',
        description: 'La tarea ya ha sido evaluada.',
      });
      return;
    }
    setSelectedTarea(record);
    setModalVisible(true);
  };

  const handleModalOk = async () => {
    if (selectedTarea.estado !== 'Evaluado' && selectedTarea.estado !== 'Faltante' && moment().isBefore(moment(selectedTarea.Fecha_Entrega))) {
      try {
        await axios.put(`http://localhost:5000/tareas/actualizar-estudiante-tarea/${selectedTarea.id_estudiante_tareas}`, {
          Tarea_Presentada: false,
          estado: 'Sin Presentar',
          Puntuacion: null,
          Fecha_Presentacion: null,
        });
        notification.success({
          message: 'Éxito',
          description: 'La presentación de la tarea ha sido cancelada exitosamente.',
        });
        setDataSource((prevData) =>
          prevData.map((item) =>
            item.id_estudiante_tareas === selectedTarea.id_estudiante_tareas
              ? { ...item, Tarea_Presentada: false, estado: 'Sin Presentar', Fecha_Presentacion: null }
              : item
          )
        );
      } catch (error) {
        console.error('Error canceling tarea:', error);
        notification.error({
          message: 'Error',
          description: 'Hubo un error al cancelar la presentación de la tarea.',
        });
      }
    } else {
      notification.error({
        message: 'Error',
        description: 'No se puede cancelar la presentación de la tarea.',
      });
    }
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const columns = [
    {
      title: 'Titulo',
      dataIndex: 'Titulo',
      key: 'Titulo',
    },
    {
      title: 'Descripcion',
      dataIndex: 'Descripcion',
      key: 'Descripcion',
    },
    {
      title: 'Fecha de Entrega',
      dataIndex: 'Fecha_Entrega',
      key: 'Fecha_Entrega',
      render: (text) => moment(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Fecha de Presentacion',
      dataIndex: 'Fecha_Presentacion',
      key: 'Fecha_Presentacion',
      render: (text) => (text ? moment(text).format('YYYY-MM-DD HH:mm:ss') : '-'), // Format the date string
    },
    {
      title: 'Estado',
      dataIndex: 'estado',
      key: 'estado',
    },
    {
      title: 'Puntuacion',
      dataIndex: 'Puntuacion',
      key: 'Puntuacion',
      render: (_, record) => (record.Puntuacion !== null ? `${record.Puntuacion}/${record.Puntaje}` : '-'),
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        <div>
          <Button
            type="primary"
            onClick={() => handlePresentar(record)}
            disabled={moment().isAfter(moment(record.Fecha_Entrega))}
          >
            Presentar
          </Button>
          <Button
            type="danger"
            onClick={() => handleCancelar(record)}
          >
            Cancelar
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey="id_estudiante_tareas" loading={loading} />
      <Modal
        title="Confirmación"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>¿Quieres borrar este intento?</p>
      </Modal>
    </div>
  );
};

export default TablaPresentarTareas;