import { useState } from "react";
import CustomButton from "../common/CustomButton";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { leftArrow } from "../../assets/Images";

const VerifyPage = ({
  header,
  description,
  emailOrPhone,
  onResend,
  onSuccess,
  redirectPath,
}) => {
  const [otp, setOtp] = useState(""); // OTP state
  const [error, setError] = useState(""); // Error state for invalid OTP
  const [resendCount, setResendCount] = useState(0); // Counter for resending OTP
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (otp === "12345") {
      setError("");
      if (onSuccess) onSuccess();
      navigate(redirectPath);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleResend = () => {
    if (resendCount >= 3) {
      setError(
        "You have exceeded the maximum resend attempts. Try again later."
      );
      return;
    }
    setOtp(""); // Clear the OTP input
    setResendCount(resendCount + 1); // Increment resend count
    setError(""); // Clear any existing error
    if (onResend) onResend(); // Call onResend callback if provided
  };

  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <Link to="/login" className="self-start mb-4">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px]  bg-[#090D14] border-[1px] border-[#202938]">
          <img
            src={leftArrow}
            alt="Back"
            className="w-6 h-6 flex items-center justify-center"
          />
        </div>
      </Link>

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-6 ml-6 mt-[60px]">
        <h1 className="text-[30px] font-[700] mb-2 leading-10">{header}</h1>
        <p className="text-slate-400 font-[400] text-[16px] leading-5">
          {description}{" "}
          <span className="text-gray-200 text-[16px] leading-5 font-[500]">
            {emailOrPhone}
          </span>
        </p>
      </div>

      {/* OTP Input Section */}
      <div className="flex w-[393px]">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center w-[393px]"
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span className="text-[#090D14] text-xl">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                style={{ justifyContent: "space-between", gap: "0 6px" }}
                className="w-[61px] h-[61px] bg-[#090D14] aspect-square  border border-[#3579DD] rounded-md text-center text-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3579DD] gap-2"
              />
            )}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Resend Section */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <p className="text-[#EEEEEEEE] text-[16px] font-[400] leading-5">
              I didn’t receive a code?
            </p>
            <button
              type="button"
              onClick={handleResend}
              className="text-white hover:underline leading-5 text-[16px] font-[600]"
              disabled={resendCount >= 3}
            >
              Resend
            </button>
          </div>

          {/* Verify Button */}
          <CustomButton
            text="Verify"
            buttonStyle="w-[353px] h-[56px]  bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[24px] font-[600] mt-6"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
