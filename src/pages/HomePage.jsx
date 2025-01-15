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

  return (
    <div className="bg-[#090D14] w-[393px] max-w-[440px] flex flex-col mx-auto overflow-y-auto h-screen scrollbar-hide">
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
        className="bg-no-repeat bg-cover bg-center w-full h-[350px] relative"
      >
        <div className="absolute flex mt-10 right-2 gap-4  p-4">
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

        <div className="absolute flex flex-col bottom-[50px] left-1/2 transform -translate-x-1/2 translate-y-[50px] rounded-[16px] w-[350px] p-4 items-center overflow-y-auto">
          <div className="w-[60px] h-[60px]">
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

      <div className="mt-[15px] px-4 flex-1">
        <div className="flex items-center h-[50px] px-6 mt-2 mb-8">
          <CouponsCarousel couponsData={coupanData} />
        </div>

        <div
          onClick={handleLocationClick}
          className="relative mx-auto bg-[#161C25] rounded-[56px] w-[320px] h-[62px] mb-4 cursor-pointer shadow-md flex justify-center items-center border-2 border-[#202938]"
        >
          <div className="absolute transform left-0 flex items-center justify-center">
            <img
              src={locationIcon}
              className="w-[80px] h-[80px] translate-y-2"
            />
            <div className="">
              <p className="text-[#FFFFFF]">Your Location</p>
              <p className="text-[#83858A]">{location}</p>
            </div>
            <img src={arrowRightIcon} className="translate-x-[10px]" />
          </div>
        </div>

        {/* Recommendation Section Placeholder */}
        <div className="">
          <div className="flex justify-between items-center h-[50px] px-4">
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
          <div className="mt-5 h-[250px] mb-3  overflow-y-auto">
            <CarouselComponent carouselData={hotelData} />
          </div>
        </div>
      </div>
      <div className="z-[100] absolute bottom-0 flex items-center justify-center -translate-y-[80px] translate-x-[30px]">
        {newOrder && toast && <OrderToast setToast={setToast} />}
      </div>
      {/* Navbar Component Placeholder */}
      <div className="fixed bottom-0 z-10 bg-solid-[#090D14]">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
