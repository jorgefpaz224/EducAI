const express = require("express")
const userRoutes = require('./routes/userRoutes');
const app = express()
const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use('/api',userRoutes);
//Hola
app.listen(5000, () => console.log('Server running on port 5000'));