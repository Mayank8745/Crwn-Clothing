import ShopActionTypes from "./shop-action-types";
const INITIAL_STATE = {};

const previewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        sections: action.payload,
      };
    default:
      return state;
  }
};

export default previewReducer;
