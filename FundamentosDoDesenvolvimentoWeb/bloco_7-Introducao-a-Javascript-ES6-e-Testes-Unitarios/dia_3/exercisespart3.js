// Reescrevendo funções utilizando TDD - Parte 3
const assert = require('assert');
/* Use a variável parameter como parâmetro da função abaixo,
escreva testes para verificar se a mesma está retornando como se vê na
variável result e, caso não esteja, altere o código para que ele passe nos testes. */

// const greetPeople = (people) => {
//   const greeting = 'Hello ';
//   const result = [];
//   for (const value of people) {
//     const text = `${greeting}${value}`;
//     result.push(text);
//   }
//   return result;
// };

// const parameter = ['Irina', 'Ashleigh', 'Elsa'];
// const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// const output = greetPeople(parameter);
// assert.strictEqual(typeof (greetPeople), 'function');
// assert.deepStrictEqual(output, result, 'Error: The array has not been changed');

//  2. Use a variável parameter como parâmetro da função abaixo,
// escreva testes para verificar se a mesma está retornando como se vê na
// variável result e, caso não esteja, altere o código para que ele passe nos testes.

// const removeVowels = (word) => {
//   let results = '';
//   let numberOfVogals = 0;
//   if (typeof (word) !== 'string') {
//     throw new Error('Enter only letters');
//   }
//   for (let index = 0; index < word.length; index += 1) {
//     if (
//       word[index] === 'a'
//       || word[index] === 'o'
//       || word[index] === 'i'
//       || word[index] === 'e'
//       || word[index] === 'u'
//     ) {
//       numberOfVogals += 1;
//       results += numberOfVogals;
//     } else {
//       results += word[index];
//     }
//   }
//   return results;
// };

// const parameter = 'Dayane';
// const result = 'D1y2n3';

// const output = removeVowels(parameter);
// assert.strictEqual(typeof (removeVowels), 'function');
// assert.strictEqual(output, result, 'Error: The array has not correct changed');

/* 3. Use a variável parameter como parâmetro da função abaixo,
escreva testes para verificar se a mesma está retornando como se vê
na variável result e, caso não esteja, altere o código para que ele passe nos testes. */

// const greaterThanTen = (array) => {
//   const results = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (typeof (array[index]) !== 'number') {
//       throw new Error('Enter only numbers');
//     }
//     if (array[index] > 10) {
//       results.push(array[index]);
//     }
//   }
//   return results;
// };

// const parameter = [4, 10, 32, 9, 21];
// const result = [32, 21];

// const output = greaterThanTen(parameter);
// assert.deepStrictEqual(typeof (greaterThanTen), 'function');
// assert.deepStrictEqual(output, result, 'Error: The array has not correct changed');

/* 4. Use a variável parameter como parâmetro da função abaixo,
escreva testes para verificar se a mesma está retornando como se vê
na variável result e, caso não esteja, altere o código para que ele passe nos testes. */

const secondThirdSmallest = (array) => {
  const results = [];
  for (const iterator of array) {
    if (typeof (iterator) !== 'number') {
      throw new Error('Enter only numbers');
    }
  }
  array.sort((x, y) => x - y);

  results.push(array[1]);
  results.push(array[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

const output = secondThirdSmallest(parameter);
assert.deepStrictEqual(typeof (secondThirdSmallest), 'function');
assert.deepStrictEqual(output, result, 'Error: The array has not correct changed');
