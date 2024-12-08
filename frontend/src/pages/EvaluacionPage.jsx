import React from 'react';
import { useParams } from 'react-router-dom';
import TablaEvaluacion from '../components/tablaEvaluacion';

const EvaluacionPage = () => {
  const { id_curso } = useParams();

  return (
    <div>
      <h1>Evaluación del Curso</h1>
      <TablaEvaluacion id_curso={id_curso} />
    </div>
  );
};

export default EvaluacionPage;