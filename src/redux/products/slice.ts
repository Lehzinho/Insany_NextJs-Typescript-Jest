import { PaginationProps } from "@/model/pagination";
import { ProductProps } from "@/model/products";
import { createSlice } from "@reduxjs/toolkit";

interface ProductsState {
  products: ProductProps[];
  pagination: PaginationProps;
}

const initialState: ProductsState = {
  products: [],
  pagination: {} as PaginationProps,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    addPagination: (state, action) => {
      return {
        ...state,
        pagination: action.payload,
      };
    },
  },
});

export const { addProducts, addPagination } = productsSlice.actions;

export default productsSlice.reducer;
