import { FILTER_BY_GENDER, FILTER_BY_PRICE, FILTER_BY_SEASON, FILTER_BY_SIZE, FILTER_BY_USED, GET_ALL_PRODUCT, GET_ALL_USER, POST_USER } from "../Actions";

const initialState = {
  users: [],
  allUsers: [],
  allProducts: [],
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
      
    case FILTER_BY_PRICE:
      let productsSorted = action.payload === "min_weight" ? state.allProducts.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price> a.price) return -1;
        return 0;
      })
    : state.allProducts.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
      });

      return {
        ...state,
        allProducts: productsSorted
      }

    case FILTER_BY_USED:
      let productsFiltered = action.payload === "new" ? state.allProducts.filter(product => {
        return product.state === "new"
      })
      : state.allProducts.filter(product => product.state === "used")
      return {
        ...state,
        allProducts: productsFiltered
      }
      
    case FILTER_BY_GENDER:
      let productsByGender = []
      if(action.payload === "men"){
        productsByGender = state.allProducts.filter(product => product.gender === "men")
      }
      else if(action.payload === "women"){
        productsByGender = state.allProducts.filter(product => product.gender === "women")
      }
      else if(action.payload === "unisex"){
        productsByGender = state.allProducts.filter(product => product.gender === "unisex")
      }
      else {
        productsByGender = allProducts
      }
      return {
        ...state,
        allProducts: [...productsByGender]
      }  
      
case FILTER_BY_SIZE:
  let productBySize = state.allProducts.sort((a, b) => {
    const sizeValue = {small: 1, medium: 2, large: 3, xlarge: 4 };
    const aSizeValue = sizeValue [a.size];
    const bSizeValue = sizeValue [b.size];
    return aSizeValue - bSizeValue;
  }).filter(product => product.size === action.payload);
  return {
    ...state,
    allProducts : productBySize
  }

  case FILTER_BY_SEASON:
    let productBySeason = action.payload === "Current" ? state.allProducts.filter(product => product.season === "Current")
    : state.allProducts.filter(product => product.season === "Historic")
    return {
      ...state,
      allProducts : productBySeason
    }
      

    default:
      return state;
  }
};
