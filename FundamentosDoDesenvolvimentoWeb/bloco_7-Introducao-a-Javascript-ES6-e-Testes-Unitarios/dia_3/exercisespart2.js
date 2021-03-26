/* eslint-disable no-console */
// 1. Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');

const addOne = (array) => {
  const arrayOutput = [];
  for (let index = 0; index < array.length; index += 1) {
    let element = array[index];
    element += 1;
    arrayOutput.push(element);
  }
  return arrayOutput;
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
