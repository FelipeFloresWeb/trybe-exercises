/* 1. A função sum(a, b) retorna a soma do parâmetro a com o b */

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// const expected = sum(2, 2);

// assert.strictEqual(expected, 9, '2 + 2 = 4');

/* 2. Teste se o retorno de sum(4, 5) é 9 */

const expected = sum(4, 5);

assert.strictEqual(expected, 9, '4 + 5 = 9');
