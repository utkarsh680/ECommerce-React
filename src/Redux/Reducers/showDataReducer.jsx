import Product from "../../pages/Product";

import { FETCH_PRODUCTS } from "../Actions/Action";

const initialState = {
  loading: true,
  allProducts: [],
  products: [],
};

export const showDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      let items = [];
      items = [...action.payload];

      return {
        ...state,
        loading: false,
        products: items,
      };
    default: {
      return state;
    }
  }
};
