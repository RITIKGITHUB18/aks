import React from "react";
import OrderSummary from "../components/Core/ShoppingCart/OrderSummary";

const OrderCompleted = () => {
  return (
    <div className="w-full text-white flex flex-col items-center overflow-y-auto ">
      <OrderSummary></OrderSummary>
    </div>
  );
};

export default OrderCompleted;
