import axios from "axios";
import { GET_ALL_PRODUCT, GET_ALL_USER, POST_USER } from "./actionsTypes";

export const getAllUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/users");
    dispatch({
      type: GET_ALL_USER,
      payload: data,
    });
  } catch (error) {
    return { messaje: `${error}` };
    console.log({ messaje: `${error}` });
  }
};

export const postUser = (payload) => async (dispatch) => {
  try {
    const userCreated = await axios.post(`/users`, payload);
    return dispatch({
      type: POST_USER,
      payload: userCreated,
    });
  } catch (e) {
    return { messaje: `${error}` };
    console.log({ messaje: `${error}` });
  }
};

export const getAllProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products");
    dispatch({
      type: GET_ALL_PRODUCT,
      payload: data,
    });
  } catch (error) {
    return { messaje: `${error}` };
    console.log({ messaje: `${error}` });
  }
};