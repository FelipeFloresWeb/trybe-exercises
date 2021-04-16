const sum = require('./dia_1/sum');

/* A função sum(a, b) retorna a soma do parâmetro a com o b
Teste se o retorno de sum(4, 5) é 9 *
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5") */

describe('Função sum()', () => {
  test('Verifica se ao somar 4 + 5 retorna 9.', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Verifica se ao somar 0 + 0 retorna 0.', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Verifica se ao passar uma string, a função devolve um erro', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });

  test('Verifica se a mensagem de erro é igual a: ("parameters must be numbers")', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
