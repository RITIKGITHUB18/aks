import React, { useState, useEffect } from "react";
import CustomButton from "../../common/CustomButton";
import { Link } from "react-router-dom";
import { leftArrow, qrimage } from "../../../assets/Images";
import RotatingCoin from "./RotatingCoin";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../../slice/cartSlice";

const orderData = {
  qrCodeValue: "123456789",
  orderDetails: [
    { label: "Order Number", value: "#9129834903" },
    { label: "Order Time", value: "12:30 PM" },
    { label: "Payment Method", value: "Credit Card" },
    { label: "Merchant Name", value: "John's Diner" },
  ],
  summaryDetails: [
    { label: "Amount", value: "AED 218" },
    { label: "Discount", value: "AED 25.89" },
    { label: "Admin Fee", value: "AED 25.99" },
  ],
};

const OrderSummary = () => {
  const dispatch = useDispatch();
  const { receiptData } = useSelector((state) => state.cart);
  const { cartItem, totalPrice } = receiptData || {};

  console.log("cartItem in Order Summary: ", cartItem);

  const [checkout, setCheckout] = useState(false);
  const [showRotatingCoin, setShowRotatingCoin] = useState(false);

  useEffect(() => {
    if (checkout) {
      const timeout = setTimeout(() => {
        setShowRotatingCoin(true);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [checkout]);

  const handleCheckout = () => {
    setCheckout(true);
  };

  const calculateDiscountedPrice = (price) => {
    return price * 0.2;
  };

  const merchantFee = (price) => {
    return price * 0.05;
  };

  const generateOrderId = () => {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substring(2, 8);
    return `ORD-AED {timestamp}-AED {randomString}`.toUpperCase();
  };

  if (!cartItem || !totalPrice) {
    return (
      <div className="text-white text-center mt-20">
        <p className="text-lg">No items in your cart.</p>
      </div>
    );
  }

  return (
    <div className="text-white w-[393px] flex flex-col items-center p-2 mt-4 overflow-y-auto scrollbar-hide">
      {!checkout && !showRotatingCoin ? (
        <div className="animate-fade-in mb-5">
          <Link to="/home" className="self-start">
            <div className="rounded-full p-[10px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
              <img src={leftArrow} alt="Back" className="w-6 h-6" />
            </div>
          </Link>
          <div className="flex items-center justify-center mb-12 mt-10 px-5">
            <img src={qrimage} alt="QR Code" className="w-[80px] h-[80px]" />
          </div>
          <div className="p-6 rounded-xl w-full max-w-lg text-center border-gray-500 border-[1px] relative animate-slide-in">
            <div className="flex justify-center mb-4 absolute top-[-20px] left-1/2 transform -translate-x-1/2">
              <div className="bg-[#203921] p-2 rounded-full">
                <div className="bg-[#32B638] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                    aria-label="Order completed icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold mb-2 mt-4">Order Completed</h2>
            <p className="text-gray-400 text-sm">
              Sit back and await your delicious delivery. Thank you for choosing
              us to serve up your culinary cravings. Enjoy your meal!
            </p>
            <hr className="my-4 border-gray-700" />

            <div className="mt-6 text-sm">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              <div className="max-h-[180px] overflow-y-auto scrollbar-hide">
                <ul className="space-y-2">
                  <p>OrderID: {generateOrderId()}</p>
                  {cartItem.map((item, index) => (
                    <li
                      className="flex justify-between text-gray-400"
                      key={index}
                    >
                      <span>{item?.name || item?.itemName}</span>
                      <span>
                        {item.quantity} x{" "}
                        <span className="text-[12px]">AED</span> {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="my-4 border-gray-700" />
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Total Amount :</span>
                  <span>
                    <span className="text-[12px]">AED</span>{" "}
                    {totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Discount (20%) :</span>
                  <span>
                    <span className="text-[12px]">AED</span>{" "}
                    {calculateDiscountedPrice(totalPrice.toFixed(2))}
                  </span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Merchant fee (5%) :</span>
                  <span>
                    <span className="text-[12px]">AED</span>{" "}
                    {merchantFee(totalPrice.toFixed(2))}
                  </span>
                </div>
              </div>

              <CustomButton
                text="Download Receipt"
                style="cursor-pointer"
                buttonStyle="w-full h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[24px] font-semibold mt-6 cursor-pointer"
                type="button"
                onClick={handleCheckout}
              />
            </div>
          </div>
        </div>
      ) : checkout && !showRotatingCoin ? (
        <div className="min-h-screen flex items-center justify-center animate-fade-in">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center max-w-md py-20 w-full animate-slide-in">
            <div className="flex justify-center items-center mb-4">
              <div className="bg-[#203921] p-2 rounded-full">
                <div className="bg-[#32B638] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                    aria-label="Checkout success icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              Checkout Success!
            </h2>
            <p className="text-gray-400">
              Your order is confirmed and on its way. Get set to savor your
              chosen delights!
            </p>
          </div>
        </div>
      ) : (
        <RotatingCoin />
      )}
    </div>
  );
};

export default OrderSummary;
