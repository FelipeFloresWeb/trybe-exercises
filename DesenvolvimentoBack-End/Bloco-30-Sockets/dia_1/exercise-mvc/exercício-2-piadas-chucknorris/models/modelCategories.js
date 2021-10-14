const axios = require('axios');

const jokeByCategory = async (category) => {
  const categoryJoke = await axios(`https://api.chucknorris.io/jokes/random?category=${category}`);

  return categoryJoke.data.value;
}

const getRandomJoke = async () => {
  const randomJoke = await axios('https://api.chucknorris.io/jokes/random');

  return randomJoke.data.value;
}

const getCategories = async () => {
  const fetchCategories = await axios('https://api.chucknorris.io/jokes/categories');

  return fetchCategories.data;
}

module.exports = {
  getCategories,
  getRandomJoke,
  jokeByCategory,
};
