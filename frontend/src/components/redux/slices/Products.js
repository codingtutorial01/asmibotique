import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: {}
};

export const allProductsSlice = createSlice({
    name: "AllProducts",
    initialState,
    reducers: {
      getAllProductsPending(state, action) {
        return {
          ...state,
          products: { loading: true },
        };
      },
      getAllProductsFulfilled(state, action) {
        return {
          ...state,
          products: {
            loading: false,
            fulfilled: action.payload,
          },
        };
      },
      getAllProductsRejected(state, action) {
        return {
          ...state,
          products: {
            loading: false,
            rejected: action.payload,
          },
        };
      }
    }
});

export const {
    getAllProductsPending,
    getAllProductsFulfilled,
    getAllProductsRejected
  
  } = allProductsSlice.actions;
  
  export default allProductsSlice.reducer;
  