import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import { IN } from "../assets/FLAG_SVG";
import { motion } from "framer-motion";
import AddNameComponent from "../components/LoginComponent/AddNameComponent";
import { supabase } from "../helper/supabaseConfig";

const PhoneAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isNameEntered, setIsNameEntered] = useState(
    location.state?.isNameEntered ?? false
  );

  console.log("isNameEntered: ", isNameEntered);
  const [selectedCountry, setSelectedCountry] = useState(
    location.state?.selectedCountry || {
      code3l: "IND",
      code2l: "IN",
      name: "India",
      emoji: IN,
      dialingCode: "+91",
    }
  );

  const handleSelectCountry = () => {
    navigate("/select-country", {
      state: { currentCountry: selectedCountry, isNameEntered: isNameEntered },
    });
  };

  // Handles the phone verification using the supabase
  const handlePhoneAuth = async () => {
    if (isLoading) return;
    setIsLoading(false);
    try {
      // Basic phone validation
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
        setIsLoading(false);
        return;
      }

      const fullPhoneNumber = `${selectedCountry.dialingCode}${phoneNumber}`;
      const { data, error } = await supabase.auth.updateUser({
        phone: fullPhoneNumber,
      });

      if (error) {
        console.error("Error sending OTP:", error.message);
        alert("Failed to send OTP via Supabase. Check console for details.");
        setIsLoading(false);
        return;
      }

      // If success then navigate to verify phone screen
      navigate("/verify-phone", {
        state: {
          phoneNumber: fullPhoneNumber,
        },
      });
    } catch (error) {
      console.error("Error in handlePhoneAuth:", error);
      alert("Something went wrong. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      {!isNameEntered ? (
        <AddNameComponent setIsNameEntered={setIsNameEntered} />
      ) : (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-[#090D14] w-full text-white flex flex-col items-center justify-center"
        >
          <Link onClick={handleBack} className="self-start sm:ml-4">
            <div className="rounded-full p-[10px] mt-[14px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
              <img src={leftArrow} alt="Back" className="w-6 h-6" />
            </div>
          </Link>

          {/* Phone Authentication */}
          <div className="flex flex-col mt-[40px] mb-[24px] transition-transform -translate-x-9 transl">
            <h1 className="text-[30px] font-[700] leading-[40px] text-white ">
              Hi there!
            </h1>
            <p className="text-[#EEEEEE] text-opacity-70 text-[17px] font-[400] leading-6">
              Please enter your phone number
            </p>
          </div>

          <div className="w-full flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                onClick={handleSelectCountry}
                className="flex items-center cursor-pointer text-[15px] justify-center gap-x-1 sm:w-[90px] h-[40px] bg-[#090D14] border-b-[0.5px] border-slate-400 text-center text-white focus:outline-none"
              >
                <img
                  src={selectedCountry?.emoji}
                  className="w-[20px] h-[20px]"
                />
                <p>{selectedCountry?.code2l}</p>
                <p>({selectedCountry?.dialingCode})</p>
              </div>

              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
                className="flex h-[40px] text-[15px] bg-[#090D14] border-b-[0.5px] border-slate-400 text-white px-4 focus:outline-none"
              />
            </div>
            <CustomButton
              onClick={handlePhoneAuth}
              style="w-full sm:w-[390px] px-10"
              text={isLoading ? "Sending OTP..." : "Send OTP"}
              buttonStyle={`w-full h-[56px] ${
                isLoading ? "bg-gray-500" : "bg-[#3579DD] hover:bg-blue-600"
              } text-white rounded-[24px] font-[600] mt-6 leading-6`}
              disabled={isLoading}
            />
          </div>
          <div id="recaptcha-container" className="mt-3"></div>
        </motion.div>
      )}
    </div>
  );
};

export default PhoneAuth;
