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
} from "../Actions";

const initialState = {
  users: [],
  allUsers: [],
  allProducts: [],
  productDetail: [],
  searchedProducts: [],
  filteredProducts: [],
  userProducts: [],
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
        filteredProducts: action.payload,
      };

    case FILTER_BY_PRICE:
      let productsSorted =
        action.payload === "lowerToHigher"
          ? [...state.allProducts].sort((a, b) => {
              if (a.price > b.price) return 1;
              if (b.price > a.price) return -1;
              return 0;
            })
          : [...state.allProducts].sort((a, b) => {
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
          ? [...state.allProducts].filter((product) => {
              return product.state === "new";
            })
          : [...state.allProducts].filter(
              (product) => product.state === "used"
            );
      return {
        ...state,
        filteredProducts: productsFiltered,
      };

    case FILTER_BY_GENDER:
      let productsByGender = [];
      if (action.payload === "men") {
        productsByGender = [...state.allProducts].filter(
          (product) => product.gender === "men"
        );
      } else if (action.payload === "women") {
        productsByGender = [...state.allProducts].filter(
          (product) => product.gender === "women"
        );
      } else if (action.payload === "unisex") {
        productsByGender = [...state.allProducts].filter(
          (product) => product.gender === "unisex"
        );
      } else {
        productsByGender = allProducts;
      }
      return {
        ...state,
        filteredProducts: [...productsByGender],
      };

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
    case FILTER_BY_SIZE:
      let productBySize = [...state.allProducts]
        .sort((a, b) => {
          const sizeValues = { small: 1, medium: 2, large: 2, xlarge: 4 };
          const aSizeValues = sizeValues[a.size];
          const bSizeValues = sizeValues[b.size];
          return aSizeValues - bSizeValues;
        })
        .filter((product) => product.size === action.payload);
      return {
        ...state,
        filteredProducts: productBySize,
      };

    case FILTER_BY_SEASON:
      let productBySeason = [...state.allProducts].filter((product) => {
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
    default:
      return {
        ...state,
      };
  }
};
