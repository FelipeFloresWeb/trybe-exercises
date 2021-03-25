// 1. A função sum(a, b) retorna a soma do parâmetro a com o b

const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   }

//   return a + b;
// }

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

// const expected = sum(4, '5');
// assert.strictEqual(expected, 9, `4 + ${5} = 9`);
// Mensagem retornada: parameters must be numbers;

/* 6. A função myRemove(arr, item) recebe um array arr e retorna uma
cópia desse array sem o elemento item caso ele exista no array */
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado:

function myRemove(arr, item) {
  const newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// const expected = myRemove([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 4], 'Erro: O numero 3 não foi removido');
// Retornou o array esperado;

// 7. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];
// const expected = myRemove([1, 2, 3, 4], 3);
// assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Erro: o Array foi alterado');
// OK! Não retorna o array [1, 2, 3, 4];

// 8. Verifique se o array passado por parâmetro não sofreu alterações;
// const expected = myRemove([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Erro: O array sofreu alteração');
// Retornou: O array sofreu alteração;

// 9. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
// const expected = myRemove([1, 2, 3, 4], 5);
/* assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Erro: o Array
foialterado por um numero que nao existe'); */
// Ok Retornou [1, 2, 3, 4];

/* 10 .A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o
elemento item caso ele exista no array */

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(i, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const expected = myRemove([1, 2, 3, 4], 3);
assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Erro: O array sofreu alteração');