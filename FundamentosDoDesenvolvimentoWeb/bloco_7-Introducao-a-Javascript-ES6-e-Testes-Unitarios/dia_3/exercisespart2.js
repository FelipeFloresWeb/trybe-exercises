/* eslint-disable no-console */
// 1. Escreva a função addOne para passar nos testes já implementados.

const assert = require('assert');

// const addOne = (array) => {
//   const arrayOutput = [];
//   for (let index = 0; index < array.length; index += 1) {
//     let element = array[index];
//     element += 1;
//     arrayOutput.push(element);
//   }
//   return arrayOutput;
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);

// 2. Escreva a função wordLengths para passar nos testes já implementados.

// const wordLengths = (array) => {
//   const arrayOutput = [];
//   for (let index = 0; index < array.length; index += 1) {
//     const element = array[index];
//     arrayOutput.push(element.length);
//   }
//   return arrayOutput;
// };

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);

// 3. Escreva a função sumAllNumbers para passar nos testes já implementados.

// const sumAllNumbers = (arr) => {
//   let result = 0;
//   for (let index = 0; index < arr.length; index += 1) {
//     result += arr[index];
//   }
//   return result;
// };

// const numbers = [9, 23, 10, 3, 8];
// const expected = 53;
// const output = sumAllNumbers(numbers);

// assert.strictEqual(typeof sumAllNumbers, 'function');
// assert.strictEqual(output, expected);

// 4.Escreva a função findTheNeedle para passar nos testes já implementados.

const findTheNeedle = (array, string) => {
  let result = -1;
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if (string === element) {
      result = index;
    }
  }
  return result;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
