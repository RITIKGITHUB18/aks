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

  const totalItem =
    (selectedPackages?.length || 0) + (selectedDrinks?.length || 0);

  const navigate = useNavigate();
  const [location, setLocation] = useState("Kawungcarang road no 28...");

  const handleLocationClick = () => {
    navigate("/map", { state: { location } });
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
    <div className="relative w-full min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section with BG Image */}
      <div
        style={{ backgroundImage: `url(${homeBg})` }}
        className="bg-no-repeat bg-cover bg-center w-full min-h-[300px] sm:min-h-[350px] relative"
      >
        {/* Top-Right Icons */}
        <div className="absolute top-10 right-3 flex gap-4 sm:right-4">
          <div
            onClick={handleCartOnClick}
            className="relative w-11 h-11 border-2 border-slate-500 cursor-pointer rounded-full flex items-center justify-center"
          >
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5" />
            {newItem && (
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center translate-x-[25%] -translate-y-[25%]">
                {totalItem}
              </div>
            )}
          </div>

          <div
            className="w-11 h-11 cursor-pointer"
            onClick={handleProfileOnClick}
          >
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Rewards Section (No absolute) */}
        <div className="flex flex-col items-center pt-32 pb-8">
          <div className="w-16 h-16">
            <img src={vibgyorBlub} alt="Vibgyor" className="w-full h-full" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-xl font-medium">My Rewards Points</h1>
            <p className="text-sm mt-1">Earned Points</p>
            <p className="text-4xl sm:text-5xl font-bold mt-2">{totalCoins}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4">
        {/* Coupons Carousel */}
        <div className="my-4">
          <CouponsCarousel couponsData={coupanData} />
        </div>

        {/* Location */}
        <div
          onClick={handleLocationClick}
          className="relative mx-auto bg-[#161C25] rounded-full w-full max-w-[350px] h-16 cursor-pointer shadow-md flex items-center border-2 border-[#202938] px-4 my-7"
        >
          <img
            src={locationIcon}
            className="w-12 h-12 mr-2 transition-transform translate-y-1"
            alt="Location Icon"
          />
          <div className="flex-1">
            <p className="font-medium">Your Location</p>
            <p className="text-sm text-gray-400 truncate">{location}</p>
          </div>
          <img
            src={arrowRightIcon}
            className="w-4 h-4 ml-2"
            alt="Arrow Right"
          />
        </div>

        <div className="pt-2 pb-6">
          <div className="flex justify-between items-center mb-8 px-4">
            <p className="font-semibold text-base">Recommended for You</p>
            <button
              onClick={handleSeeAllOnclick}
              className="text-sm text-[#3579DD] font-medium"
            >
              See All
            </button>
          </div>
          <CarouselComponent carouselData={hotelData} />
        </div>
      </div>

      {newOrder && toast && (
        <div
          onClick={handleToastOnClick}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <OrderToast setToast={setToast} />
        </div>
      )}

      <div className="mt-auto sticky bottom-0 z-10 w-full bg-[#090D14] border-t border-[#202938] py-2 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
