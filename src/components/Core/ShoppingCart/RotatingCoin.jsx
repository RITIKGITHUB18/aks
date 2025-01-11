import React from "react";
import CustomButton from "../../common/CustomButton";
import { Coin } from "../../../assets/Images";
import { Link } from "react-router-dom";

const RotatingCoin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0D12] text-white animate-fade-in">
      {/* Rotating Coin */}
      <div className="relative">
        <img src={Coin} alt="coin" className="animate-spin-slow" />
      </div>

      {/* Points Earned */}
      <div className="text-center mt-6">
        <p className="text-xl font-bold">You earned 20 points</p>
        <p className="text-gray-400 mt-2">
          You can collect points and then use them to get discounts <br />
          and exclusive offers.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 space-y-4 w-full px-4">
        <CustomButton
          text="View Receipt"
          buttonStyle="w-[353px] h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[104px] font-[500] text-[15px] mt-6"
          type="submit"
        />
        <br />
        <Link to="/home">
          <button className="w-[353px] h-[56px] mx-auto py-3 bg-[#162130] hover:bg-gray-800 rounded-[105px] text-[#3579DD] font-[500] text-[15px]">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RotatingCoin;
