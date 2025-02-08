import { useNavigate } from "react-router-dom";
import { CrossIcon } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import InputBox from "../components/LoginComponent/InputBox";
import OAuthLoginComponent from "../components/LoginComponent/OAuthLoginComponent";
import { OAuthComponentData } from "../data/loginComponentData";
import { useState } from "react";
import { supabase } from "../helper/supabaseConfig";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const isEmailEntered = email.trim().length > 0;

  const handleOnClick = async () => {
    try {
      // console.log("PRINTING EMAIL: ", email);
      // navigate("/verify-email", { state: { email } });
      await supabase.auth
        .signInWithOtp({
          email,
          options: {
            emailRedirectTo: "http://localhost:5173/auth/v1/callback",
          },
        })
        .then(({ error }) => {
          if (error) {
            setMessage(error.message);
            console.error("signIn error: ", error);
          } else {
            setMessage("Check your email for the login link!");
            setEmail("");
          }
        });
    } catch (error) {
      console.error("Error during sign-in:", error);
      setMessage("An unexpected error occured.");
    }
  };

  const handleOnCross = () => {
    navigate("/getStarted");
  };

  return (
    <div className="mt-6 w-full min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center text-white">
        <div className="flex w-full mt-[14px] self-start border-b-[1px] border-b-[#334155] pb-[14px]">
          <div className="flex items-center w-[120px] transition-transform justify-center">
            <img
              src={CrossIcon}
              alt="Close"
              className="w-[24px] h-[24px]"
              onClick={handleOnCross}
            />
          </div>
          <div className="w-full flex self-start">
            <h1 className="text-lg font-[500] transition-transform translate-x-10">
              Log in or Sign up
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full sm:w-[430px] p-8 rounded-lg shadow-md">
          <h2 className="text-[17px] font-[400] mb-3 leading-6">Email</h2>
          <InputBox
            style="mb-2"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            inputStyle="px-5 h-[51px] border focus:outline-none focus-visible:ring border-[#3F70FA] rounded-lg bg-[#1E293B] text-white"
          />
          <CustomButton
            text="Continue"
            onClick={handleOnClick}
            disabled={!isEmailEntered}
            style="bg-[#1E293B] rounded-[24px] mt-3"
            buttonStyle={`w-full ${
              isEmailEntered
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-[#1E293B]"
            } text-white py-3 rounded-[24px] font-semibold`}
          />
        </div>

        {message && (
          <p className="text-sm mt-4 text-center text-blue-300 mb-2">
            {message}
          </p>
        )}

        {/* Divider Section */}
        <div className="relative mt-6 w-full sm:w-[390px] flex items-center">
          <hr className="flex-grow border-[#334155]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#334155] text-white text-sm font-medium rounded-[24px] border border-[#1E293B]">
            OR
          </div>
        </div>

        <div className="w-full sm:w-[360px] mt-12 p-4">
          <OAuthLoginComponent
            items={OAuthComponentData}
            style="w-full flex flex-col gap-4"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
