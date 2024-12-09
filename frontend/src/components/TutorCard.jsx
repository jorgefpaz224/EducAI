import React, { useState } from 'react';
import { Card, Button, Modal, Form, Input, DatePicker, notification } from 'antd';
import axios from 'axios';
import defaultImage from '../assets/tutor.png';

const TutorCard = ({ tutor, id_estudiante }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAgendar = async (values) => {
    const requestData = {
      id_tutor: tutor.id_tutor,
      id_estudiante,
      FechaReunion: values.FechaReunion.format('YYYY-MM-DD'),
      Descripcion: values.Descripcion,
    };

    try {
      const response = await axios.post('http://localhost:5000/tutores/crear-tutor-reunion', requestData);
      notification.success({
        message: 'Éxito',
        description: 'La reunión ha sido agendada exitosamente.',
      });
      setIsModalVisible(false);
      form.resetFields();
    } catch (error) {
      notification.error({
        message: 'Error',
        description: error.response?.data?.error || 'Hubo un error al agendar la reunión.',
      });
    }
  };

  return (
    <Card
      hoverable
      cover={<img alt="Tutor" src={defaultImage} />}
      actions={[
        <Button type="primary" onClick={showModal}>
          Agendar
        </Button>,
      ]}
    >
      <Card.Meta
        title={tutor.NombreCompleto}
        description={`Teléfono: ${tutor.Telefono}`}
      />
      <Modal
        title="Agendar Reunión"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleAgendar}>
          <Form.Item
            name="FechaReunion"
            label="Fecha de Reunión"
            rules={[{ required: true, message: 'Por favor seleccione la fecha de la reunión' }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="Descripcion"
            label="Descripción"
            rules={[{ required: true, message: 'Por favor ingrese la descripción' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Agendar
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default TutorCard;