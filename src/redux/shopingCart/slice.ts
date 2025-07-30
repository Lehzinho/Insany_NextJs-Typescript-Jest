import { CartItemProps } from "@/model/cartItem";
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
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
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

      state.totalPrice = calculateTotalPrice(state.shoppingCart);
    },

    removeShoppingCartItem: (state, action: PayloadAction<number>) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload
      );
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
    },

    incrementItemQuantity: (state, action: PayloadAction<number>) => {
      const itemIndex = state.shoppingCart.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        state.shoppingCart[itemIndex].quantity += 1;
        state.totalPrice = calculateTotalPrice(state.shoppingCart);
      }
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
    },

    clearCart: (state) => {
      state.shoppingCart = [];
      state.totalPrice = 0;
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
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
