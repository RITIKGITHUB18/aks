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

const HomePage = () => {
  return (
    <div
      className="bg-[#090D14] 
    w-[393px] flex flex-col"
    >
      {/* Background Image Section */}
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
        className="bg-no-repeat bg-cover bg-center w-full h-[350px] relative"
      >
        {/* Top Bar: Cart and Profile Icons */}
        <div className="absolute flex mt-6 right-2 gap-4  p-4">
          {/* Cart Icon */}
          <div className="flex items-center justify-center w-[44px] h-[44px] border-2 border-slate-500 rounded-full p-[10px]">
            <img src={cartIcon} alt="Cart Icon" className="w-[24px] h-[24px]" />
          </div>
          {/* Profile Icon */}
          <div className="w-[44px] h-[44px]">
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Rewards Section */}
        <div className="absolute flex flex-col bottom-[50px] left-1/2 transform -translate-x-1/2 translate-y-[50px] rounded-[16px] w-[350px] p-4 items-center">
          {/* Vibgyor Icon */}
          <div className="w-[60px] h-[60px]">
            <img
              src={vibgyorBlub}
              alt="Vibgyor Icon"
              className="w-full h-full"
            />
          </div>

          {/* Text and Points */}
          <div className="flex flex-col text-white items-center mt-2">
            <h1 className="font-[400] text-[26px] leading-[20px] text-white">
              My Rewards Points
            </h1>
            <p className="text-[13px] leading-[18px] text-white mt-4">
              Earned Points
            </p>
            <p className="text-[60px] font-[700] leading-[72px] mt-4">3222</p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-[0px] px-4 flex-1">
        <div className="flex items-center h-[50px] px-4 mt-5 mb-10">
          <CouponsCarousel couponsData={coupanData} />
        </div>

        {/* Location Component Placeholder */}
        <div className="relative bg-[#161C25] rounded-[56px] h-[62px] mb-4 cursor-pointer shadow-md flex justify-center items-center border-2 border-[#202938]">
          <div className="absolute transform left-0 flex items-center justify-center">
            <img
              src={locationIcon}
              className="w-[80px] h-[80px] translate-y-2"
            />
            <p className="text-gray-400">Your Location</p>
            <img src={arrowRightIcon} className="translate-x-[140px]" />
          </div>
        </div>

        {/* Recommendation Section Placeholder */}
        <div>
          <div className="flex justify-between items-center h-[50px] px-4">
            <p className="text-white font-[500] text-[18px] leading-[24px]">
              Recommended for You
            </p>
            <p className="text-[#3579DD] text-[14px] font-[500] leading-[18px] cursor-pointer">
              See All
            </p>
          </div>
          <div className="mt-5">
            <CarouselComponent carouselData={hotelData} />
          </div>
        </div>
      </div>

      {/* Navbar Component Placeholder */}
      <div className="w-[393px] h-[60px] flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
