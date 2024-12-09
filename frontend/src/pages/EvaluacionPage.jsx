import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, Form, Input, DatePicker, notification, Select } from 'antd';
import axios from 'axios';
import moment from 'moment';
import TablaEvaluacion from '../components/tablaEvaluacion';

const { Option } = Select;

const EvaluacionPage = () => {
  const { id_curso } = useParams();
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [deleteForm] = Form.useForm();
  const [tareas, setTareas] = useState([]);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const showDeleteModal = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tareas/tareas-curso/${id_curso}`);
      setTareas(response.data);
      setIsDeleteModalVisible(true);
    } catch (error) {
      console.error('Error fetching tareas:', error);
    }
  };

  const handleCancelCreate = () => {
    setIsCreateModalVisible(false);
    form.resetFields();
  };

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
    deleteForm.resetFields();
  };

  const handleCreate = async (values) => {
    const currentDate = moment().startOf('day');
    const entregaDate = moment(values.Fecha_Entrega).startOf('day');

    if (entregaDate.diff(currentDate, 'days') > 1) {
      notification.error({
        message: 'Error',
        description: 'La fecha de entrega debe ser al menos un día después de la fecha actual.',
      });
      return;
    }

    const requestData = {
      ...values,
      id_curso,
      Fecha_Entrega: values.Fecha_Entrega.format('YYYY-MM-DD'),
    };

    console.log('Request Data:', requestData);

    try {
      const response = await axios.post('http://localhost:5000/tareas/crear-tarea', requestData);
      notification.success({
        message: 'Éxito',
        description: 'La tarea ha sido creada exitosamente.',
      });
      setIsCreateModalVisible(false);
      form.resetFields();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.response?.data?.error || 'Hubo un error al crear la tarea.',
      });
    }
  };

  const handleDelete = async (values) => {
    try {
      await axios.delete(`http://localhost:5000/tareas/eliminar-tarea/${values.id_tarea}`);
      notification.success({
        message: 'Éxito',
        description: 'La tarea ha sido eliminada exitosamente.',
      });
      setIsDeleteModalVisible(false);
      deleteForm.resetFields();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.response?.data?.error || 'Hubo un error al eliminar la tarea.',
      });
    }
  };

  return (
    <div>
      <h1>Evaluación del Curso</h1>
      <Button type="primary" onClick={showCreateModal}>
        Crear
      </Button>
      <Button type="danger" onClick={showDeleteModal}>
        Borrar
      </Button>
      <TablaEvaluacion id_curso={id_curso} />
      <Modal
        title="Crear Tarea"
        visible={isCreateModalVisible}
        onCancel={handleCancelCreate}
        footer={null}
      >
        <Form form={form} onFinish={handleCreate}>
          <Form.Item
            name="Titulo"
            label="Título"
            rules={[{ required: true, message: 'Por favor ingrese el título' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Descripcion"
            label="Descripción"
            rules={[{ required: true, message: 'Por favor ingrese la descripción' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Fecha_Entrega"
            label="Fecha de Entrega"
            rules={[{ required: true, message: 'Por favor seleccione la fecha de entrega' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="Puntaje"
            label="Puntaje"
            rules={[{ required: true, message: 'Por favor ingrese el puntaje' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="Borrar Tarea"
        visible={isDeleteModalVisible}
        onCancel={handleCancelDelete}
        footer={null}
      >
        <Form form={deleteForm} onFinish={handleDelete}>
          <Form.Item
            name="id_tarea"
            label="Tarea"
            rules={[{ required: true, message: 'Por favor seleccione una tarea' }]}
          >
            <Select placeholder="Seleccione una tarea">
              {tareas.map(tarea => (
                <Option key={tarea.id_tarea} value={tarea.id_tarea}>
                  {tarea.Titulo}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="danger" htmlType="submit">
              Borrar Tarea
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EvaluacionPage;