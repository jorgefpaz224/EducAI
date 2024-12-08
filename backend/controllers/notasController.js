const notasService = require('../services/notasService');

async function getCursoPuntuacionTotal(req, res) {
  const { id_estudiante } = req.params;

  try {
    const result = await notasService.getCursoPuntuacionTotal(id_estudiante);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching curso puntuacion total' });
  }
}

async function updateEstudianteTarea(req, res) {
    const { id_estudiante_tarea } = req.params;
    const updateFields = req.body;
  
    try {
      const result = await notasService.updateEstudianteTarea(id_estudiante_tarea, updateFields);
      res.json({ success: true, result });
    } catch (error) {
      res.status(500).json({ error: 'Error updating EstudianteTarea' });
    }
  }

module.exports = {
  getCursoPuntuacionTotal,
  updateEstudianteTarea
};