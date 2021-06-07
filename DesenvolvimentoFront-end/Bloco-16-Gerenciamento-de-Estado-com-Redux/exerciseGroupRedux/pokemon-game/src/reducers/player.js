import { ADD_POKEMONS, ADD_POKEMONS_SUCCESS, ADD_POKEMONS_ERROR } from '../actions/player';

const INIT_STATE = {
  pokemons: [],
  playerPokemon: {},
  isLoading: false,
  error: null
};

function selectPokemon(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_POKEMONS:
      return {...state, isLoading: true};
    case ADD_POKEMONS_SUCCESS:
      return {...state, isLoading: false, pokemons: action.payload.pokemons};
    case ADD_POKEMONS_ERROR:
      return {...state, isLoading: false, error: action.payload.error};
    default:
      return state;
  }
}

export default selectPokemon;
