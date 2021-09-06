const express = require('express');
const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/UserController');

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/usuarios', UserController.listALL);

// app.post('usarios', UserController.cadastrar);

app.get('/produtos', ProductController.listALL);

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));
