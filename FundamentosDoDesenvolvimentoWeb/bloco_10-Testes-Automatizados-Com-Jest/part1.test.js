const sum = require('./dia_1/sum');
const myRemove = require('./dia_1/myRemove');
const myRemoveWithoutCopy = require('./dia_1/myRemoveWithoutCopy');

/* 1. A função sum(a, b) retorna a soma do parâmetro a com o b */

describe('Função sum() and myremove()', () => {
  // Teste se o retorno de sum(4, 5) é 9 *
  test('Verifica se ao somar 4 + 5 retorna 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  // Teste se o retorno de sum(0, 0) é 0
  test('Verifica se ao somar 0 + 0 retorna 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  test('Verifica se ao passar uma string, a função devolve um erro', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada
  // sum(4, "5")
  test('Verifica se a mensagem de erro é igual a: ("parameters must be numbers")', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });

  /* 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o
elemento item caso ele exista no array
*/

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  test('Verifique se a chamada myRemove([1, 2, 3, 4]) retorna 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContainEqual([1, 2, 3, 4]);
  });

  // Verifique se o array passado por parâmetro não sofreu alterações
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(() => myRemove([1, 2, 3, 4], 3)).not.toContainEqual([1, 2, 3, 4]);
  });

  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(() => myRemove([1, 2, 3, 4], 5)).not.toContainEqual(5);
  });

  /* 3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o
  próprio array sem o elemento item caso ele exista no array */

  // Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado

  // test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
  //   expect(() => myRemove([1, 2, 3, 4], 5)).toContain([1, 2, 3, 4]);
  // });
});
