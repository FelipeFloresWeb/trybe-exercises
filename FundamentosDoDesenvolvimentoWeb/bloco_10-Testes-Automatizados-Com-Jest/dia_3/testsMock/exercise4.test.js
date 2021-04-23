/* 4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string
e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só
a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do
arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar
a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a
última letra de uma string. A terceira deve receber três strings e concatená-las. */

/* 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para
a primeira função. Após repetir a implementação, restaure a implementação original e crie
os testes necessários para validar. */

const stringFunctions = require('../src/exercise4');

jest.mock('../src/exercise4');

describe('Mock Teste da função stringToUpperCase', () => {
  afterEach(() => stringFunctions.stringToUpperCase.mockReset());

  test('Testa uma nova implementação onde a função deve retornar em \'lowercase\'', () => {
    stringFunctions.stringToUpperCase.mockImplementation(((string) => string.toLowerCase()));
    expect(stringFunctions.stringToUpperCase('TestanDo')).toMatch('testando');
  });
});

describe('Mock Teste da função theFirstLetter', () => {
  afterEach(() => stringFunctions.theFirstLetter.mockReset());

  test('Testa uma nova implementação da função theFirstLetter onde deve retornar a ultima letra', () => {
    stringFunctions.theFirstLetter.mockImplementation((string) => string.split('')[string.length - 1]);
    expect(stringFunctions.theFirstLetter('Ultima')).toMatch('a');
  });
});

describe('Mock Teste da função sumStrings', () => {
  afterEach(() => stringFunctions.sumStrings.mockReset());

  test('Testa uma nova implementação da função sumStrings onde deve retornar a concatenação de 3 Strings', () => {
    stringFunctions.sumStrings.mockImplementation((string1, string2, string3) => `${string1} ${string2} ${string3}`);
    expect(stringFunctions.sumStrings('1', '2', '3')).toMatch('1 2 3');
  });
});
