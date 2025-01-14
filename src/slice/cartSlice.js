import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPackages: [], // [{ id, name, price, quantity }]
  selectedDrinks: [], // [{ id, name, price, quantity }]
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addPackage: (state, action) => {
      const existingPackage = state.selectedPackages.find(
        (pkg) => pkg.id === action.payload.id
      );
      if (existingPackage) {
        existingPackage.quantity += 1;
      } else {
        state.selectedPackages.push({ ...action.payload, quantity: 1 });
      }
    },
    removePackage: (state, action) => {
      const existingPackage = state.selectedPackages.find(
        (pkg) => pkg.id === action.payload.id
      );
      if (existingPackage) {
        existingPackage.quantity -= 1;
        if (existingPackage.quantity <= 0) {
          state.selectedPackages = state.selectedPackages.filter(
            (pkg) => pkg.id !== action.payload.id
          );
        }
      }
    },
    addDrink: (state, action) => {
      const existingDrink = state.selectedDrinks.find(
        (drink) => drink.id === action.payload.id
      );
      if (existingDrink) {
        existingDrink.quantity += 1;
      } else {
        state.selectedDrinks.push({ ...action.payload, quantity: 1 });
      }
    },
    removeDrink: (state, action) => {
      const existingDrink = state.selectedDrinks.find(
        (drink) => drink.id === action.payload.id
      );
      if (existingDrink) {
        existingDrink.quantity -= 1;
        if (existingDrink.quantity <= 0) {
          state.selectedDrinks = state.selectedDrinks.filter(
            (drink) => drink.id !== action.payload.id
          );
        }
      }
    },
    resetCart: (state) => {
      state.selectedPackages = [];
      state.selectedDrinks = [];
    },
  },
});

export const { addPackage, removePackage, addDrink, removeDrink, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
