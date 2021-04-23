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

/* 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa
implementação deve ocorrer uma única vez. Faça os testes necessários. */

describe('Mock Test 2 da função randomNumber', () => {
  afterEach(() => randomNumber.mockReset());

  test('Testa uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
    randomNumber.mockImplementation((a, b) => a / b);
    expect(randomNumber(10, 5)).toBe(2);
  });
});

/* 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova
implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos
testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne
seu dobro. Faça os testes necessários. */

describe('Mock Test 3 da função randomNumber', () => {
  afterEach(() => randomNumber.mockReset());

  test('Testa uma nova implementação que receba três parâmetros, e deve retornar a multiplicação de todos eles', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(2, 2, 2)).toBe(8);
  });

  test('Testa uma nova implementação que receba 1 parâmetro, e retorna o seu dobro', () => {
    randomNumber.mockImplementation((a) => a * 2);
    expect(randomNumber(2)).toBe(4);
  });
});
