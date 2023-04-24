import {
  FILTER_BY_GENDER,
  FILTER_BY_SEASON,
  FILTER_BY_PRICE,
  FILTER_BY_SIZE,
  FILTER_BY_USED,
  GET_ALL_PRODUCT,
  GET_ALL_USER,
  ADMIN_SEARCH_USER,
  ADMIN_SEARCH_PRODUCT,
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
  ADD_REVIEW,
  GET_ALL_REVIEWS,
  RESET_FILTERS2,
  ADD_TO_CARTDB,
} from "../Actions";
import { useDispatch } from "react-redux";

const storedValue = window.localStorage.getItem("cart");
let value = [];
if (storedValue) {
  value = JSON.parse(storedValue);
  if (typeof value === "string") value = JSON.parse(value);
}

const initialState = {
  users: [],
  allUsers: [],
  allUsers2: [],
  allProducts: [],
  allProducts2: [],
  productDetail: [],
  searchedProducts: [],
  filteredProducts: [],
  filteredProducts2: [],
  filteredProducts3: [],
  userProducts: [],
  shoppingCart: [],
  buttonPay: "",
  reviews: [],
  cartDB: [],
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
        allUsers2: action.payload,
      };
    case ADD_TO_CARTDB:
      return {
        ...state,
        cartDB: action.payload,
        shoppingCart: [...state.shoppingCart, ...action.payload],
      };

    case ADMIN_SEARCH_USER:
      let searchedUsers =
        action.payload === ""
          ? state.allUsers
          : state.allUsers.filter(
              (user) => user.name.toLowerCase() === action.payload.toLowerCase()
            );
      return {
        ...state,
        allUsers2: [...searchedUsers],
      };

    case ADMIN_SEARCH_PRODUCT:
      let searchedProducts =
        action.payload === ""
          ? state.allProducts
          : state.allProducts.filter((product) =>
              product.name.toLowerCase().includes(action.payload.toLowerCase())
            );
      return {
        ...state,
        allProducts2: [...searchedProducts],
      };

    case GET_ALL_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
        filteredProducts: action.payload,
        filteredProducts2: action.payload,
        filteredProducts3: action.payload,
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
      let productSize = [];
      let filtro2 = [...state.filteredProducts2];
      if (action.payload === "xSmall") {
        productSize = filtro2.filter((e) =>
          e.productConditionals.some((elem) =>
            elem.size.some((elem2) => elem2.hasOwnProperty("XS"))
          )
        );
      } else if (action.payload === "small") {
        productSize = filtro2.filter((e) =>
          e.productConditionals.some((elem) =>
            elem.size.some((elem2) => elem2.hasOwnProperty("S"))
          )
        );
      } else if (action.payload === "medium") {
        productSize = filtro2.filter((e) =>
          e.productConditionals.some((elem) =>
            elem.size.some((elem2) => elem2.hasOwnProperty("M"))
          )
        );
      } else if (action.payload === "large") {
        productSize = filtro2.filter((e) =>
          e.productConditionals.some((elem) =>
            elem.size.some((elem2) => elem2.hasOwnProperty("L"))
          )
        );
      } else if (action.payload === "xlarge") {
        productSize = filtro2.filter((e) =>
          e.productConditionals.some((elem) =>
            elem.size.some((elem2) => elem2.hasOwnProperty("XL"))
          )
        );
      } else if (action.payload === "xxlarge") {
        productSize = filtro2.filter((e) =>
          e.productConditionals.some((elem) =>
            elem.size.some((elem2) => elem2.hasOwnProperty("XXL"))
          )
        );
      } else {
        productSize = state.allProducts;
      }

      return {
        ...state,
        filteredProducts: [...productSize],
        filteredProducts3: [...productSize],
      };

    case FILTER_BY_SEASON:
      let productBySeason = [...state.filteredProducts3].filter((product) => {
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
        filteredProducts: action.payload,
        filteredProducts2: action.payload,
        filteredProducts3: action.payload,
      };

    case CLEAN_SEARCHED_PRODUCTS:
      return {
        ...state,
        searchedProducts: [],
        filteredProducts: [],
        filteredProducts2: [],
        filteredProducts3: [],
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

    case RESET_FILTERS2:
      return {
        ...state,
        filteredProducts: [...state.searchedProducts],
      };

    case CLEAR_CART:
      return { ...state, shoppingCart: [] };

    case SHOP:
      return { ...state, buttonPay: action.payload };

    case GET_ALL_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
