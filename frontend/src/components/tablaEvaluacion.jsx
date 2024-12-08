import React, { useEffect, useState } from 'react';
import { Table, Input, Button, notification } from 'antd';
import axios from 'axios';

const TablaEvaluacion = ({ id_curso }) => {
  const [dataSource, setDataSource] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [editingPuntuacion, setEditingPuntuacion] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tareas/presented-tareas-curso/${id_curso}`);
        setDataSource(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id_curso]);

  const handleEdit = (record) => {
    setEditingKey(record.id_estudiante_tareas);
    setEditingPuntuacion({ ...editingPuntuacion, [record.id_estudiante_tareas]: record.Puntuacion });
  };

  const handleSave = async (record) => {
    const newPuntuacion = editingPuntuacion[record.id_estudiante_tareas];
    if (newPuntuacion < 0 || newPuntuacion > record.Puntaje) {
      notification.error({
        message: 'Error',
        description: 'La puntuación debe ser mayor o igual a 0 y menor o igual al puntaje máximo.',
      });
      return;
    }

    try {
      await axios.put(`http://localhost:5000/tareas/actualizar-estudiante-tarea/${record.id_estudiante_tareas}`, {
        Puntuacion: newPuntuacion,
        estado: 'Evaluado',
      });
      setDataSource((prevData) =>
        prevData.map((item) =>
          item.id_estudiante_tareas === record.id_estudiante_tareas
            ? { ...item, Puntuacion: newPuntuacion, estado: 'Evaluado' }
            : item
        )
      );
      setEditingKey('');
      notification.success({
        message: 'Éxito',
        description: 'La puntuación ha sido guardada exitosamente.',
      });
    } catch (error) {
      console.error('Error updating data:', error);
      notification.error({
        message: 'Error',
        description: 'Hubo un error al guardar la puntuación.',
      });
    }
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'Nombre',
      key: 'Nombre',
      render: (_, record) => `${record.PrimerNombre} ${record.Apellido}`,
    },
    {
      title: 'Titulo',
      dataIndex: 'Titulo',
      key: 'Titulo',
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
      render: (_, record) => (
        editingKey === record.id_estudiante_tareas ? (
          <Input
            type="number"
            value={editingPuntuacion[record.id_estudiante_tareas]}
            onChange={(e) => setEditingPuntuacion({ ...editingPuntuacion, [record.id_estudiante_tareas]: e.target.value })}
          />
        ) : (
          `${record.Puntuacion}/${record.Puntaje}`
        )
      ),
    },
    {
      title: 'Acciones',
      key: 'acciones',
      render: (_, record) => (
        editingKey === record.id_estudiante_tareas ? (
          <Button onClick={() => handleSave(record)}>Guardar</Button>
        ) : (
          <Button onClick={() => handleEdit(record)}>Editar</Button>
        )
      ),
    },
  ];

  return(

    <Table dataSource={dataSource} columns={columns} rowKey="id_estudiante_tareas" />


  );
};

export default TablaEvaluacion;