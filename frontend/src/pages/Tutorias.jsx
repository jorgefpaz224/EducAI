import React, { useState, useEffect, useContext } from 'react';
import { Select, notification } from 'antd';
import axios from 'axios';
import TutorList from '../components/TutorList';
import { Context } from '../MainContent'; // Import the existing context
import './Tutorias.css';

const { Option } = Select;

const Tutorias = () => {
  const { user } = useContext(Context); // Use the existing context to get user information
  const [cursos, setCursos] = useState([]);
  const [selectedCurso, setSelectedCurso] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cursos/cursos-estudiante/${user.id_estudiante}`);
        setCursos(response.data);
      } catch (error) {
        console.error('Error fetching cursos:', error);
      }
    };

    fetchCursos();
  }, [user.id_estudiante]);

  const handleCursoChange = (value) => {
    setSelectedCurso(value);
  };

  return (
    <div>
      <div className='tutorias-banner'>
        <h1>Tutorías</h1>
        <p>¿Tienes una clase en mente? </p>
        <Select
          className='searchbar'
          placeholder='Selecciona un curso'
          onChange={handleCursoChange}
        >
          {cursos.map((curso) => (
            <Option key={curso.id_curso} value={curso.id_curso}>
              {curso.NombreCurso}
            </Option>
          ))}
        </Select>
      </div>
      <h2>Tutores</h2>
      <div className='contenido-tutorias'>
        <TutorList id_curso={selectedCurso} id_estudiante={user.id_estudiante} />
      </div>
    </div>
  );
};

export default Tutorias;