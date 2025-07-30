import { CartItemProps } from "@/model/cartItem";
import {
  deleteShopingItems,
  getShopingItems,
  storeShopingItems,
} from "@/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCartState {
  shoppingCart: CartItemProps[];
  totalPrice: number;
}

const initialState: ShoppingCartState = {
  shoppingCart: [],
  totalPrice: 0,
};

const calculateTotalPrice = (cart: CartItemProps[]): number => {
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return parseFloat(total.toFixed(2));
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    updateShoppingCartItem: (state, action) => {
      state.shoppingCart = getShopingItems();
      state.totalPrice = calculateTotalPrice(state.shoppingCart);
    },
    addShoppingCartItem: (
      state,
      action: PayloadAction<Omit<CartItemProps, "quantity">>
    ) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        const newItem: CartItemProps = {
          ...action.payload,
          quantity: 1,
        };
        state.shoppingCart.push(newItem);
      } else {
        state.shoppingCart[itemIndex].quantity += 1;
      }
      storeShopingItems(state.shoppingCart);
      state.totalPrice = calculateTotalPrice(state.shoppingCart);
    },

    removeShoppingCartItem: (state, action: PayloadAction<number>) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload
      );
      storeShopingItems(state.shoppingCart);
      state.totalPrice = calculateTotalPrice(state.shoppingCart);
    },

    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        if (action.payload.quantity <= 0) {
          state.shoppingCart.splice(itemIndex, 1);
        } else {
          state.shoppingCart[itemIndex].quantity = action.payload.quantity;
        }
        state.totalPrice = calculateTotalPrice(state.shoppingCart);
      }
      storeShopingItems(state.shoppingCart);
    },

    incrementItemQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.shoppingCart[itemIndex].quantity += 1;
        state.totalPrice = calculateTotalPrice(state.shoppingCart);
      }

      storeShopingItems(state.shoppingCart);
    },

    decrementItemQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        if (state.shoppingCart[itemIndex].quantity > 1) {
          state.shoppingCart[itemIndex].quantity -= 1;
        } else {
          // Remove o item se a quantidade for 1 e for decrementada
          state.shoppingCart.splice(itemIndex, 1);
        }
        state.totalPrice = calculateTotalPrice(state.shoppingCart);
      }

      storeShopingItems(state.shoppingCart);
    },

    clearCart: (state) => {
      state.shoppingCart = [];
      state.totalPrice = 0;
      deleteShopingItems();
    },

    setItemQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1 && action.payload.quantity > 0) {
        state.shoppingCart[itemIndex].quantity = action.payload.quantity;
        state.totalPrice = calculateTotalPrice(state.shoppingCart);
      }

      storeShopingItems(state.shoppingCart);
    },
  },
});

export const {
  addShoppingCartItem,
  removeShoppingCartItem,
  updateItemQuantity,
  incrementItemQuantity,
  decrementItemQuantity,
  clearCart,
  setItemQuantity,
  updateShoppingCartItem,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
