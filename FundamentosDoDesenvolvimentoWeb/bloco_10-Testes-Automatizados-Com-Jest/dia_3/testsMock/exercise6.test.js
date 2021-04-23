const api = require("../src/exercise6");

describe('testando a requisição', () => {
  const apiURL = jest.spyOn(api, 'fetchURL');
  afterEach(apiURL.mockReset);

  test('testando requisição caso a promise resolva', async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test('testando requisição caso a promise seja rejeitada', async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});

// test('devera retornar as piadas (async/await)', async () => {
//   const joke = {
//     'id': '7h3oGtrOfxc',
//     'joke': 'Whiteboards ... are remarkable.',
//     'status': 200
//   };

//   fetchDogs.mockImplementation(() => Promise.resolve({
//     json: () => Promise.resolve(joke),
//   }));

//   const data = await fetchJokeAsync()
//   expect(data).toEqual("Whiteboards ... are remarkable.");
// });
