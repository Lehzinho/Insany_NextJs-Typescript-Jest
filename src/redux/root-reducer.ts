import { combineReducers } from "redux";
import productsReducer from "./products/slice";
import categoriesReducer from "./categories/slice";
import shopingCartReducer from "./shopingCart/slice";

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  shopingCart: shopingCartReducer,
});

export type RootState = ReturnType<
  typeof combineReducers<{
    products: ReturnType<typeof productsReducer>;
    categories: ReturnType<typeof categoriesReducer>;
    shopingCart: ReturnType<typeof shopingCartReducer>;
  }>
>;
