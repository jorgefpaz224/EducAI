const express = require("express")
const userRoutes = require('./routes/userRoutes');
const notasRoutes = require('./routes/notasRoutes');
const tareaRoutes = require('./routes/tareaRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const tutorRoutes = require('./routes/tutorRoutes');

const app = express()
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use('/users',userRoutes);
app.use('/notas', notasRoutes);
app.use('/tareas', tareaRoutes);
app.use('/cursos', cursoRoutes);
app.use('/tutores', tutorRoutes);
//Hola
app.listen(5000, () => console.log('Server running on port 5000'));