import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import axios from 'axios';
import CursoCard from './CursoCard';
import 

const CursosList = ({ id_maestro, id_estudiante, userType }) => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        let response;
        if (userType === 'Maestro') {
          response = await axios.get(`http://localhost:5000/cursos/cursos-maestro/${id_maestro}`);
        } else if (userType === 'Alumno') {
          response = await axios.get(`http://localhost:5000/cursos/cursos-estudiante/${id_estudiante}`);
        }
        setCursos(response.data);
      } catch (error) {
        console.error('Error fetching cursos:', error);
      }
    };

    fetchCursos();
  }, [id_maestro, id_estudiante, userType]);

  return (
    <Row gutter={[16, 16]}>
      {cursos.map((curso) => (
        <Col key={curso.id_curso} span={8}>
          <CursoCard
            id_curso={curso.id_curso}
            nombreCurso={curso.NombreCurso}
            userType={userType}
            id_estudiante={id_estudiante}
          />
        </Col>
      ))}
    </Row>
  );
};

export default CursosList;