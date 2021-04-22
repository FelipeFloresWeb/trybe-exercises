const getRepos = require('../src/getRepos');

/* Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista. */

describe('Testes função getRepos()', () => {
  test('Verifica se a url \'sd-01-week4-5-project-todo-list\' é valida.', async () => {
    try {
      const getUser = await getRepos('https://api.github.com/orgs/tryber/sd-01-week4-5-project-todo-list');
      expect(getUser).resolves.toBeThruty();
    } catch (error) {
      expect(error).toEqual(error);
    }
  });

  test('Verifica se a url \'sd-01-week4-5-project-meme-generator\' é valida.', async () => {
    try {
      const getUser2 = await getRepos('https://api.github.com/orgs/tryber/sd-01-week4-5-project-meme-generator');
      expect(getUser2).resolves.toBeThruty();
    } catch (error) {
      expect(error).toEqual(error);
    }
  });
});
