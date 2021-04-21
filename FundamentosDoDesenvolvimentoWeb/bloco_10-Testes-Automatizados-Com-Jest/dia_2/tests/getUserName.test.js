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

/* 3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
Dica: Utilize o try/catch para o caso de erro. */

describe('Teste função getUserName(), com o método async/await', () => {
  try {
    test('verifica se a função getUserName existe', async () => {
      expect (typeof getUserName).toBe('function');
    });

    test('Verifica que ao passar um ID válido retorna o nome da pessoa', async () => {
      const name = await getUserName(4);
      expect (name).toBe('Mark');
    });
  } catch (error) {
    expect(error).toEqual({ error: 'User with ' + id + ' not found.' });
  }
});
