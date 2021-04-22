/* 1. Crie uma função que gere um número aleatório entre 0 e 100.
Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno
padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada. */

const randomNumber = require('../src/randomNum');

jest.mock('../src/randomNum');

describe('Mock Teste da função randomNumber', () => {
  afterEach(() => randomNumber.mockReset());

  test('Testa se a função foi chamada', () => {
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
  });

  test('Testa se a função retorna o valor 10', () => {
    randomNumber.mockImplementation(() => 10);
    randomNumber();
    expect(randomNumber()).toBe(10);
  });

  test('Testa se a função foi chamada 3 vezes', () => {
    randomNumber();
    randomNumber();
    randomNumber();
    expect(randomNumber).toHaveBeenCalledTimes(3);
  });
});
