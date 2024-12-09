const cursoService = require('../services/cursoService');

async function getCursosByMaestro(req, res) {
  const { id_maestro } = req.params;

  try {
    const result = await cursoService.getCursosByMaestro(id_maestro);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cursos by maestro' });
  }
}

async function getCursosByEstudiante(req, res) {
  const { id_estudiante } = req.params;

  try {
    const result = await cursoService.getCursosByEstudiante(id_estudiante);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cursos by estudiante' });
  }
}

async function getTutoresByCurso(req, res) {
  const { id_curso } = req.params;

  try {
    const result = await tutorService.getTutoresByCurso(id_curso);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tutores by curso' });
  }
}

module.exports = {
  getCursosByMaestro,
  getCursosByEstudiante,
  getTutoresByCurso,
};