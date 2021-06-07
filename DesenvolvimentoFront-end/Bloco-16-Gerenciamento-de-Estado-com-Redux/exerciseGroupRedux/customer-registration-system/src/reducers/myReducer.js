import {
  GET_POKEMONS, GET_POKEMONS_ERROR, GET_POKEMONS_SUCCESS,
} from '../actions/index';

const INITIAL_ISS_POKEMONS = {
  pokemons: [],
  error: null,
  isLoading: false,
};

const issPokemons = (
  state = INITIAL_ISS_POKEMONS,
  action,
) => {
  switch (action.type) {
  case GET_POKEMONS:
    return {
      ...state,
      isLoading: true,
    };
  case GET_POKEMONS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      pokemons: action.payload.results,
    };
  case GET_POKEMONS_ERROR:
    return {
      ...state,
      isLoading: false,
      error: action.payload.error,
    };
  default:
    return state;
  }
};

export default issPokemons;
