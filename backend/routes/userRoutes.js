const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();
const db = require('../db');



router.post('/verificar-estudiante', userController.verificarEstudiante);
router.post('/verificar-maestro', userController.verificarMaestro);




router.get('/test-db', async (req, res) => {
    try {
      const result = await db.raw('SELECT 1+1 AS result');
      res.json({ success: true, message: 'Database connected!', result: result.rows || result });
    } catch (error) {
      console.error('Database connection failed:', error);
      res.status(500).json({ success: false, message: 'Database connection failed', error: error.message });
    }
  });

module.exports = router;
