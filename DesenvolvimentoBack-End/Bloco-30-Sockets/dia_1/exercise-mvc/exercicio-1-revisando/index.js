const express = require('express');
const jokesControllers = require('./controllers/jokeController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', jokesControllers.listJokes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server runing on ${PORT}`));
