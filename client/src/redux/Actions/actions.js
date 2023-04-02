import axios from "axios";
import { GET_ALL_PRODUCT, GET_ALL_USER, POST_USER, FILTER_BY_GENDER, FILTER_BY_PRICE, FILTER_BY_SEASON, FILTER_BY_USED, FILTER_BY_SIZE, GET_PRODUCT_DETAIL, GET_SEARCHED_PRODUCTS } from "./actionsTypes";

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

export const filterByPrice = (payload) => {
  return {
    type: FILTER_BY_PRICE,
    payload: payload
  }
}

export const filterBySize = (payload) => {
  return {
    type: FILTER_BY_SIZE,
    payload: payload
  }
}

export const filterByUsed = (payload) => {
  return {
    type: FILTER_BY_USED,
    payload: payload
  }
}
export const filterByGender = (payload) => {
  return {
    type: FILTER_BY_GENDER,
    payload: payload
  }
}

export const getProductDetail = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${id}`)
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: data
    })
  } catch (error) {
    return { messaje: `${error}` };
  }
}

export const filterBySeason = (payload) => {
  return {
    type: FILTER_BY_SEASON,
    payload: payload
  }
}

export const getSearchedProducts = (product) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products?name=${product}`)
    console.log(product, 'llega');
    dispatch({
      type: GET_SEARCHED_PRODUCTS,
      payload: data,
    });
    
  } catch (error) {
    return { messaje: `${error}` };
  }
}

