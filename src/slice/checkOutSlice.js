import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedOrders: localStorage.getItem("completedOrders")
    ? JSON.parse(localStorage.getItem("completedOrders"))
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
  },
});

export const { addCompletedOrder } = checkoutSlice.actions;
export default checkoutSlice.reducer;
