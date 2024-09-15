const express = require('express');
const app = express();
const port = 3000;

// Importa el procesador NLP
const { tokenizeText, analyzeSentiment, extractKeywords } = require('./nlpProcessor');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Ruta para tokenizar texto
app.post('/tokenize', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No se proporcionó texto' });
  }
  const tokens = tokenizeText(text);
  res.json({ tokens });
});

// Ruta para extraer palabras clave
app.post('/extract-keywords', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No se proporcionó texto' });
  }
  const keywords = extractKeywords(text);
  res.json({ keywords });
});
  
// Ruta para analizar el sentimiento
app.post('/analyze-sentiment', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'No se proporcionó texto' });
  }
  const sentiment = analyzeSentiment(text);
  res.json({ sentiment });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
