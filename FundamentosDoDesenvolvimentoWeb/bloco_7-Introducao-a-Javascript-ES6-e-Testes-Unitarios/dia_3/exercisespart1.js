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

// function myRemove(arr, item) {
//   const newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

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

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// const expected = myRemove([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Erro: O array sofreu alteração');

/* 11. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado */
// const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
// assert.deepStrictEqual(expected, [1, 2, 4], 'Erro: O item 3 não foi removido');
// subustituido variavel 'i' por 'index' linha 76 Coluna 18;
// retornou o array esperado;

/* 12. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não
retorna o array [1, 2, 3, 4] */
// const expected = myRemoveWithoutCopy([1, 2, 3, 4], 3);
// assert.notDeepStrictEqual(expected, [1, 2, 3, 4], 'Erro: Retornou o Array [1, 2, 4]');
// não retornou o array [1, 2, 3, 4];

/* 13.Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array
passado por parâmetro sofreu alterações */

// assert.deepStrictEqual(expected, [1, 2, 4], 'Erro: O array sofreu não alterações');
// O array não sofreu alterações;

//  14. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado;
// const expected = myRemoveWithoutCopy([1, 2, 3, 4], 5);
// assert.deepStrictEqual(expected, [1, 2, 3, 4], 'Erro: O array sofreu alterações');
// Retoran o Array esperado;

/* 15. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for
divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível
apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso
num não seja um número */

// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// const expected = myFizzBuzz(3);
// assert.strictEqual(expected, 'fizz', 'Error: O retorno foi diferente de fizz');
// retornou fizz OK.

// 16. Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(15);
// assert.strictEqual(expected, 'fizzbuzz', 'Error: O retorno foi diferente de fizzbuzz');
// retornou fizzbuzz OK.

// 17. Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(3);
// assert.strictEqual(expected, 'fizz', 'Error: O retorno foi diferente de fizz');
// retornou fizz OK.

// 18. Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// const expected = myFizzBuzz(5);
// assert.strictEqual(expected, 'buzz', 'Error: O retorno foi diferente de buzz');
// retornou buzz OK.

// 19. Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o
// esperado:
// const expected = myFizzBuzz(16);
// assert.strictEqual(expected, 16, 'Error: O retorno foi diferente de 16');
// retornou 16 OK.

// 20. Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
// const expected = myFizzBuzz('16');
// assert.strictEqual(expected, false, 'Error: O retorno foi diferente de false');
// retornou false OK.

// 21. Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

// const obj2 = {
//   description: 'My Description',
//   title: 'My Title',
// };

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Método consultado em: https://pt.stackoverflow.com/questions/291203/como-comparar-se-dois-objetos-javascript-s%C3%A3o-iguais#:~:text=Infelizmente%2C%20ao%20contr%C3%A1rio%20de%20algumas,distintos%20de%20operadores%20de%20igualdade.

function isEquivalent(a, b) {
  // Acredito que essa seja uma das qualidades do código.
  // É realizada a verificação do que o objeto possui internamente, e isso
  // é passado diretamente para a variável.
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);
  // Então, é feita a verificação se os dois objetos possuem o mesmo
  // número de propriedades. Muito bom! E tira muito trabalho caso não
  // tenham.
  if (aProps.length !== bProps.length) {
    return false;
  }
  // Caso tenham o mesmo número, é realizada uma iteração por todas as
  // propriedades do objeto. Porém, como ressaltei antes, não busca por
  // objetos dentro de objetos, podendo retornar uma inconsistência.
  for (let i = 0; i < aProps.length; i += 1) {
    const propName = aProps[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}

// function compareObjects(firstObj, secondObj) {
//   const newObject1Entries = Object.entries(firstObj);
//   const newObject1EntriesSort = newObject1Entries.sort();
//   const newObject2Entries = Object.entries(secondObj);
//   const newObject2EntriesSort = newObject2Entries.sort();
//   let numberOfEqualItems = 0;

//   for (let index = 0; index < newObject1EntriesSort.length; index += 1) {
//     const element = newObject1EntriesSort[index];
//     const element2 = newObject2EntriesSort[index];
//     if (element[index][0] === element2[index][0] && element[index][1] === element2[index][1]) {
//       numberOfEqualItems += 1;
//     }
//   }
//   if (numberOfEqualItems === firstObj.length) {
//     return true;
//   }
//   return false;
// }

const expected = isEquivalent(obj1, obj3);
assert.strictEqual(expected, true, 'Error: O retorno foi diferente de true');
// retornou true OK.
