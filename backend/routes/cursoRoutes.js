const express = require('express');
const cursoController = require('../controllers/cursoController');
const router = express.Router();

router.get('/cursos-maestro/:id_maestro', cursoController.getCursosByMaestro);
router.get('/cursos-estudiante/:id_estudiante', cursoController.getCursosByEstudiante);


module.exports = router;