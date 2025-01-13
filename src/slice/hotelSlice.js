import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedHotel: null,
  dateTime: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    selectHotel: (state, action) => {
      state.selectedHotel = action.payload;
    },
    setDateTime: (state, action) => {
      state.dateTime = action.payload;
    },
  },
});

export const { selectHotel, setDateTime } = hotelSlice.actions;
export default hotelSlice.reducer;
