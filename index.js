const express = require('express');
const app = express();
const fs = require('fs').promises;

app.use(express.json());

app.get('/fecha', (req, res) => {
  res.send(`La fecha de hoy es: ${new Date().toUTCString().substring(0, 16)}`);
});

app.get('/texto', async (req, res) => {
  try {
    const texto = await fs.readFile('./texto.txt', 'utf-8');
    res.send(texto);
  } catch (error) {
    res.send(error);
  }
});

app.post('/', (req, res) => {
  res.send(`Buenos días ${req.body.nombre}`);
});

app.listen(3000, console.log('Listo!'));
