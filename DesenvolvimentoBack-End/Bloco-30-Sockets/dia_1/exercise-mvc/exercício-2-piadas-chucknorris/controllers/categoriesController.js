const modelCategories = require('../models/modelCategories');

const jokeByCategory = async (req, res) => {
  const { categorie } = req.params;
  const jokeByCategory = await modelCategories.jokeByCategory(categorie);

  res.status(200).render('categories/jokeCategory.ejs', { jokeByCategory })
};

const getRandomJoke = async (req, res) => {
  const joke = await modelCategories.getRandomJoke();

  res.status(200).render('categories/joke.ejs', { joke })
};

const getCategories = async (req, res) => {
  const categories = await modelCategories.getCategories();

  res.status(200).render('categories/index.ejs', { categories })
};

module.exports = {
  getCategories,
  getRandomJoke,
  jokeByCategory,
}