import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import defaultImage from '../assets/libros.png'; // Replace with the path to your default image

const { Meta } = Card;

const CursoCard = ({ id_curso, nombreCurso, userType, id_estudiante }) => {
  const navigate = useNavigate();
  const [puntuacionTotal, setPuntuacionTotal] = useState(0);
  const [puntajeTotal, setPuntajeTotal] = useState(0);

  useEffect(() => {
    if (userType === 'Alumno') {
      const fetchPuntuacion = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/notas/curso-puntuacion-total/${id_estudiante}`);
          const cursoData = response.data.find(curso => curso.id_curso === id_curso);
          if (cursoData) {
            setPuntuacionTotal(cursoData.puntuacionTotal);
            setPuntajeTotal(cursoData.puntajeTotal);
          }
        } catch (error) {
          console.error('Error fetching puntuacion total:', error);
        }
      };

      fetchPuntuacion();
    }
  }, [id_curso, id_estudiante, userType]);

  const handleButtonClick = () => {
    if (userType === 'Alumno') {
      navigate(`/main/presentacion/${id_estudiante}/${id_curso}`);
    } else if (userType === 'Maestro') {
      navigate(`/main/evaluacion/${id_curso}`);
    }
  };

  const percentage = puntajeTotal > 0 ? (puntuacionTotal / puntajeTotal) * 100 : 0;

  return (
    <Card
      hoverable
      cover={<img alt="Curso" src={defaultImage} />}
      actions={[
        <Button type="primary" onClick={handleButtonClick}>
          {userType === 'Alumno' ? 'Ir a curso' : 'Ir a evaluar'}
        </Button>,
      ]}
    >
      <Meta title={nombreCurso} />
      {userType === 'Alumno' && (
        <div>
          <p>Puntos Evaluados: {puntuacionTotal}</p>
          <p>Porcentaje: {percentage.toFixed(2)}%</p>
        </div>
      )}
    </Card>
  );
};

export default CursoCard;