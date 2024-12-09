const tareaService = require('../services/tareaService');

async function createTarea(req, res) {
    const tareaData = req.body;
  
    try {
      const result = await tareaService.createTarea(tareaData);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message || 'Error' });
    }
}


async function deleteTarea(req, res) {
    const { id_tarea } = req.params;
  
    try {
      const result = await tareaService.deleteTarea(id_tarea);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  }
  
  async function getAllTareas(req, res) {
    try {
      const result = await tareaService.getAllTareas();
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  }

  async function getTotalPuntajeByCurso(req, res) {
    const { id_curso } = req.params;
  
    try {
      const result = await tareaService.getTotalPuntajeByCurso(id_curso);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  }

  async function updateTarea(req, res) {
    const { id_tarea } = req.params;
    const updateFields = req.body;
  
    try {
      const result = await tareaService.updateTarea(id_tarea, updateFields);
      res.json({ success: true, result });
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  }

  async function getTareasByEstudianteAndCurso(req, res) {
    const { id_estudiante, id_curso } = req.params;
  
    try {
      const result = await tareaService.getTareasByEstudianteAndCurso(id_estudiante, id_curso);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  }

  async function getPresentedTareasByCurso(req, res) {
    const { id_curso } = req.params;
  
    try {
      const result = await tareaService.getPresentedTareasByCurso(id_curso);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error obteniendo tareas por curso' });
    }
  }

  async function updateEstudianteTarea(req, res) {
    const { id_estudiante_tareas } = req.params;
    const updateFields = req.body;
  
    try {
      const result = await tareaService.updateEstudianteTarea(id_estudiante_tareas, updateFields);
      res.json({ success: true, result });
    } catch (error) {
      res.status(500).json({ error: 'Error actualizando EstudianteTarea' });
    }
  }

  async function getTareasByCurso(req, res) {
    const { id_curso } = req.params;
  
    try {
      const result = await tareaService.getTareasByCurso(id_curso);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
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