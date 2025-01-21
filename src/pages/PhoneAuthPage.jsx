import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import { IN } from "../assets/FLAG_SVG";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../helper/firebase";
import { motion } from "framer-motion";

const PhoneAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    location.state?.selectedCountry || {
      code3l: "IND",
      code2l: "IN",
      name: "India",
      emoji: IN,
      dialingCode: "+91",
    }
  );

  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  const handleSelectCountry = () => {
    navigate("/select-country", { state: { currentCountry: selectedCountry } });
  };

  const handlePhoneAuth = async () => {
    if (isLoading) return;

    setIsLoading(true);
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
      setIsLoading(false);
      return;
    }

    const fullPhoneNumber = `${selectedCountry.dialingCode}${phoneNumber}`;
    console.log("Full Phone Number: ", fullPhoneNumber);

    try {
      // setupReCAPTCHA();
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response) => {},
      });

      console.log("recaptcha: ", recaptcha);
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        fullPhoneNumber,
        recaptcha
      );

      // console.log("ConfirmationResult: ", confirmationResult.verificationId);

      navigate("/verify-phone", {
        state: {
          verificationId: confirmationResult.verificationId,
          phoneNumber: fullPhoneNumber,
        },
      });
    } catch (error) {
      console.error("SMS not sent", error);
      alert("Failed to send OTP. Check console for details.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
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
            <img src={selectedCountry?.emoji} className="w-[20px] h-[20px]" />
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
  );
};

export default PhoneAuth;
