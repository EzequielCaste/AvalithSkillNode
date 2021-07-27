const express = require('express');
const app = express();

app.get('/fecha', (req, res) => {
  res.send(`La fecha de hoy es: ${new Date().toUTCString().substring(0, 16)}`);
});

app.listen(3000, console.log('Listo!'));
