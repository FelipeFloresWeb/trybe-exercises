// Reescrevendo funções utilizando TDD - Parte 3
const assert = require('assert');
/* Use a variável parameter como parâmetro da função abaixo,
escreva testes para verificar se a mesma está retornando como se vê na
variável result e, caso não esteja, altere o código para que ele passe nos testes. */

const greetPeople = (people) => {
  const greeting = 'Hello ';
  const result = [];
  for (const value of people) {
    const text = `${greeting}${value}`;
    result.push(text);
  }
  return result;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeople(parameter);
assert.strictEqual(typeof (greetPeople), 'function');
assert.deepStrictEqual(output, result, 'Error: The array has not been changed');
// assert.deepStrictEqual(myArray, unchanged);
