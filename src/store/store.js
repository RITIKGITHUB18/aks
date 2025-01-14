import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "../slice/hotelSlice";
import cartReducer from "../slice/cartSlice";
import checkoutReducer from "../slice/checkOutSlice";
import coinReducer from "../slice/coinsSlice";

const store = configureStore({
  reducer: {
    hotel: hotelReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    coins: coinReducer,
  },
});

export default store;
