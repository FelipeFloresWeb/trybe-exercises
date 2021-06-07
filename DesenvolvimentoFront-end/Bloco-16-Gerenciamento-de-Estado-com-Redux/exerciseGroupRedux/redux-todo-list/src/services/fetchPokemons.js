const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon';
  const fetchAPI = await fetch(API_URL);
  const pokemons = await fetchAPI.json();
  return pokemons;
}

export default fetchPokemons;