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
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    removeUser: (state) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
