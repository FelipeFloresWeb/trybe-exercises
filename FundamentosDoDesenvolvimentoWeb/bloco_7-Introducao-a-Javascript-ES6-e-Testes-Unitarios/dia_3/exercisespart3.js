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

const removeVowels = (word) => {
  let results = '';
  let numberOfVogals = 0;
  const characters = word.split('');
  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a'
      || characters[index] === 'o'
      || characters[index] === 'i'
      || characters[index] === 'e'
      || characters[index] === 'u'
    ) {
      numberOfVogals += 1;
      results += numberOfVogals;
    } else {
      results += characters[index];
    }
  }
  return results;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

const output = removeVowels(parameter);
assert.strictEqual(typeof (removeVowels), 'function');
assert.strictEqual(output, result, 'Error: The array has not correct changed');
