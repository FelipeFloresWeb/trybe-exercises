const express = require('express');
// const bodyParser = require('body-parser');
const jokesControllers = require('./controllers/jokeController');

const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', jokesControllers.listJokes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server runing on ${PORT}`));
