import { getAllPokemons } from '../services/fetchAPI';

export const ADD_POKEMONS =  'ADD_POKEMONS';
export const ADD_POKEMONS_SUCCESS =  'ADD_POKEMONS_SUCCESS';
export const ADD_POKEMONS_ERROR =  'ADD_POKEMONS_ERROR';

const addPokemons = () => ({
  type: ADD_POKEMONS,
});

export const addPokemonsSuccess = (payload) => ({
  type: ADD_POKEMONS_SUCCESS,
  payload,
});

export const addPokemonsError = (payload) => ({
  type: ADD_POKEMONS_ERROR,
  payload,
});


export const getAllPokemonsThunk = () => (dispatch) => {
  // is loading true
  dispatch(addPokemons());

  // chama a api
  getAllPokemons()
    .then((res) => { // deu certo a chamada da api
      const { pokemons } = res;
      dispatch(addPokemonsSuccess({
        pokemons: pokemons,
      })); // atualizar o estado global
    })
    .catch(() => { addPokemonsError(); }); // atualizar o estado global com erro
};


export default addPokemons;
