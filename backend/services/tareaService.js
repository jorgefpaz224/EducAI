const db = require('../db');
const moment = require('moment');

async function createTarea(tareaData) {
  const { id_curso, Titulo, Descripcion, Fecha_Entrega, Puntaje } = tareaData;

  try {

    await db.transaction(async trx => {
      const [{ totalPuntaje }] = await trx('Tarea')
        .where({ id_curso })
        .sum('Puntaje as totalPuntaje');

   
      const totalPuntajeInt = totalPuntaje || 0;
      const puntajeInt = parseInt(Puntaje, 10);

      if (totalPuntajeInt + puntajeInt > 100) {
        console.log(totalPuntajeInt);
        console.log(puntajeInt);
        
        throw new Error('The sum of all puntajes for the course exceeds 100');
      }

      const [newTarea] = await trx('Tarea').insert({
        id_curso,
        Titulo,
        Descripcion,
        Fecha_Entrega,
        Puntaje: puntajeInt
      }).returning('id_tarea');

      const tareaId = parseInt(newTarea.id_tarea, 10);


      const estudiantes = await trx('EstudianteCurso')
        .select('id_estudiante')
        .where({ id_curso });

      const estudianteTareas = estudiantes.map(estudiante => ({
        id_estudiante: estudiante.id_estudiante,
        id_tarea: tareaId, 
        Tarea_Presentada: 0,
        estado: 'Sin Presentar',
        Puntuacion: null
      }));

      await trx('EstudianteTarea').insert(estudianteTareas);
    });

    return { success: true };
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}

async function deleteTarea(id_tarea) {
    try {

      await db.transaction(async trx => {
        await trx('EstudianteTarea').where({ id_tarea }).del();
        await trx('Tarea').where({ id_tarea }).del();
      });
  
      return { success: true };
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }

  async function getAllTareas() {
    try {
      const result = await db('Tarea').select('*');
      return result;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }


  
async function getTotalPuntajeByCurso(id_curso) {
    try {
      const [{ totalPuntaje }] = await db('Tarea')
        .where({ id_curso })
        .sum('Puntaje as totalPuntaje');
  
      return { totalPuntaje };
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }
  
  async function updateTarea(id_tarea, updateFields) {
    try {
      const result = await db('Tarea')
        .where({ id_tarea })
        .update(updateFields);
  
      return result;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }
  

  async function getTareasByEstudianteAndCurso(id_estudiante, id_curso) {
    try {
      const result = await db('Tarea')
        .join('EstudianteTarea', 'Tarea.id_tarea', 'EstudianteTarea.id_tarea')
        .select('Tarea.*', 'EstudianteTarea.Tarea_Presentada', 'EstudianteTarea.estado', 'EstudianteTarea.Puntuacion', 'EstudianteTarea.id_estudiante_tareas', 'EstudianteTarea.Fecha_Presentacion')
        .where({
          'EstudianteTarea.id_estudiante': id_estudiante,
          'Tarea.id_curso': id_curso
        });
  
      return result;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }

  async function getPresentedTareasByCurso(id_curso) {
    try {
      const result = await db('Tarea')
        .join('EstudianteTarea', 'Tarea.id_tarea', 'EstudianteTarea.id_tarea')
        .join('Estudiante', 'EstudianteTarea.id_estudiante', 'Estudiante.id_estudiante')
        .select('Tarea.*', 'EstudianteTarea.id_estudiante_tareas', 'EstudianteTarea.Tarea_Presentada', 'EstudianteTarea.estado', 'EstudianteTarea.Puntuacion', 'Estudiante.PrimerNombre', 'Estudiante.Apellido')
        .where({
          'Tarea.id_curso': id_curso
        });
  
      return result;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }

  async function updateEstudianteTarea(id_estudiante_tareas, updateFields) {
    try {
      console.log('Updating EstudianteTarea:', id_estudiante_tareas, updateFields);
      const result = await db('EstudianteTarea')
        .where({ id_estudiante_tareas })
        .update(updateFields);
  
      console.log('Update result:', result);
      return result;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function getTareasByCurso(id_curso) {
    try {
      const result = await db('Tarea')
        .select('id_tarea', 'Titulo', 'Descripcion', 'Fecha_Entrega', 'Puntaje')
        .where({ id_curso });
  
      return result;
    } catch (error) {
      console.error('Error: ', error);
      throw error;
    }
  }

module.exports = {
  createTarea,
  deleteTarea,
  getAllTareas,
  getTotalPuntajeByCurso,
  updateTarea,
  getTareasByEstudianteAndCurso,
  getPresentedTareasByCurso,
  updateEstudianteTarea,
  getTareasByCurso
};