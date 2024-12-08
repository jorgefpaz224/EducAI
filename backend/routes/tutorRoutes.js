const express = require('express');
const tutorController = require('../controllers/tutorController');
const router = express.Router();

router.get('/tutores', tutorController.getAllTutores);
router.get('/tutores-curso/:id_curso', tutorController.getTutoresByCurso);
router.post('/crear-tutor-reunion', tutorController.createTutorReunion);


module.exports = router;