import { getPokemons } from '../services/PokemonApi';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_ERROR = 'GET_POKEMONS_ERROR';

export const getGetPokemons = () => ({
  type: GET_POKEMONS,
});

export const getGetPokemonsSuccess = (payload) => ({
  type: GET_POKEMONS_SUCCESS,
  payload,
});

export const getGetPokemonsError = (payload) => ({
  type: GET_POKEMONS_ERROR,
  payload,
});

export const getGetPokemonsThunk = () => (dispatch) => {
  // is loading true
  dispatch(getGetPokemons());
  // chama a api
  getPokemons()
    .then((res) => { // deu certo a chamada da api
      const { results } = res.results;
      dispatch(getGetPokemonsSuccess({
        pokemons: results,
      })); // atualizar o estado global
    })
    .catch(() => { getGetPokemonsError(); }); // atualizar o estado global com erro
};