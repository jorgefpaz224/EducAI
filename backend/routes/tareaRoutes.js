const express = require('express');
const tareaController = require('../controllers/tareaController');
const router = express.Router();

router.post('/crear-tarea', tareaController.createTarea);
router.delete('/eliminar-tarea/:id_tarea', tareaController.deleteTarea);
router.get('/todas-tareas', tareaController.getAllTareas);
router.get('/total-puntaje/:id_curso', tareaController.getTotalPuntajeByCurso);
router.put('/actualizar-tarea/:id_tarea', tareaController.updateTarea);
router.get('/tareas-estudiante-curso/:id_estudiante/:id_curso', tareaController.getTareasByEstudianteAndCurso);
router.get('/presented-tareas-curso/:id_curso', tareaController.getPresentedTareasByCurso);
router.put('/actualizar-estudiante-tarea/:id_estudiante_tareas', tareaController.updateEstudianteTarea);


module.exports = router;