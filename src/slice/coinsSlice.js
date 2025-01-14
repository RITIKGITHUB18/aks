import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCoins: localStorage.getItem("coins")
    ? JSON.parse(localStorage.getItem("coins"))
    : 2000,
};

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducers: {
    addCoins: (state, action) => {
      state.totalCoins += action.payload;
      localStorage.setItem("coins", JSON.stringify(state.totalCoins));
    },
  },
});

export const { addCoins } = coinSlice.actions;
export default coinSlice.reducer;
