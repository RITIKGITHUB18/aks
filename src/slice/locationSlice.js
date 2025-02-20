import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lat: null,
  lon: null,
  city: "",
  country: "",
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      const { lat, lon, city, country } = action.payload;
      state.lat = lat;
      state.lon = lon;
      state.city = city;
      state.country = country;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
