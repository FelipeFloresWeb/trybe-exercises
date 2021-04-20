const { encode, decode } = require('../functions/encodeDecode');
const techList = require('../functions/techList');
const hydrate = require('../functions/hydrate');
const mul = require('../functions/mul');

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

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas',
      },
      {
        tech: 'HTML',
        name: 'Lucas',
      },
      {
        tech: 'JavaScript',
        name: 'Lucas',
      },
      {
        tech: 'Jest',
        name: 'Lucas',
      },
      {
        tech: 'React',
        name: 'Lucas',
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

describe('Testa a função mul', () => {
  test('a função retorna 9', () => {
    expect(mul(3, 3)).toEqual(9);
  });
});
