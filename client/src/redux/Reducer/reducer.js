import { GET_ALL_PRODUCT, GET_ALL_USER, POST_USER, GET_PRODUCT_DETAIL } from "../Actions";

const initialState = {
  users: [],
  allUsers: [],
  allProducts: [],
  productDetail: []
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case GET_ALL_USER:
      return {
        ...state,
        allUsers: action.payload,
      };

    case GET_ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      }

    default:
      return state;
  }
};
