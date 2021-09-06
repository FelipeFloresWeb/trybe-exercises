/* eslint-disable */
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const port = 3000;

const Author = require('./controllers/Author');

app.use(bodyParser.json());

app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors/', Author.create);

app.listen(port, () => console.log('Example app listening on port 3000'));
