import { Link } from "react-router-dom";
import {
  leftArrow,
  addAddress,
  priceLocation,
  rightLocationArrow,
  locationSearchIcon,
} from "../assets/Images";

const MapPage = () => {
  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center">
      {/* Back Button */}
      <Link to="/home" className="self-start">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      {/* Header Section */}
      <div className="self-start text-start mt-[32px] mb-[24px] px-10">
        <h1 className="text-[24px] font-[500] leading-[32px] text-white">
          Pick location
        </h1>
        <p className="text-[#83858A] text-[12px] leading-6 font-[400]">
          Our recommendation depend by your search result
        </p>
      </div>

      {/* Search Section */}
      <div className="w-[353px] flex flex-col gap-4">
        <div className="relative flex items-center w-full">
          <div className="absolute top-[16px] left-5">
            <img
              src={locationSearchIcon}
              alt="Search Icon"
              className="w-[18px] h-[18px] "
            />
          </div>
          <input
            type="text"
            placeholder="Search food"
            className="bg-[#090D14] border-[1px] border-[#202938] rounded-[24px] w-full h-[48px] pl-[50px] text-[#83858A] text-[14px] font-[400] focus:outline-none"
          />
        </div>
      </div>

      <div className="w-[336px] mt-4 flex flex-col h-[139px] leading-8">
        {/* Add Address */}
        <div className="flex items-center justify-between bg-[#161C25] border-[1px] border-[#202938] rounded-t-[8px] rounded-b-none p-4 cursor-pointer">
          <div className="flex items-center gap-2">
            <img
              src={addAddress}
              alt="Add Address Icon"
              className="w-[16px] h-[16px]"
            />
            <p className="text-[14px] font-[400] text-[#83858A] px-2">
              Add address
            </p>
          </div>
          <img
            src={rightLocationArrow}
            alt="Right Arrow Icon"
            className="w-[16px] h-[16px]"
          />
        </div>

        {/* Location */}
        <div className="flex items-center bg-[#161C25] border-[1px] border-[#202938] rounded-t-none rounded-b-[8px] p-4 cursor-pointer gap-4">
          <div>
            <img
              src={priceLocation}
              alt="Current Location Icon"
              className="w-[23px] h-[23px] mb-7"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] font-[500] text-[#83858A] ">
              Use your current location
            </p>
            <p className="text-[12px] font-[400] text-[#83858A] leading-4">
              Mantra Montana Appartment, Dhanori, Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
