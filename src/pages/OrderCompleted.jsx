import React from "react";
import OrderSummary from "../components/Core/ShoppingCart/OrderSummary";

const OrderCompleted = () => {
  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col ">
      <OrderSummary></OrderSummary>
    </div>
  );
};

export default OrderCompleted;
