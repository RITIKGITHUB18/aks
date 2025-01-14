import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedOrders: localStorage.getItem("completedOrders")
    ? JSON.parse(localStorage.getItem("completedOrders"))
    : [],
  newOrder: false,
  receipt: localStorage.getItem("receipt")
    ? JSON.parse(localStorage.getItem("receipt"))
    : [],
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addCompletedOrder: (state, action) => {
      state.completedOrders.push(action.payload);
      localStorage.setItem(
        "completedOrders",
        JSON.stringify(state.completedOrders)
      );
    },
    addReceipt: (state, action) => {
      state.receipt.push(action.payload);
      localStorage.setItem("receipt", JSON.stringify(state.receipt));
    },
    setNewOrder: (state, action) => {
      state.newOrder = action.payload;
    },
  },
});

export const { addCompletedOrder, addReceipt, setNewOrder } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
