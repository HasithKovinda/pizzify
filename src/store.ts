import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartSlice from "./features/cart/cartSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
