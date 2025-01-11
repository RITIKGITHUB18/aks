import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BookTableImg, cartIcon, leftArrow } from "../assets/Images";
import DrinksComponent from "../components/BookingComponent/DrinksComponent";
import DateTimeComponent from "../components/BookingComponent/DateTimeComponent";
import PackagesComponent from "../components/BookingComponent/AffordablePackages";

const BookTable = () => {
  const [activeTab, setActiveTab] = useState("dateTime");
  const [showCartButtons, setShowCartButtons] = useState(false);
  const [activeButton, setActiveButton] = useState("buyNow"); // Tracks which button is active
  const navigate = useNavigate();

  const handleCartOnClick = () => {
    navigate("/shopping-cart");
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    navigate("/shopping-cart");
  };

  const bookingTabs = [
    { id: "dateTime", name: "Time and Date" },
    { id: "packages", name: "Affordable Package" },
    { id: "drinks", name: "Drink" },
  ];

  return (
    <div className="bg-[#090D14] w-[456px] text-white min-h-screen flex flex-col items-center">
      <div
        style={{
          backgroundImage: `url(${BookTableImg})`,
        }}
        className="bg-no-repeat sticky bg-cover bg-center w-[456px] h-[350px]"
      >
        <div className="absolute flex mt-10 justify-around">
          <Link to="/home" className="fixed self-start ml-20">
            <div className="rounded-full p-[10px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1.5px] border-slate-500 flex items-center justify-center transform translate-x-[25px]">
              <img src={leftArrow} alt="Back" className="w-6 h-6" />
            </div>
          </Link>
          <div
            onClick={handleCartOnClick}
            className="flex fixed items-center justify-center w-[44px] h-[44px] border-[1.5px] bg-[#090D14] border-slate-500 cursor-pointer rounded-full p-[10px] transform translate-x-[375px] hover:bg-gray-600"
          >
            <img src={cartIcon} alt="Cart Icon" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="px-[21px] py-[18px] flex items-center justify-between">
          <div className="ml-8">
            <h2 className="text-[18px] font-[500] leading-[23.4px]">
              AKS Night
            </h2>
            <p className="text-[#83858A] font-[400] text-[12px] leading-[19.2px]">
              2.8 km away · 16 minutes
            </p>
          </div>
          <button className="flex items-center justify-center mr-4 py-2 w-[75px] h-[32px] border border-blue-500 text-blue-500 rounded-[100px] bg-transparent">
            <p className="text-[12px] leading-[15.6px] ">Message</p>
          </button>
        </div>

        <h2 className="text-[18px] font-[500] mt-2 flex items-center justify-start ml-12 leading-[23.4px] text-[#FFFFFF]">
          Book a Table
        </h2>
        <div className="flex flex-col items-center justify-center px-[21px] mt-4">
          <div className="flex overflow-x-auto space-x-2 p-1">
            {bookingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm rounded-[56px] leading-[18.2px] ${
                  activeTab === tab.id
                    ? "border-[1px] border-blue-500 text-blue-500 bg-[#161C25]"
                    : "border-[1px] border-gray-700 text-white"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {activeTab === "dateTime" && <DateTimeComponent />}
          {activeTab === "packages" && (
            <PackagesComponent setShowCartButtons={setShowCartButtons} />
          )}
          {activeTab === "drinks" && (
            <DrinksComponent setShowCartButtons={setShowCartButtons} />
          )}
        </div>

        {activeTab != "dateTime" && showCartButtons && (
          <div className="fixed bottom-5 border-t-[1px] border-slate-500 bg-[#090D14] py-4 px-5 w-[456px]">
            <div className="flex items-center justify-center gap-x-10 w-[343px]">
              <button
                onClick={() => handleButtonClick("addToCart")}
                className={`px-6 py-3 text-[12px] leading-[15.6px] font-[500] border-[1px] rounded-[100px] ml-10 w-[165px] ${
                  activeButton === "addToCart"
                    ? "bg-[#3579DD] text-white border-[1px] border-[#3579DD]"
                    : "text-[#3579DD] border-[#3579DD] hover:bg-gray-700"
                }`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleButtonClick("BuyNow")}
                className={`px-6 py-3 text-[12px] leading-[15.6px] font-[500] border-[1px] rounded-[100px] w-[165px] ${
                  activeButton === "buyNow"
                    ? "bg-[#3579DD] text-white border-[1px] border-[#3579DD]"
                    : "text-[#3579DD] border-[#3579DD] hover:bg-gray-700"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTable;
