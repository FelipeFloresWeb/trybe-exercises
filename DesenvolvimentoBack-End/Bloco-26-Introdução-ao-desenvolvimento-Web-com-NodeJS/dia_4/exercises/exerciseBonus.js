const express = require('express');
const crypto = require('crypto');
const authMiddleware = require('./authMiddleware');

const app = express();

app.use(express.json());
app.use(authMiddleware);

app.use((err, req, res, next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.post('/signup', (req, res) => {
  const {
    email, password, firstName, phone,
  } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'missing fields' });
  }

  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
});

app.listen(3000, () => console.log('ouvindo na porta 3000!'));
