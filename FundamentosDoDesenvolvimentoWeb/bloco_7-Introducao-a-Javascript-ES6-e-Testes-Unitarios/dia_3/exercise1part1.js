/* A função sum(a, b) retorna a soma do parâmetro a com o b */

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const expected = sum(2, 2);

assert.strictEqual(expected, 4, '2 + 2 = 4');
