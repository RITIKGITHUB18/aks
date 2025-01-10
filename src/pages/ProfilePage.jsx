import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import { IN } from "../assets/FLAG_SVG";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center">
      {/* Back Button */}
      <Link to="/home" className="self-start">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      <CustomButton
        text="Send OTP"
        buttonStyle="w-full h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white rounded-[24px] font-[600] mt-6 leading-6"
      />
    </div>
  );
};

export default ProfilePage;
