import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem("users", JSON.stringify(state.user));
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
