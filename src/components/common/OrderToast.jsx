import React from "react";
import { toastQr } from "../../assets/Images";

const OrderToast = ({ setToast }) => {
  const handleToast = () => {
    setToast(false);
  };
  return (
    <div className="relative w-[330px] h-auto p-4 gap-x-1 flex items-center justify-center bg-[#3579DD] rounded-[10px]">
      <img src={toastQr} className="" />
      <p className="text-white">You have a booking at 8.00 PM Jan</p>
      <span
        onClick={handleToast}
        className="text-white transform translate-x-[5px] -translate-y-[15px]"
      >
        {" "}
        X{" "}
      </span>
    </div>
  );
};

export default OrderToast;
