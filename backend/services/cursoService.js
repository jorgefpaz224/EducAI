const db = require('../db');

async function getCursosByMaestro(id_maestro) {
  try {
    const result = await db('Curso')
      .join('MaestroCurso', 'Curso.id_curso', 'MaestroCurso.id_curso')
      .select('Curso.id_curso', 'Curso.NombreCurso')
      .where('MaestroCurso.id_maestro', id_maestro);

    return result;
  } catch (error) {
    console.error('Error fetching cursos by maestro:', error);
    throw error;
  }
}

async function getCursosByEstudiante(id_estudiante) {
  try {
    const result = await db('Curso')
      .join('EstudianteCurso', 'Curso.id_curso', 'EstudianteCurso.id_curso')
      .select('Curso.id_curso', 'Curso.NombreCurso')
      .where('EstudianteCurso.id_estudiante', id_estudiante);

    return result;
  } catch (error) {
    console.error('Error fetching cursos by estudiante:', error);
    throw error;
  }
}

module.exports = {
  getCursosByMaestro,
  getCursosByEstudiante
};