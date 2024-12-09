const db = require('../db');
const moment = require('moment');

async function getAllTutores() {
  try {
    const result = await db('Tutor')
      .select('id_tutor', 'NombreCompleto', 'id_curso');

    return result;
  } catch (error) {
    console.error('Error fetching all tutores:', error);
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
    console.error('Error fetching tutores by curso:', error);
    throw error;
  }
}

async function createTutorReunion(tutorReunionData) {
  try {
    const { id_tutor, id_estudiante, FechaReunion, Descripcion } = tutorReunionData;

    // Check if FechaReunion is at least three days after the current date
    const currentDate = moment().startOf('day');
    const reunionDate = moment(FechaReunion).startOf('day');
    if (reunionDate.diff(currentDate, 'days') < 3) {
      throw new Error('La fecha de la reunión debe ser al menos tres días después de la fecha actual.');
    }

    // Check if the day is not a Sunday
    if (reunionDate.day() === 0) {
      throw new Error('La fecha de la reunión no puede ser un domingo.');
    }

    // Check if the student already has a meeting on the same day
    const studentMeetingCount = await db('TutorReunion')
      .where('id_estudiante', id_estudiante)
      .andWhere(db.raw('CAST(FechaReunion AS DATE) = ?', [reunionDate.format('YYYY-MM-DD')]))
      .count('id_meeting as count')
      .first();

    if (studentMeetingCount.count > 0) {
      throw new Error('El estudiante ya tiene una reunión programada para el mismo día.');
    }

    // Check if the tutor has no more than three scheduled meetings on the same day
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
    console.error('Error creating tutor reunion:', error);
    throw error;
  }
}


module.exports = {
  getAllTutores,
  getTutoresByCurso,
  createTutorReunion,
};