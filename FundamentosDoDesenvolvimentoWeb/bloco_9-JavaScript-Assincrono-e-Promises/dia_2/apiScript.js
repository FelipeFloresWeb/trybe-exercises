/* eslint-disable no-console */
const API_URL = 'https://icanhazdadjoke.com/';

const createJokeText = (obj) => {
  const selectH2 = document.querySelector('h2');
  selectH2.innerHTML = obj.joke;
  document.querySelector('h1').appendChild(selectH2);
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => createJokeText(data));
};

window.onload = () => fetchJoke();

// const translatedweord = async () => {
//   try {
//     await fetchJoke(param);
//     await fetchJoke(param);
//     await fetchJoke(param);
//     await fetchJoke(param);
//     await fetchJoke(param);
//   } catch (error) {
//     console.log(error);
//   }
// };
