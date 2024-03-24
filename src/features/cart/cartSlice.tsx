import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../types/pizza";

type CartSlice = {
  cart: Cart[];
};

const initialState: CartSlice = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Cart>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<{ pizzaId: number }>) {
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId
      );
    },
    increaseItemQuantity(state, action: PayloadAction<{ pizzaId: number }>) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId
      ) as Cart;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action: PayloadAction<{ pizzaId: number }>) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId
      ) as Cart;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
