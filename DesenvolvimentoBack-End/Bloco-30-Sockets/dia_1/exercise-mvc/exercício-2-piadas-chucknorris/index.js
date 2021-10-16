const express = require('express');
const categoriesController = require('./controllers/categoriesController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

// https://www.geeksforgeeks.org/express-js-res-redirect-function/
app.get('/', (req, res) => {
  res.redirect('/categories');
});

app.get('/jokes', categoriesController.getRandomJoke);
app.get('/jokes/:categorie', categoriesController.jokeByCategory);
app.get('/categories', categoriesController.getCategories);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server runing on ${PORT}`));
