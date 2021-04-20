const sum = require('../functions/sum');
const myRemove = require('../functions/myRemove');
const myRemoveWithoutCopy = require('../functions/myRemoveWithoutCopy');
const myFizzBuzz = require('../functions/myFizzBuzz');
const { obj1, obj2, obj3 } = require('../functions/jsonObj');

/* 1. A função sum(a, b) retorna a soma do parâmetro a com o b */

describe('Função sum()', () => {
  // 1. Teste se o retorno de sum(4, 5) é 9 *
  test('Verifica se ao somar 4 + 5 retorna 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  // 2. Teste se o retorno de sum(0, 0) é 0
  test('Verifica se ao somar 0 + 0 retorna 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  // 3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  test('Verifica se ao passar uma string, a função devolve um erro', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  // 4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada
  // sum(4, "5")
  test('Verifica se a mensagem de erro é igual a: ("parameters must be numbers")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});

/* 2. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o
elemento item caso ele exista no array
*/

describe('Função myRemove()', () => {
  // 1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  test('Verifique se a chamada myRemove([1, 2, 3, 4]) retorna 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  // 2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('Verifica se a chamada myRemove ([1, 2, 3, 4], 3),', () => {
    expect(myRemove(([1, 2, 3, 4], 3))).not.toEqual([1, 2, 3, 4]);
  });

  // 3. Verifique se o array passado por parâmetro não sofreu alterações
  test('Verifique se o array passado por parâmetro não sofreu alterações', () => {
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  // 4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(() => myRemove([1, 2, 3, 4], 5)).not.toContainEqual(5);
  });
});

//  3. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o
// próprio array sem o elemento item caso ele exista no array

describe('Função myRemoveWithoutCopy()', () => {
  // 1. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna 3', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  // 2. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  // 3. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  test('Verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  // 4. Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
  test('Verifique se o array passado por parâmetro sofreu alterações', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Função myFizzBuzz()', () => {
  /* A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for
  divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se
  divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e
  retorna false caso num não seja um número */

  // Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
  test('Ao chamar a função com um número divisível por 3 e 5 deve retornar fizzbuzz', () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });

  // Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
  test('Ao chamar a função com um número divisível por 3 deve retornar fizz', () => {
    expect(myFizzBuzz(3)).toMatch('fizz');
  });

  // Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
  test('Ao chamar a função com um número divisível por 5 deve retornar buzz', () => {
    expect(myFizzBuzz(5)).toMatch('buzz');
  });

  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno
  // é o esperado
  test('Deve retornar o mesmo numero passado por parametro', () => {
    expect(myFizzBuzz(7)).toBe(7);
  });

  // Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
  test('Deve retornar false caso algum elemento do parametro seja diferente do tipo number', () => {
    expect(myFizzBuzz('7')).toBeFalsy();
  });
});

// Compare dois objetos (JSON) para verificar se são idênticos ou não

test('Se dois elementos sao identicos deve retornar True', () => {
  expect(obj1).toEqual(obj2);
});
