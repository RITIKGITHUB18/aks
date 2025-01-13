import React from "react";
import CustomButton from "../../common/CustomButton";
import { Coin } from "../../../assets/Images";
import { Link, useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { rotatingCoinAnimation } from "../../../assets/animation";
import { useDispatch } from "react-redux";
import { addCoins } from "../../../slice/CoinsSlice";

const RotatingCoin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackToHome = () => {
    dispatch(addCoins(20));
    navigate("/home");
  };

  return (
    <div className="w-[343px] min-h-screen flex flex-col items-center justify-center bg-[#090D14] text-white animate-fade-in">
      {/* Rotating Coin */}
      <div className="relative">
        {/* <img src={Coin} alt="coin" className="animate-spin-slow" /> */}
        <Player
          autoplay
          loop={false}
          src={rotatingCoinAnimation}
          className="w-[300px] h-[300px]"
        />
      </div>

      {/* Points Earned */}
      <div className="w-full text-center mt-6">
        <p className="text-xl font-bold">You earned 20 points</p>
        <p className="text-gray-400 mt-2 text-[12.58px] leading-[20.12px] font-[400]">
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
        <CustomButton
          onClick={handleBackToHome}
          text="Back to Home"
          style=""
          buttonStyle="w-[353px] h-[56px] bg-[#162130] hover:bg-gray-800 text-[#3579DD] py-2 rounded-[104px] font-[500] text-[15px] mt-6"
          type="submit"
        />
      </div>
    </div>
  );
};

export default RotatingCoin;
