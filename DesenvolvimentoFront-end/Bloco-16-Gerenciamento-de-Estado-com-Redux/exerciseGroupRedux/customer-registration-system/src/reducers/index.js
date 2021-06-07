import { combineReducers } from 'redux';
import issPokemons from './myReducer';

const rootReducer = combineReducers({
  issPokemons,
});

export default rootReducer;