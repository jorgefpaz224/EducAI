const db = require('../db');

async function getCursoPuntuacionTotal(id_estudiante) {
  try {
    const result = await db('Curso')
      .join('EstudianteCurso', 'Curso.id_curso', 'EstudianteCurso.id_curso')
      .join('Tarea', 'Curso.id_curso', 'Tarea.id_curso')
      .leftJoin('EstudianteTarea', function() {
        this.on('Tarea.id_tarea', 'EstudianteTarea.id_tarea')
          .andOn('EstudianteTarea.id_estudiante', '=', db.raw('?', [id_estudiante]));
      })
      .select('Curso.id_curso', 'Curso.NombreCurso')
      .sum('EstudianteTarea.Puntuacion as puntuacionTotal')
      .sum('Tarea.Puntaje as puntajeTotal')
      .where('EstudianteCurso.id_estudiante', id_estudiante)
      .groupBy('Curso.id_curso', 'Curso.NombreCurso');

    return result;
  } catch (error) {
    console.error('Error fetching curso puntuacion total:', error);
    throw error;
  }
  }

  async function updateEstudianteTarea(id_estudiante_tarea, updateFields) {
    try {
      const result = await db('EstudianteTarea')
        .where({ id_estudiante_tarea })
        .update(updateFields);
  
      return result;
    } catch (error) {
      console.error('Error updating EstudianteTarea:', error);
      throw error;
    }
  }
  
  
  module.exports = {
    getCursoPuntuacionTotal,
    updateEstudianteTarea,
  };