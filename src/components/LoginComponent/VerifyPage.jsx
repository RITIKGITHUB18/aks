import { useState } from "react";
import CustomButton from "../common/CustomButton";
import OTPInput from "react-otp-input";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { leftArrow } from "../../assets/Images";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../helper/firebase";
import { supabase } from "../../helper/supabaseConfig";
import { useDispatch } from "react-redux";
import { updateUser } from "../../slice/userSlice";

const VerifyPage = ({
  header,
  description,
  emailOrPhone,
  onResend,
  onSuccess,
  redirectPath,
  backPath,
  type,
}) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendCount, setResendCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isOtpEntered = otp.length === 6 && parseInt(otp) >= 9999;

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (type === "phone") {
      try {
        if (!location.state || !location.state.verificationId) {
          setError("Verification ID is missing. Please try again.");
          return;
        }

        const { verificationId } = location.state;

        const credential = PhoneAuthProvider.credential(verificationId, otp);
        const result = await signInWithCredential(auth, credential);
        console.log("Phone authentication successful: ", result);

        setError("");

        if (onSuccess) {
          onSuccess();
        }
        navigate(redirectPath);
      } catch (error) {
        console.error("Error verifying OTP: ", error);
        setError("Invalid OTP. Please try again.");
      }
    }

    if (type === "email") {
      try {
        const { data, error: supabaseError } = await supabase.auth.verifyOtp({
          email: emailOrPhone,
          token: otp,
          type: "email",
        });

        if (supabaseError) {
          setError(supabaseError.message);
          return;
        }

        setError("");
        dispatch(updateUser({ email: emailOrPhone }));
        if (onSuccess) {
          onSuccess();
        }

        navigate(redirectPath);
      } catch (error) {
        console.error("Error verifying OTP: ", error);
        setError("Something went wrong. Please try again.");
      }
    }
    if (type == "phone") {
      try {
        const { state } = location;
        const { verificationId } = state;

        const credential = PhoneAuthProvider.credential(verificationId, otp);
        const result = await signInWithCredential(auth, credential).then(
          dispatch(updateUser({ phoneNumber: emailOrPhone }))
        );
        console.log("Phone authentication successfull: ", result);
        setError("");
        if (onSuccess) {
          onSuccess();
        }
        navigate(redirectPath);
      } catch (error) {
        console.error("Error verifying OTP: ", error);
        setError("Invalid OTP. Please try again.");
      }
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };
  const handleResend = () => {
    if (resendCount >= 2) {
      setError(
        "You have exceeded the maximum resend attempts. Try again later."
      );
      return;
    }
    setOtp("");
    setResendCount(resendCount + 1);
    setError("");
    if (onResend) onResend();
  };

  return (
    <div className="relative w-full text-white flex flex-col items-center">
      {/* Back Button */}
      <Link to={backPath} className="self-start mx-2 md:mx-10">
        <div className="rounded-full p-[10px] mt-[14px] ml-[10px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938]">
          <img
            src={leftArrow}
            alt="Back"
            className="w-6 h-6 flex items-center justify-center"
          />
        </div>
      </Link>

      {/* Header */}
      <div className="flex flex-col items-center text-center mt-[60px] mb-[24px] px-7">
        <h1 className="text-[26px] sm:text-[30px] font-[700] mb-2 leading-10">
          {header}
        </h1>
        <p className="text-slate-400 font-[400] text-[14px] sm:text-[16px] leading-5">
          {description}{" "}
          <span className="text-gray-200 text-[16px] leading-5 font-[500]">
            {emailOrPhone}
          </span>
        </p>
      </div>

      {/* OTP Input Section */}
      <div className="flex w-[393px] mt-[42px] px-6">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col items-center w-[393px]"
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="text-[#090D14] text-xl">-</span>}
            renderInput={(props) => (
              <input
                {...props}
                style={{ justifyContent: "space-between", gap: "0 5px" }}
                className="w-[40px] h-[40px] bg-[#090D14] aspect-square  border border-[#3579DD] rounded-md text-center text-lg text-white focus:outline-none focus:ring-2 focus:ring-[#3579DD] gap-2"
              />
            )}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {/* Resend Section */}
          <div className="flex items-center justify-center gap-2 mt-[52px]">
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
            onClick={handleOnSubmit}
            disabled={!isOtpEntered}
            style="bg-[#1E293B] rounded-[24px] mt-5"
            buttonStyle={`w-[330px] h-[56px] ${
              isOtpEntered
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-[#4D4D4D] "
            } text-white py-2 rounded-[24px] font-semibold`}
          />
        </form>
      </div>
    </div>
  );
};

export default VerifyPage;
