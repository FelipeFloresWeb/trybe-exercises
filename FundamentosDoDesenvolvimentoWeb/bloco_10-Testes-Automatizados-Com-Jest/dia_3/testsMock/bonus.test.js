const fetch = require('node-fetch');
const { fetchJokePromise, fetchJokeAsync } = require('../src/bonus');

jest.mock('node-fetch');

it('devera retornar as piadas', () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  return fetchJokePromise()
    .then((data) => expect(data).toEqual('Whiteboards ... are remarkable.'));
});

it('devera retornar as piadas (async/await)', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  const data = await fetchJokeAsync();
  expect(data).toEqual('Whiteboards ... are remarkable.');
});
