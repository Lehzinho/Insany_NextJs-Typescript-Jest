import { combineReducers } from "redux";
import productsReducer from "./products/slice";
import categoriesReducer from "./categories/slice";

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<
  typeof combineReducers<{
    products: ReturnType<typeof productsReducer>;
    categories: ReturnType<typeof categoriesReducer>;
  }>
>;
