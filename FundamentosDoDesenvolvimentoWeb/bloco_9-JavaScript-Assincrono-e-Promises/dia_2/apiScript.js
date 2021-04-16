/* eslint-disable no-console */
const API_URL = 'https://icanhazdadjoke.com/';
const fetch = require('node-fetch');

const num = () => Math.floor((Math.random() * 51) ** 2);
const arr = [num(), num(), num(), num(), num(), num(), num(), num(), num(), num()];
const sumOfArr = arr.reduce((acc, item) => acc + item, 0);

const divBy = (number) => {
  const output = [2, 3, 5, 10];
  const arroutput = output.map((el) => parseInt((number / el), 10));
  return arroutput.reduce((acc, item) => acc + item, 0);
};

const thePromisse = (element) => new Promise((resolve, reject) => {
  if (element > 8000) {
    reject(new Error('É mais de oito mil! Essa promise deve estar quebrada!'));
  } else {
    resolve(console.log(divBy(element)));
  }
});
const fetchThePromisse = async () => {
  try {
    await thePromisse(sumOfArr);
  } catch (error) {
    console.log(error);
  }
};
fetchThePromisse();

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
//     await chJoke(param);
//     await fetchJoke(param);
//   } catch (error) {
//     console.log(error);
//   }
// };
