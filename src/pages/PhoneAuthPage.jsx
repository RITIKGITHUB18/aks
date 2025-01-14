import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import { IN } from "../assets/FLAG_SVG";

const PhoneAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState(
    location.state?.selectedCountry || {
      code3l: "IND",
      code2l: "IN",
      name: "India",
      emoji: IN,
      dailingCode: " (+91)",
    }
  );
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSelectCountry = () => {
    navigate("/select-country", { state: { currentCountry: selectedCountry } });
  };

  const handlePhoneAuth = () => {
    if (phoneNumber.trim()) {
      navigate("/verify-phone", {
        state: {
          phoneNumber: `${selectedCountry.code2l} ${phoneNumber}`,
        },
      });
    } else {
      alert("Please enter a valid phone number");
    }
  };

  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center">
      {/* Back Button */}
      <Link to="/verify-email" className="self-start">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      {/* Header Section */}
      <div className="self-start text-start mt-[32px] mb-[24px] px-10">
        <h1 className="text-[30px] font-[700] leading-[40px] text-white">
          Hi there!
        </h1>
        <p className="text-[#EEEEEE] text-opacity-70 text-[17px] font-[400] leading-6">
          Please enter your phone number
        </p>
      </div>

      {/* Phone Number Input Section */}
      <div className="w-[353px] flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {/* Country Code Dropdown */}
          <div
            onClick={handleSelectCountry}
            className="flex items-center justify-center gap-x-2 w-[80px] h-[56px] bg-[#090D14] border-b-[0.5px] border-slate-400 text-center text-white focus:outline-none"
          >
            <img src={selectedCountry?.emoji} className="w-[20px] h-[20px]" />
            <p>{selectedCountry?.code2l}</p>
            <p>({selectedCountry?.dialingCode})</p>
          </div>

          {/* Phone Number Input */}
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            className="flex-grow h-[56px] bg-[#090D14] border-b-[0.5px] border-slate-400 text-white px-4 focus:outline-none"
          />
        </div>
        <CustomButton
          onClick={handlePhoneAuth}
          text="Send OTP"
          buttonStyle="w-full h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white rounded-[24px] font-[600] mt-6 leading-6"
        />
      </div>
    </div>
  );
};

export default PhoneAuth;
