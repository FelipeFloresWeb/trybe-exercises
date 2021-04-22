/* Utilize as funções do arquivo 'math.js' para realizar os exercícios: */
const math = require('./math');

/* Faça o mock da funcão subtrair e teste sua chamada. */

jest.mock('./math');

describe('Mock Teste da função subtrair', () => {
  test('Teste se a função foi chamada', () => {
    math.subtrair.mockImplementation((a, b) => a - b);
    math.subtrair(1, 1);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair).toHaveBeenCalledTimes(1);
    expect(math.subtrair).toHaveBeenCalledWith(1, 1);
    expect(math.subtrair(1, 1)).toBe(0);
  });
});

/* Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a
chamada e o retorno. */

describe('Mock Teste da função multiplicar', () => {
  test('Testa o retorno padrão como 10', () => {
    math.multiplicar.mockImplementation((a, b) => 10);
    expect(math.multiplicar(1, 1)).toBe(10);
  });

  test('Testa se a função foi chamada', () => {
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar).toHaveBeenCalledTimes(1);
  });
});

/* Faça o mock da função somar e implemente uma função que recebe dois valores e
retorna sua soma. */

describe('Mock Teste da função somar', () => {
  test('Testa se o retorno está correto', () => {
    math.somar.mockImplementation((a, b) => a + b);
    expect(math.somar(1, 5)).toBe(6);
  });

  /* Teste a chamada, o retorno e os parâmetros passados. */
  test('Testa se a função foi chamada 1 vez, e se os parâmetros foram 1 e 5', () => {
    expect(math.somar).toHaveBeenCalled();
    expect(math.somar).toHaveBeenCalledTimes(1);
    expect(math.somar).toHaveBeenCalledWith(1, 5);
  });
});

/* Faça o mock da função dividir e implemente um retorno padrão com o valor '15'.
Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'.
Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada. */

describe('Mock Teste da função dividir', () => {
  afterEach(() => math.dividir.mockReset());

  test('testa se a função possui um retorno padrão com o valor 15', () => {
    math.dividir.mockImplementation((a, b) => 15);
    math.dividir(1, 1);
    expect(math.dividir(1, 1)).toBe(15);
  });

  test('testa se a função foi chamada com os parametros 1 e 1', () => {
    math.dividir(1, 1);
    expect(math.dividir).toHaveBeenCalledWith(1, 1);
  });

  test('testa se a função foi chamada', () => {
    math.dividir(1, 1);
    expect(math.dividir).toHaveBeenCalled();
  });

  test('testa se a função foi chamada 2 vezes', () => {
    math.dividir(1, 1);
    math.dividir(1, 1);
    expect(math.dividir).toHaveBeenCalledTimes(2);
  });
});
/* Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original.
Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a
implementação original da funçãoe teste sua execução. */

describe('Mock Teste função subtrair', () => {
  afterEach(() => math.subtrair.mockReset());

  test('testa se a função retorna o valor 20', () => {
    math.subtrair.mockImplementation((a, b) => 20);
    expect(math.subtrair(1, 1)).toBe(20);
  });
});
