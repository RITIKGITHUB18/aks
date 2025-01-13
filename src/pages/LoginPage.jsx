import { Link, useNavigate } from "react-router-dom";
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

  const isEmailEntered = email.trim().length > 0;

  const handleOnClick = async () => {
    try {
      console.log("PRINTING EMAIL: ", email);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          // emailRedirectTo: "http://localhost:5173/auth/callback",
          emailRedirectTo:
            "https://gpcwuuypobruknutpqkj.supabase.co/auth/v1/callback",
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage("Check your email for the login link!");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setMessage("An unexpected error occured.");
    }
  };
  return (
    <div className="bg-[#090D14] bg-cover w-[393px]">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-white p-4">
        <div className="flex items-center justify-between mt-[25px]">
          <div className="w-[108px] h-[44px] px-4">
            <Link to="/">
              <img src={CrossIcon} alt="Close" className="w-[21px] h-[21px]" />
            </Link>
          </div>
          <div className="w-[285px] h-[44px] flex">
            <h1 className="text-lg font-bold px-10">Log in or Sign up</h1>
          </div>
        </div>

        {/* Input Section */}
        <div className="flex flex-col justify-center w-[393px] p-10 rounded-lg shadow-md">
          <h2 className="text-sm font-semibold mb-2">Email</h2>
          <InputBox
            style="mb-4"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            inputStyle=" p-2 border focus:outline-none focus-visible:ring border-[#3F70FA] rounded-lg bg-[#1E293B] text-white"
          />
          <CustomButton
            text="Continue"
            onClick={handleOnClick}
            disabled={!isEmailEntered}
            style="bg-[#1E293B] rounded-[24px]"
            buttonStyle={`w-full ${
              isEmailEntered
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-[#1E293B] "
            } text-white py-2 rounded-[24px] font-semibold`}
          />
        </div>

        {/* Divider Section */}
        <div className="relative mt-6 w-[360px] flex items-center">
          <hr className="flex-grow border-[#334155]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 bg-[#334155] text-white text-sm font-medium rounded-[24px] border border-[#1E293B]">
            OR
          </div>
        </div>

        {/* OAuth Section */}
        <div className="w-[360px] mt-10">
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
