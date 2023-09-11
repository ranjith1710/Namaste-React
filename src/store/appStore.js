import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // list of slices
    cart: cartReducer
  }
});

export default appStore;
