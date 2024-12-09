const tutorService = require('../services/tutorService');

async function getAllTutores(req, res) {
  try {
    const result = await tutorService.getAllTutores();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo todos los tutores' });
  }
}

async function getTutoresByCurso(req, res) {
  const { id_curso } = req.params;

  try {
    const result = await tutorService.getTutoresByCurso(id_curso);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo tutores por curso' });
  }
}

async function createTutorReunion(req, res) {
  const tutorReunionData = req.body;

  try {
    const result = await tutorService.createTutorReunion(tutorReunionData);
    res.status(201).json({ success: true, id_meeting: result[0] });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllTutores,
  getTutoresByCurso,
  createTutorReunion
};