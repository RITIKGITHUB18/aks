import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";
import { IN } from "../assets/FLAG_SVG";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../helper/firebase";
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

  // Not required for the supabase authentication using phone
  // Clean up recaptcha on unmount
  // useEffect(() => {
  //   return () => {
  //     if (window.recaptchaVerifier) {
  //       window.recaptchaVerifier.clear();
  //     }
  //   };
  // }, []);

  const handleSelectCountry = () => {
    navigate("/select-country", {
      state: { currentCountry: selectedCountry, isNameEntered: isNameEntered },
    });
  };

  // handle Phone auth for the firebase
  // const handlePhoneAuth = async () => {
  //   if (isLoading) return;

  //   setIsLoading(true);
  //   const phoneRegex = /^[0-9]{10,15}$/;
  //   if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
  //     setIsLoading(false);
  //     return;
  //   }

  //   const fullPhoneNumber = `${selectedCountry.dialingCode}${phoneNumber}`;

  //   try {
  //     const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
  //       size: "invisible",
  //       callback: () => {},
  //     });

  //     console.log("recaptcha: ", recaptcha);

  //     const confirmationResult = await signInWithPhoneNumber(
  //       auth,
  //       fullPhoneNumber,
  //       recaptcha
  //     );
  //     console.log("ConfirmationResult: ", confirmationResult.verificationId);

  //     navigate("/verify-phone", {
  //       state: {
  //         verificationId: confirmationResult.verificationId,
  //         phoneNumber: fullPhoneNumber,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("SMS not sent", error);
  //     alert("Failed to send OTP. Check console for details.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // Handle phone auth for the supabase
  // const handlePhoneAuth = async () => {
  //   if (isLoading) return;
  //   setIsLoading(false);

  //   try {
  //     // Basic phone validation
  //     const phoneRegex = /^[0-9]{10,15}$/;
  //     if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
  //       setIsLoading(false);
  //       return;
  //     }

  //     const fullPhoneNumber = `${selectedCountry.dialingCode}${phoneNumber}`;
  //     // Trigger the OTP request to Supabase
  //     console.log("Full Phone Number: ", fullPhoneNumber);

  //     const { data, error } = await supabase.auth.signInWithOtp({
  //       phone: fullPhoneNumber,
  //     });

  //     if (error) {
  //       console.error("Error sending OTP:", error.message);
  //       alert("Failed to send OTP via Supabase. Check console for details.");
  //       setIsLoading(false);
  //       return;
  //     }

  //     console.log("Supabase signInWithOtp response:", data);

  //     // If success, navigate to verify phone screen
  //     navigate("/verify-phone", {
  //       state: {
  //         phoneNumber: fullPhoneNumber,
  //       },
  //     });
  //   } catch (error) {
  //     console.error("Error in handlePhoneAuth:", error);
  //     alert("Something went wrong. Check console for details.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  const handlePhoneAuth = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      // Validate phone
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneNumber.trim() || !phoneRegex.test(phoneNumber)) {
        setIsLoading(false);
        alert("Please enter a valid phone number");
        return;
      }

      // E.164 format: e.g. +911234567890
      const fullPhoneNumber = `${selectedCountry.dialingCode}${phoneNumber}`;

      // 1) Check if user is currently logged in via email
      const { data: userResponse, error: userError } =
        await supabase.auth.getUser();
      if (userError) {
        console.error("Error fetching current user:", userError);
        setIsLoading(false);
        return;
      }

      const loggedInUser = userResponse?.user;
      if (!loggedInUser) {
        // If there's no logged-in user, we can just do signInWithOtp() directly.
        // But if your goal is to link this phone to an existing user, we need them to be logged in first.
        console.warn("No user is currently logged in with email.");
        // Fallback: signInWithOtp. (This might create a new user if phone not recognized.)
        const { data: otpData, error: otpError } =
          await supabase.auth.signInWithOtp({
            phone: fullPhoneNumber,
          });
        if (otpError) {
          console.error("Error sending OTP:", otpError);
          setIsLoading(false);
          return;
        }
        console.log("signInWithOtp result (new user):", otpData);
        navigate("/verify-phone", {
          state: { phoneNumber: fullPhoneNumber },
        });
        return;
      }

      // 2) We DO have a logged-in user. Let's update that user's phone in the auth.users table
      //    so that future phone-based sign-ins attach to the same user ID.
      console.log(
        "User is logged in with email. Updating phone to:",
        fullPhoneNumber
      );
      const { data: updatedUserData, error: updateError } =
        await supabase.auth.updateUser({
          phone: fullPhoneNumber,
        });
      if (updateError) {
        console.error("Error updating user phone:", updateError);
        setIsLoading(false);
        return;
      }
      console.log("User phone updated successfully:", updatedUserData);

      // 3) (Optional) sign out if you want to TEST phone login right away
      //    Without signOut, the user remains logged in by email, so you won't see the phone login flow.
      //    But if the user just wants phone login next time, you can skip this.
      await supabase.auth.signOut();
      console.log("Signed out to test phone-based login immediately.");

      // 4) Now call signInWithOtp using the new phone
      const { data: otpSignInData, error: otpSignInError } =
        await supabase.auth.signInWithOtp({
          phone: fullPhoneNumber,
        });
      if (otpSignInError) {
        console.error("Error sending phone OTP:", otpSignInError);
        setIsLoading(false);
        return;
      }

      console.log("Supabase signInWithOtp response:", otpSignInData);

      // 5) Navigate to verify screen
      navigate("/verify-phone", {
        state: { phoneNumber: fullPhoneNumber },
      });
    } catch (error) {
      console.error("Unexpected error in handlePhoneAuth:", error);
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

          {/* Add name section */}

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
