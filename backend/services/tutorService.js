const db = require('../db');
const moment = require('moment');

async function getAllTutores() {
  try {
    const result = await db('Tutor')
      .select('id_tutor', 'NombreCompleto', 'id_curso');

    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function getTutoresByCurso(id_curso) {
  try {
    const result = await db('Tutor')
      .select('id_tutor', 'NombreCompleto', 'id_curso', 'Telefono')
      .where({ id_curso });

    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function createTutorReunion(tutorReunionData) {
  try {
    const { id_tutor, id_estudiante, FechaReunion, Descripcion } = tutorReunionData;

    const currentDate = moment().startOf('day');
    const reunionDate = moment(FechaReunion).startOf('day');
    if (reunionDate.diff(currentDate, 'days') < 3) {
      throw new Error('La fecha de la reunión debe ser al menos tres días después de la fecha actual.');
    }

    // Chequear si no es domingo
    if (reunionDate.day() === 0) {
      throw new Error('La fecha de la reunión no puede ser un domingo.');
    }

    // Chequear si no tiene reunion el mismo dia
    const studentMeetingCount = await db('TutorReunion')
      .where('id_estudiante', id_estudiante)
      .andWhere(db.raw('CAST(FechaReunion AS DATE) = ?', [reunionDate.format('YYYY-MM-DD')]))
      .count('id_meeting as count')
      .first();

    if (studentMeetingCount.count > 0) {
      throw new Error('El estudiante ya tiene una reunión programada para el mismo día.');
    }

    // Chequear que no tenga mas de 3 reuniones programadas el mismo dia
    const tutorMeetingCount = await db('TutorReunion')
      .where('id_tutor', id_tutor)
      .andWhere(db.raw('CAST(FechaReunion AS DATE) = ?', [reunionDate.format('YYYY-MM-DD')]))
      .count('id_meeting as count')
      .first();

    if (tutorMeetingCount.count >= 3) {
      throw new Error('El tutor ya tiene tres reuniones programadas para el mismo día.');
    }

    const result = await db('TutorReunion').insert({
      id_tutor,
      id_estudiante,
      FechaReunion,
      Descripcion,
      estado: 'Scheduled',
    });

    return result;
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
}


module.exports = {
  getAllTutores,
  getTutoresByCurso,
  createTutorReunion,
};