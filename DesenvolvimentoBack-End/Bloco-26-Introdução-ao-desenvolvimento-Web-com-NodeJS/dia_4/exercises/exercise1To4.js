const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
