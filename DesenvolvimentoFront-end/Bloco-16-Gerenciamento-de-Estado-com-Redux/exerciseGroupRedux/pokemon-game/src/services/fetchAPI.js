const URL_API = 'https://pokeapi.co/api/v2/pokemon';

export const getAllPokemons = () => (
  fetch(URL_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getAllPokemons;
