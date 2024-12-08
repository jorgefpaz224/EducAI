const express = require('express');
const notasController = require('../controllers/notasController');
const router = express.Router();

router.get('/curso-puntuacion-total/:id_estudiante', notasController.getCursoPuntuacionTotal);
router.put('/estudiante-tarea/:id_estudiante_tarea', notasController.updateEstudianteTarea);


module.exports = router;