import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import TutorCard from './TutorCard';

const TutorList = ({ id_curso, id_estudiante }) => {
  const [tutores, setTutores] = useState([]);

  useEffect(() => {
    const fetchTutores = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/tutores/tutores-curso/${id_curso}`);
        setTutores(response.data);
      } catch (error) {
        console.error('Error fetching tutores:', error);
      }
    };

    if (id_curso) {
      fetchTutores();
    }
  }, [id_curso]);

  return (
    <Row gutter={[16, 16]}>
      {tutores.map((tutor) => (
        <Col key={tutor.id_tutor} span={8}>
          <TutorCard tutor={tutor} id_estudiante={id_estudiante} />
        </Col>
      ))}
    </Row>
  );
};

export default TutorList;