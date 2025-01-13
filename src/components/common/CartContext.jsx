import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  selectedDate: null,
  selectedTime: null,
  selectedPackages: [],
  selectedDrinks: [],
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE_TIME":
      return {
        ...state,
        selectedDate: action.payload.date,
        selectedTime: action.payload.time,
      };
    case "SET_SELECTED_PACKAGES":
      return {
        ...state,
        selectedPackages: action.payload,
      };
    case "SET_SELECTED_DRINKS":
      return {
        ...state,
        selectedDrinks: action.payload,
      };
    case "ADD_TO_CART":
      const updatedCart = [...state.cartItems];
      action.payload.forEach((newItem) => {
        const existingItemIndex = updatedCart.findIndex(
          (item) => item.id === newItem.id
        );
        if (existingItemIndex !== -1) {
          updatedCart[existingItemIndex].quantity += newItem.quantity;
        } else {
          updatedCart.push(newItem);
        }
      });
      return {
        ...state,
        cartItems: updatedCart,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
