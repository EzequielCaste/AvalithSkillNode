const express = require('express');
const app = express();
const fs = require('fs');

app.get('/fecha', (req, res) => {
  res.send(`La fecha de hoy es: ${new Date().toUTCString().substring(0, 16)}`);
});

app.get('/texto', (req, res) => {
  try {
    const texto = fs.readFileSync('./texto.txt', 'utf-8');
    res.send(texto);
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, console.log('Listo!'));
