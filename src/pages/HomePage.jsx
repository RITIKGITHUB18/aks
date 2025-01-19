import { useNavigate } from "react-router-dom";
import {
  arrowRightIcon,
  cartIcon,
  homeBg,
  locationIcon,
  profileIcon,
  vibgyorBlub,
} from "../assets/Images";
import Footer from "../components/common/Footer";
import CarouselComponent from "../components/HomeComponent/CarouselComponent";
import CouponsCarousel from "../components/HomeComponent/CouponsCarousel";
import { coupanData } from "../data/coupanData";
import { hotelData } from "../data/hotelData";
import { useState } from "react";
import { useAuth } from "../helper/AuthContext";
import { useSelector } from "react-redux";
import OrderToast from "../components/common/OrderToast";

const HomePage = () => {
  const { user, signOut } = useAuth();
  const { totalCoins } = useSelector((state) => state.coins);
  const { newOrder } = useSelector((state) => state.checkout);
  const [toast, setToast] = useState(newOrder);
  const { newItem, selectedPackages, selectedDrinks } = useSelector(
    (state) => state.cart
  );

  const totalItem = selectedPackages?.length + selectedDrinks?.length;
  console.log("New Item: ", newItem);

  const navigate = useNavigate();
  const [location, setLocation] = useState("Kawungcarang road no 28...");

  const handleLocationClick = () => {
    navigate("/map", {
      state: {
        location: location,
      },
    });
  };

  const handleCartOnClick = () => {
    navigate("/shopping-cart");
  };

  const handleProfileOnClick = () => {
    navigate("/profile");
  };

  const handleSeeAllOnclick = () => {
    navigate("/recommendation");
  };

  const handleToastOnClick = () => {
    navigate("/view-receipt");
  };

  return (
    <div className="relative flex w-full flex-col mx-auto h-auto overflow-y-auto scrollbar-hide">
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
        className="relative bg-no-repeat bg-cover bg-center w-full min-h-[300px] sm:min-h-[350px]"
      >
        <div className="absolute flex mt-10 right-2 gap-4 p-4 sm:right-4">
          <div
            onClick={handleCartOnClick}
            className="relative flex items-center justify-center w-[44px] h-[44px] border-2 border-slate-500 cursor-pointer rounded-full p-[10px]"
          >
            <img src={cartIcon} alt="Cart Icon" className="w-[24px] h-[24px]" />
            {newItem && (
              <div className="absolute top-12 flex items-center justify-center bg-red-500  rounded-full w-[18px] h-[18px] translate-x-[12px] -translate-y-[20px] text-white">
                <p className="text-[11px] ">{totalItem}</p>
              </div>
            )}
          </div>

          <div
            className="w-[44px] h-[44px] cursor-pointer"
            onClick={handleProfileOnClick}
          >
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="absolute flex flex-col bottom-12 left-1/2 transform -translate-x-1/2 translate-y-[100px] rounded-[16px] w-[90%] p-4 items-center overflow-y-auto">
          <div className="w-16 h-16">
            <img
              src={vibgyorBlub}
              alt="Vibgyor Icon"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col text-white items-center mt-1">
            <h1 className="font-[400] text-[26px] leading-[20px] text-white">
              My Rewards Points
            </h1>
            <p className="text-[13px] leading-[18px] text-white mt-2">
              Earned Points
            </p>
            <p className="text-[50px] font-[700] leading-[72px] mt-2">
              {totalCoins}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[50px] px-4 flex-1">
        <div className="flex items-center justify-center h-[50px] px-6 mt-2 mb-8">
          <CouponsCarousel couponsData={coupanData} />
        </div>

        <div
          onClick={handleLocationClick}
          className="relative mx-auto bg-[#161C25] xs:mt-8 sm:px-4 rounded-[56px] w-full xs:w-[370px] sm:w-[380px] h-16 cursor-pointer shadow-md flex justify-center items-center border-2 border-[#202938]"
        >
          <div className="absolute left-0 flex items-center">
            <div className="">
              <img
                src={locationIcon}
                className="w-[80px] h-[80px] translate-y-2"
              />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[#FFFFFF]">Your Location</p>
              <p className="text-[#83858A]">{location}</p>
            </div>
            <div className="xs:translate-x-[55px] sm:translate-x-[250%]">
              <img src={arrowRightIcon} className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        {/* Recommendation Section Placeholder */}
        {/* <div className="pb-4 xs:mt-8 sm:mt-10 mb-16 xs:mb-0"> */}
        <div className="pt-2 pb-4">
          <div className="flex justify-between items-center h-[50px] px-4 sm:px-10">
            <p className="text-white font-[500] text-[18px] leading-[24px]">
              Recommended for You
            </p>
            <button
              onClick={handleSeeAllOnclick}
              className="text-[#3579DD] text-[14px] font-[500] leading-[18px] cursor-pointer"
            >
              See All
            </button>
          </div>
          <div className="xs:mt-2 sm:mt-2">
            <CarouselComponent carouselData={hotelData} />
          </div>
        </div>
      </div>
      <div
        onClick={handleToastOnClick}
        className="z-[100] absolute bottom-0 left-[50%] transform -translate-x-[50%] -translate-y-[150%] flex flex-col items-center justify-center"
      >
        {newOrder && toast && <OrderToast setToast={setToast} />}
      </div>

      <div className="sticky bottom-0 z-10 w-full bg-[#090D14] border-t-[1px] border-[#202938] flex items-center justify-center pb-2">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
