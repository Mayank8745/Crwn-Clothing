import ShopActionTypes from "./shop-action-types";

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: null,
  sections: null,
};

const previewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sections: action.payload,
      };

    case ShopActionTypes.FETCH_COLLECTION_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default previewReducer;
