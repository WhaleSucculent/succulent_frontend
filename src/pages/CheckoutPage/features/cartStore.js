import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
