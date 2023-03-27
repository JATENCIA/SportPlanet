import { GET_ALL_USER, POST_USER } from "../Actions";

const initialState = {
  users: [],
  usersiD: [],
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
        usersiD: action.payload,
      };

    default:
      return state;
  }
};
