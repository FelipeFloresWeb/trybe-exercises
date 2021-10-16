const axios = require('axios');

const getJokes = async () => {
  const fetchJoke = await axios('https://v2.jokeapi.dev/joke/Any');
  return fetchJoke.data.setup;
}

module.exports = {
  getJokes,
};
