const db = require('../db');

async function verificarEstudiante(correo, contrasena) {
  const estudiante = await db('Estudiantes')
    .select('id_estudiante', 'PrimerNombre', 'Apellido')
    .where({ Correo: correo, contrasena: contrasena })
    .first();

  return estudiante || null; 
}

async function verificarMaestro(correo, contrasena) {
    const maestro = await db('Maestros')
      .select('id_maestro', 'PrimerNombre', 'Apellido')
      .where({ Correo: correo, contrasena: contrasena })
      .first();
  
    return maestro || null; 
}

module.exports = {
  verificarEstudiante,
  verificarMaestro
};
