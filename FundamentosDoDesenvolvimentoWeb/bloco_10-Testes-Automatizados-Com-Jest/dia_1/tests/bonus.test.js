const searchEmployee = require('../functions/searchEmployee');

describe('Função searchEmployee()', () => {
  it('Testa a função searchEmployee existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Ao passar um ID incorreto deve retornar ID não identificada', () => {
    expect(() => searchEmployee('9852-2-2-8', 'firstName')).toThrowError(new Error('ID não identificada'));
  });

  it('Ao passar um ID correto e uma informação que não exista deve retornar: Informação indisponível', () => {
    expect(() => searchEmployee('9852-2-2', 'age')).toThrowError(new Error('Informação indisponível'));
  });

  it(`A função deve retornar um objeto no formato {id: '', firstName: ''},
  conforme as informações passadas por parametros`, () => {
    expect(searchEmployee('9852-2-2', 'firstName')).toEqual({ id: '9852-2-2', firstName: 'Jeff' });
  });
});
