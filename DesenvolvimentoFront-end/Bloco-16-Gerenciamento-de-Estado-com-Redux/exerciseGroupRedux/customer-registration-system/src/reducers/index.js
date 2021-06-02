import { combineReducers } from 'redux';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  products: myReducer
});

export default rootReducer;