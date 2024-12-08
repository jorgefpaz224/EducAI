import React from 'react';
import { useParams } from 'react-router-dom';
import TablaPresentarTareas from '../components/tablaPresentarTareas';

const PresentacionPage = () => {
  const { id_estudiante, id_curso } = useParams();

  return (
    <div>
      <h1>Presentación de Tareas</h1>
      <TablaPresentarTareas id_estudiante={id_estudiante} id_curso={id_curso} />
    </div>
  );
};

export default PresentacionPage;