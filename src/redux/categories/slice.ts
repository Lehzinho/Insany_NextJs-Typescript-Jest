import { CategoryProps } from "@/model/category";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    addCategories: (state, action: PayloadAction<CategoryProps[]>) => {
      state.categories = action.payload;
    },

    addSelectedCategory: (state, action: PayloadAction<string>) => {
      const selectedCategory = state.categories.find(
        (categ) => categ.id === action.payload
      );

      if (selectedCategory) {
        state.selectedCategory = selectedCategory;
      }
    },
  },
});

export const { addCategories, addSelectedCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
