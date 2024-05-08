import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice"
import userloggedinReducer from "./loginSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer,
    userloggedin:userloggedinReducer,
  },
});
export default appStore;