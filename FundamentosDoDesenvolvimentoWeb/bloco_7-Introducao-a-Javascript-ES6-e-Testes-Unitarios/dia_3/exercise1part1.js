// 1. A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// const expected = sum(2, 2);
// assert.strictEqual(expected, 9, '2 + 2 = 4');

// 2. Teste se o retorno de sum(4, 5) é 9
// const expected = sum(4, 5);
// assert.strictEqual(expected, 9, '4 + 5 = 9');

// 3. Teste se o retorno de sum(0, 0) é 0
// const expected = sum(0, 0);
// assert.strictEqual(expected, 0, '0 + 0 = 0');

// 4. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5).
// const expected = sum(4, '5');
// assert.strictEqual(expected, 9, `4 + ${5} = 9`);
// apresentou erro por conter um parametro diferente do tipo number;

/* 5. Teste se a mensagem de erro é "parameters must be numbers" quando
realizar a chamada sum(4, "5") */

const expected = sum(4, '5');
assert.strictEqual(expected, 9, `4 + ${5} = 9`);
// Mensagem retornada: parameters must be numbers;
