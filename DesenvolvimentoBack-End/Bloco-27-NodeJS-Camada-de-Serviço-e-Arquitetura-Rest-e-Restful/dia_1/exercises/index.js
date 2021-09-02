const bodyParser = require('body-parser');
const express = require('express');
const User = require('./models/user');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/user', async (req, res) => {
  const users = await User.getAllUsers();

  return res.status(200).json(users);
});

app.post('/user', async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const validade = User.isValid(firstName, lastName, email, password);
  if (!validade) {
    return res.status(404).json({
      error: true,
      message: 'Algum dos campos estão inválidos',
    });
  }
  const newUser = await User.create(firstName, lastName, email, password);

  return res.status(201).json(newUser);
});

app.listen(port, () => console.log('Example app listening on port 3000'));
