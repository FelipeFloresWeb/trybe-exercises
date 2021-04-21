const {
  getUserName,
  findUserById,
} = require('../src/getUserName');

describe('Teste function getUserName()', () => {
  test('Testa se a função  getUserName existe', () => {
    expect(typeof getUserName).toBe('function');
  });

  test('Ao passar um ID invalido deve retornar um erro', () => {
    return getUserName(2).catch(error => 
    expect(error).toEqual({ error: 'User with ' + 2 + ' not found.' })
    );
  });

  test('Testa se ao passar um ID válido retorna um nome referente ao ID', async () => {
    expect.assertions(1);
    await expect(getUserName(4)).resolves.toEqual('Mark');
  });
});
