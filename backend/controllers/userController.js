const userService = require('../services/userService');

async function verificarEstudiante(req, res) {
  const { correo, contrasena } = req.body;

  try {
    const estudiante = await userService.verificarEstudiante(correo, contrasena);

    if (estudiante) {
      res.json({ success: true, estudiante });
    } else {
      res.status(404).json({ success: false, message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error verificando estudiante' });
  }
}

async function verificarMaestro(req, res) {
    const { correo, contrasena } = req.body;
  
    try {
      const maestro = await userService.verificarMaestro(correo, contrasena);
  
      if (maestro) {
        res.json({ success: true, maestro });
      } else {
        res.status(404).json({ success: false, message: 'Maestro no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error verificando maestro' });
    }
  }

module.exports = {
  verificarEstudiante,
  verificarMaestro
};
