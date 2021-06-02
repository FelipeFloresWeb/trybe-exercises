import ADD_PRODUCT from '../actions/index';

const INITIAL_STATE = {
  state: '',
  cartProducts: [],
  totalValue: 0,
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload.product],
        totalValue: state.totalValue + action.payload.product.price,
      };
    default:
      return state;
  }
}

export default myReducer;