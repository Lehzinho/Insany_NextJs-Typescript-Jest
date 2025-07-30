import { CategoryProps } from "@/model/category";
import { createSlice } from "@reduxjs/toolkit";

interface CategoriesState {
  categories: CategoryProps[];
  selectedCategory: CategoryProps | null;
}

const initialState: CategoriesState = {
  categories: [],
  selectedCategory: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
    },

    addSelectedCategory: (state, action) => {
      const selectedCategory = state.categories.find(
        (categ) => categ.id === action.payload.id
      );

      if (selectedCategory) {
        state.selectedCategory = selectedCategory;
      }
    },
  },
});

export const { addCategories, addSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
