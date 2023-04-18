import {
  FILTER_BY_GENDER,
  FILTER_BY_SEASON,
  FILTER_BY_PRICE,
  FILTER_BY_SIZE,
  FILTER_BY_USED,
  GET_ALL_PRODUCT,
  GET_ALL_USER,
  POST_USER,
  GET_PRODUCT_DETAIL,
  GET_SEARCHED_PRODUCTS,
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  REMOVE_ALL_FROM_CART,
  CLEAR_CART,
  SHOP,
  CLEAN_SEARCHED_PRODUCTS,
  REMOVE_ONE_ITEM,
  RESET_FILTERS,
} from "../Actions";
import { useDispatch } from "react-redux";

const initialState = {
  users: [],
  allUsers: [],
  allProducts: [],
  productDetail: [],
  searchedProducts: [],
  filteredProducts: [],
  filteredProducts2: [],
  userProducts: [],
  shoppingCart: [],
  buttonPay: "",
};

const storedValue = window.localStorage.getItem("cart");
let value = [];
if (storedValue) {
  value = JSON.parse(storedValue);
  if (typeof value === "string") value = JSON.parse(value);
}

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
        filteredProducts: action.payload,
        filteredProducts2: action.payload,
      };

    case FILTER_BY_PRICE:
      let productsSorted =
        action.payload === "lowerToHigher"
          ? [...state.filteredProducts] /* && [...state.filteredProducts2] */
              .sort((a, b) => {
                if (a.price > b.price) return 1;
                if (b.price > a.price) return -1;
                return 0;
              })
          : [...state.filteredProducts] /* && [...state.filteredProducts2] */
              .sort((a, b) => {
                if (a.price > b.price) return -1;
                if (b.price > a.price) return 1;
                return 0;
              });

      return {
        ...state,
        filteredProducts: productsSorted,
      };

    case FILTER_BY_USED:
      let productsFiltered =
        action.payload === "new"
          ? [...state.filteredProducts2].filter((product) => {
              return product.state === "new";
            })
          : [...state.filteredProducts2].filter(
              (product) => product.state === "used"
            );
      return {
        ...state,
        filteredProducts: productsFiltered,
      };

    case FILTER_BY_GENDER:
      let productsByGender = [];
      let filtro = [...state.filteredProducts2];
      if (action.payload === "men") {
        productsByGender = filtro.filter((product) => product.gender === "men");
      } else if (action.payload === "women") {
        productsByGender = filtro.filter(
          (product) => product.gender === "women"
        );
      } else if (action.payload === "unisex") {
        productsByGender = filtro.filter(
          (product) => product.gender === "unisex"
        );
      } else {
        productsByGender = allProducts;
      }
      return {
        ...state,
        filteredProducts: productsByGender,
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case FILTER_BY_SIZE:
    /*   let productBySize = [...state.allProducts] */
    /*     .sort((a, b) => { */
    /*       const sizeValues = { small: 1, medium: 2, large: 2, xlarge: 4 }; */
    /*       const aSizeValues = sizeValues[a.size]; */
    /*       const bSizeValues = sizeValues[b.size]; */
    /*       return aSizeValues - bSizeValues; */
    /*     }) */
    /*     .filter((product) => product.size === action.payload); */
    /*   return { */
    /*     ...state, */
    /*     filteredProducts: productBySize, */
    /*   }; */

    case FILTER_BY_SIZE:
      let productSize = [];
      if (action.payload === "small") {
        productSize = [...state.filteredProducts2].filter(
          (e) => e.productConditionals[0].size[0].S > 0
        );
      } else if (action.payload === "medium") {
        productSize = [...state.filteredProducts2].filter(
          (e) => e.productConditionals[0].size[0].M > 0
        );
      } else if (action.payload === "large") {
        productSize = [...state.filteredProducts2].filter(
          (e) => e.productConditionals[0].size[0].L > 0
        );
      } else if (action.payload === "xlarge") {
        productSize = [...state.filteredProducts2].filter(
          (e) => e.productConditionals[0].size[1].XL > 0
        );
      } else {
        /* else if (action.payload === "XL"){ */
        /*   productSize = [...state.allProducts].filter(e => e.size[0].XL >= 0 ) */
        /*    */
        /* } */
        productSize = state.allProducts;
      }

      return {
        ...state,
        filteredProducts: [...productSize],
        filteredProducts2: [...productSize],
      };

    case FILTER_BY_SEASON:
      let productBySeason = [...state.filteredProducts2].filter((product) => {
        const year = parseInt(product.season);
        switch (action.payload) {
          case "70s":
            return year >= 1970 && year <= 1979;
          case "80s":
            return year >= 1980 && year <= 1989;
          case "90s":
            return year >= 1990 && year <= 1999;
          case "00s":
            return year >= 2000 && year <= 2009;
          case "10s":
            return year >= 2010 && year <= 2019;
          case "20s":
            return year >= 2020 && year <= 2023;
        }
      });
      return {
        ...state,
        filteredProducts: productBySeason,
      };
    case GET_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: action.payload,
      };

    case CLEAN_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: [],
      };

    case ADD_TO_CART:
      let itemInCar = state.shoppingCart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      let cont = 0;
      let stock2 = 0;
      if (cont < 1) {
        stock2 = action.payload.stock;
        cont++;
      }
      return itemInCar
        ? {
            ...state,

            shoppingCart: state.shoppingCart.map((item) =>
              item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size
                ? { ...item, quantity: item.quantity + 1, stock: stock2 }
                : item
            ),
          }
        : {
            ...state,
            shoppingCart: [
              ...state.shoppingCart,
              { ...action.payload, quantity: 1 },
            ],
          };

    case REMOVE_ONE_FROM_CART:
      let delOne = state.shoppingCart.find(
        (item) => item.UUID === action.payload.UUID
      );

      return delOne
        ? {
            ...state,
            shoppingCart: state.shoppingCart.filter(
              (item) => item.UUID !== action.payload.UUID
            ),
          }
        : {
            ...state,
            shoppingCart,
          };

    case REMOVE_ONE_ITEM:
      let delItem = state.shoppingCart.find(
        (item) =>
          item.id === action.payload.id &&
          item.color === action.payload.color &&
          item.size === action.payload.size
      );
      return delItem.quantity > 1
        ? {
            ...state,
            shoppingCart: state.shoppingCart.map((item) =>
              item.id === action.payload.id &&
              item.color === action.payload.color &&
              item.size === action.payload.size
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            shoppingCart,
          };

    case REMOVE_ALL_FROM_CART:
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter(
          (e) => e.id !== action.payload.id
        ),
      };

    case RESET_FILTERS:
      return {
        ...state,
        filteredProducts: [...state.allProducts],
      };

    case CLEAR_CART:
      return { ...state, shoppingCart: [] };

    case SHOP:
      return { ...state, buttonPay: action.payload };

    default:
      return {
        ...state,
        shoppingCart: value,
      };
  }
};
