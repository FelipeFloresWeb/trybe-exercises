const fetch = require('node-fetch');

const API_URL = 'https://icanhazdadjoke.com/';

// Api escrita usando promise
const fetchJokePromise = () => (
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.joke)
);

// Api escrita usando async await
const fetchJokeAsync = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.joke;
};

module.exports = {
  fetchJokePromise,
  fetchJokeAsync,
};
