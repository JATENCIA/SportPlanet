import axios from "axios";
import Swal from "sweetalert2";
import {
  GET_ALL_PRODUCT,
  GET_ALL_USER,
  POST_USER,
  FILTER_BY_GENDER,
  FILTER_BY_PRICE,
  FILTER_BY_SEASON,
  FILTER_BY_USED,
  FILTER_BY_SIZE,
  GET_PRODUCT_DETAIL,
  GET_SEARCHED_PRODUCTS,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  SHOP,
  CLEAN_SEARCHED_PRODUCTS,
  ADD_REVIEW,
  REMOVE_ONE_ITEM,
  RESET_FILTERS,
} from "./actionsTypes";

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
    payload: payload,
  };
};

export const filterBySize = (payload) => {
  return {
    type: FILTER_BY_SIZE,
    payload: payload,
  };
};

export const filterByUsed = (payload) => {
  return {
    type: FILTER_BY_USED,
    payload: payload,
  };
};
export const filterByGender = (payload) => {
  return {
    type: FILTER_BY_GENDER,
    payload: payload,
  };
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAIL,
      payload: data,
    });
  } catch (error) {
    return { messaje: `${error}` };
  }
};

export const filterBySeason = (payload) => {
  return {
    type: FILTER_BY_SEASON,
    payload: payload,
  };
};

export const getSearchedProducts = (product, navigate) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/products?name=${product}`);

      if (!data.length) {
        await Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `We didn't find "${product}" in our system`,
        });
        navigate("/home");
      } else {
        dispatch({
          type: GET_SEARCHED_PRODUCTS,
          payload: data,
        });
      }
    } catch (error) {
      return { messaje: `${error}` };
    }
  };
};

export const cleanSearchedProducts = () => {
  return { type: CLEAN_SEARCHED_PRODUCTS };
};

export const addToCart = (productCart) => {
  return {
    type: ADD_TO_CART,

    payload: productCart,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeAllCart = (id) => {
  console.log("🚀 ~ file: actions.js:154 ~ removeAllCart ~ id:", id);
  return {
    type: REMOVE_ALL_FROM_CART,
    payload: id,
  };
};

export const removeOneCart = (id, color, size, UUID) => {
  let product = {
    id: id,
    color: color,
    size: size,
    UUID: UUID,
  };
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: product,
  };
};
export const removeItemCart = (id, color, size) => {
  let product = {
    id: id,
    color: color,
    size: size,
  };
  return {
    type: REMOVE_ONE_ITEM,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const shop = (item) => {
  return async function (dispatch) {
    const apic = await axios.post("/payments", item);
    const shop = apic.data.url;

    dispatch({
      type: SHOP,
      payload: shop,
    });
  };
};

export const addReview = (payload) => {
  return async function () {
    const review = await axios.post("/productReview", payload);
    return review;
  };
};
export const resetFilters = (payload) => {
  return {
    type: RESET_FILTERS,
    payload: payload,
  };
};
