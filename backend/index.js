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

//Logica del chatbot
const fs = require('fs');
const bodyParser = require('body-parser');
const natural = require('natural');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Inicializar variables para el chatbot
let intents = [];
const classifier = new natural.BayesClassifier();

// Leer y entrenar datos desde intents.json
fs.readFile('./intents.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error al leer intents.json:", err);
    return;
  }

  intents = JSON.parse(data).intents;

  intents.forEach(intent => {
    intent.patterns.forEach(pattern => {
      classifier.addDocument(pattern.toLowerCase(), intent.tag);
    });
  });

  classifier.train();
  console.log("Clasificador del chatbot entrenado con éxito.");
});

// Ruta para manejar preguntas del usuario
app.post('/chat', (req, res) => {
  if (intents.length === 0) {
    return res.status(500).json({ reply: "Error: Datos no cargados todavía." });
  }

  try {
    let userMessage = req.body.message.toLowerCase();
    userMessage = userMessage
      .replace(/(.)\1{2,}/g, '$1') // Eliminar caracteres repetidos
      .replace(/[^\w\sáéíóúüñ]/gi, '') // Eliminar caracteres especiales
      .trim();

    if (!userMessage) {
      return res.json({
        reply: "Lo siento, pero no puedo procesar mensajes vacíos o incoherentes. ¿Puedes intentarlo de nuevo?"
      });
    }

    const classifications = classifier.getClassifications(userMessage);
    const intentTag = classifications[0]?.label || null;
    const confidence = classifications[0]?.value || 0;

    const CONFIDENCE_THRESHOLD = 0;
    if (confidence < CONFIDENCE_THRESHOLD || !intentTag) {
      return res.json({
        reply: "Lo siento, no estoy seguro de cómo responder esa pregunta. ¿Puedes ser más específico?"
      });
    }

    const intent = intents.find(i => i.tag === intentTag);
    const reply = intent
      ? intent.responses[Math.floor(Math.random() * intent.responses.length)]
      : "Lo siento, no puedo responder eso en este momento.";

    res.json({ reply });
  } catch (error) {
    console.error("Error procesando la solicitud:", error);
    res.status(500).json({ reply: "Ocurrió un error procesando tu solicitud. Por favor, inténtalo de nuevo." });
  }
});


app.listen(5000, () => console.log('Server running on port 5000'));