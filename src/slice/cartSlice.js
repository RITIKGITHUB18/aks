// import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const initialState = {
//   selectedPackages: [],
//   selectedDrinks: [],
//   newItem: false,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addPackage: (state, action) => {
//       const existingPackage = state.selectedPackages.find(
//         (pkg) => pkg.id === action.payload.id
//       );
//       if (existingPackage) {
//         existingPackage.quantity += 1;
//       } else {
//         state.selectedPackages.push({ ...action.payload, quantity: 1 });
//       }

//       state.newItem = true;
//     },
//     removePackage: (state, action) => {
//       const existingPackage = state.selectedPackages.find(
//         (pkg) => pkg.id === action.payload.id
//       );
//       if (existingPackage) {
//         existingPackage.quantity -= 1;
//         if (existingPackage.quantity <= 0) {
//           state.selectedPackages = state.selectedPackages.filter(
//             (pkg) => pkg.id !== action.payload.id
//           );
//         }
//       }
//       const availablePkg = state.selectedPackages.length > 0 ? true : false;
//       const availableDrinks = state.selectedDrinks.length > 0 ? true : false;
//       if (availablePkg || availableDrinks) {
//         state.newItem = true;
//       } else {
//         state.newItem = false;
//       }
//     },
//     addDrink: (state, action) => {
//       const existingDrink = state.selectedDrinks.find(
//         (drink) => drink.id === action.payload.id
//       );
//       if (existingDrink) {
//         existingDrink.quantity += 1;
//       } else {
//         state.selectedDrinks.push({ ...action.payload, quantity: 1 });
//       }
//       state.newItem = true;
//     },
//     removeDrink: (state, action) => {
//       const existingDrink = state.selectedDrinks.find(
//         (drink) => drink.id === action.payload.id
//       );
//       if (existingDrink) {
//         existingDrink.quantity -= 1;
//         if (existingDrink.quantity <= 0) {
//           state.selectedDrinks = state.selectedDrinks.filter(
//             (drink) => drink.id !== action.payload.id
//           );
//         }
//       }
//       const availablePkg = state.selectedPackages.length > 0 ? true : false;
//       const availableDrinks = state.selectedDrinks.length > 0 ? true : false;
//       if (availablePkg || availableDrinks) {
//         state.newItem = true;
//       } else {
//         state.newItem = false;
//       }
//     },
//     resetCart: (state) => {
//       state.selectedPackages = [];
//       state.selectedDrinks = [];
//       state.newItem = false;
//     },
//     setNewCartItem: (state, action) => {
//       state.newItem = action.payload;
//     },
//   },
// });

// export const {
//   addPackage,
//   removePackage,
//   addDrink,
//   removeDrink,
//   resetCart,
//   setNewCartItem,
// } = cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPackages: [],
  selectedDrinks: [],
  newItem: false,
  receiptData: { cartItem: [], totalPrice: 0 }, // Adding the receiptData to the initial state
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add a package to the cart
    addPackage: (state, action) => {
      const existingPackage = state.selectedPackages.find(
        (pkg) => pkg.id === action.payload.id
      );
      if (existingPackage) {
        existingPackage.quantity += 1;
      } else {
        state.selectedPackages.push({ ...action.payload, quantity: 1 });
      }
      state.newItem = true;
      // Update the receiptData as well
      state.receiptData = {
        ...state.receiptData,
        cartItem: [...state.selectedPackages, ...state.selectedDrinks],
        totalPrice:
          state.selectedPackages.reduce(
            (acc, pkg) => acc + pkg.price * pkg.quantity,
            0
          ) +
          state.selectedDrinks.reduce(
            (acc, drink) => acc + drink.price * drink.quantity,
            0
          ),
      };
    },

    // Remove a package from the cart
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
      const availablePkg = state.selectedPackages.length > 0 ? true : false;
      const availableDrinks = state.selectedDrinks.length > 0 ? true : false;
      state.newItem = availablePkg || availableDrinks;

      // Update the receiptData
      state.receiptData = {
        ...state.receiptData,
        cartItem: [...state.selectedPackages, ...state.selectedDrinks],
        totalPrice:
          state.selectedPackages.reduce(
            (acc, pkg) => acc + pkg.price * pkg.quantity,
            0
          ) +
          state.selectedDrinks.reduce(
            (acc, drink) => acc + drink.price * drink.quantity,
            0
          ),
      };
    },

    // Add a drink to the cart
    addDrink: (state, action) => {
      const existingDrink = state.selectedDrinks.find(
        (drink) => drink.id === action.payload.id
      );
      if (existingDrink) {
        existingDrink.quantity += 1;
      } else {
        state.selectedDrinks.push({ ...action.payload, quantity: 1 });
      }
      state.newItem = true;

      // Update the receiptData
      state.receiptData = {
        ...state.receiptData,
        cartItem: [...state.selectedPackages, ...state.selectedDrinks],
        totalPrice:
          state.selectedPackages.reduce(
            (acc, pkg) => acc + pkg.price * pkg.quantity,
            0
          ) +
          state.selectedDrinks.reduce(
            (acc, drink) => acc + drink.price * drink.quantity,
            0
          ),
      };
    },

    // Remove a drink from the cart
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
      const availablePkg = state.selectedPackages.length > 0 ? true : false;
      const availableDrinks = state.selectedDrinks.length > 0 ? true : false;
      state.newItem = availablePkg || availableDrinks;

      // Update the receiptData
      state.receiptData = {
        ...state.receiptData,
        cartItem: [...state.selectedPackages, ...state.selectedDrinks],
        totalPrice:
          state.selectedPackages.reduce(
            (acc, pkg) => acc + pkg.price * pkg.quantity,
            0
          ) +
          state.selectedDrinks.reduce(
            (acc, drink) => acc + drink.price * drink.quantity,
            0
          ),
      };
    },

    // Reset the cart
    resetCart: (state) => {
      state.selectedPackages = [];
      state.selectedDrinks = [];
      state.newItem = false;
      state.receiptData = { cartItem: [], totalPrice: 0 }; // Reset the receipt data
    },

    // Set new cart item
    setNewCartItem: (state, action) => {
      state.newItem = action.payload;
    },

    // Update receiptData when checking out
    addReceipt: (state, action) => {
      state.receiptData = action.payload; // Add or update the receipt data
    },
  },
});

export const {
  addPackage,
  removePackage,
  addDrink,
  removeDrink,
  resetCart,
  setNewCartItem,
  addReceipt,
} = cartSlice.actions;
export default cartSlice.reducer;
