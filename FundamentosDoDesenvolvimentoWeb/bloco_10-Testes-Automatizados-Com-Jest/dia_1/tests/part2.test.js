const { encode, decode } = require('../functions/encodeDecode');

describe('function encode()', () => {
  // 1. Teste se encode e decode são funções;
  test('Verifica se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  /* 2. Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e
  5, respectivamente; */
  test(`Verifica se ao passar aeiou retorna '1234'`, () => {
    expect(encode('aeiou')).toMatch('1234');
  });

  // 4. Teste se as demais letras/números não são convertidos para cada caso;
  test(`Verifica se ao passar letras/números não são convertidos para cada caso`, () => {
    expect(encode('cbxjy')).toMatch('cbxjy');
  });

  /* 5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres
  que a string passada como parâmetro */
  test(`Verifica se ao passar letras/números não são convertidos para cada caso`, () => {
    expect(5 === encode('67890').length).toBeTruthy();
  });
});

describe('function decode()', () => {
  // 1. Teste se encode e decode são funções;
  test('Verifica se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  /* 3. Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais
  a, e, i, o, u , respectivamente; */
  test(`Verifica se ao passar aeiou retorna '1234'`, () => {
    expect(decode('12345')).toMatch('aeiou');
  });

  // 4. Teste se as demais letras/números não são convertidos para cada caso;
  test(`Verifica se ao passar letras/números não são convertidos para cada caso`, () => {
    expect(decode('67890')).toMatch('67890');
  });

  /* 5. Teste se a string que é retornada pelas funções têm o mesmo número de caracteres
  que a string passada como parâmetro */
  test(`Verifica se ao passar letras/números não são convertidos para cada caso`, () => {
    expect(decode('67890')).toHaveLength(5);
  });
});
