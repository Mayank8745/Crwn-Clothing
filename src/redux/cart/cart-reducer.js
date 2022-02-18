import { cartActionTypes } from "./cart-action-types";
import { addItemtoArray, removeItemFromArray } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemtoArray(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => action.payload.id !== item.id
        ),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromArray(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
