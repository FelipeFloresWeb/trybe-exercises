/* eslint-disable no-console */
/* 7. Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano,
e false , caso contrário. */

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const expectedResult = false;

// const checkBirthYear = (obj1) => {
//   const arrayBirthYear = [];
//   obj1.forEach((el) => arrayBirthYear.push(el.author.birthYear));
//   return arrayBirthYear;
// };

const authorUnique = (obj) => {
  let isEqual = 0;
  obj.forEach((element) => {
    const ano = element.author.birthYear;
    obj.forEach((element2) => {
      if (element2.author.birthYear === ano && element !== element2) {
        isEqual += 1;
      }
      return isEqual;
    });
  });
  if (isEqual > 1) {
    return false;
  }
  return true;
};
console.log(authorUnique(books));

// function authorUnique(obj) {
//   const arrBirth = arrayBirth(obj);
//   obj.forEach((element) => {
//     console.log(arrBirth);
//   });
// }

assert.strictEqual(authorUnique(books), expectedResult);
