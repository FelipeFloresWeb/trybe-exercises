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

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const author = await User.findById(id);

  if (!author) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  return res.status(200).json(author);
});

app.put('/user/:id', async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const { id } = req.params;
  const author = await User.userUpdate(id, firstName, lastName, email, password);

  if (!author) {
    return res.status(404).json({
      error: true,
      message: 'Usuário não encontrado',
    });
  }

  return res.status(200).json(author);
});

app.listen(port, () => console.log('Example app listening on port 3000'));
