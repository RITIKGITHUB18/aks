import { useNavigate } from "react-router-dom";
import { welcomeScreenImg } from "../assets/Images";
import { useAuth } from "../helper/AuthContext";
import { supabase } from "../helper/supabaseConfig";
import { updateUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";

const WelcomeScreen = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = async () => {
    try {
      // Wait for authentication to complete
      const { data, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error("Session fetch error:", sessionError);
        return;
      }

      const userDetail = data.session?.user;
      if (!userDetail) {
        console.error("No user found in session");
        return;
      }

      // Extract user metadata
      const username = userDetail?.user_metadata?.name || null;
      const phone = userDetail?.phone || null;
      const dob = userDetail?.user_metadata?.dob || null;

      // Update Redux store
      dispatch(
        updateUser({
          id: userDetail.id,
          email: userDetail.email,
          username: username,
          phone: phone,
          dob: dob,
        })
      );

      // Navigate based on missing profile data
      if (!username) {
        // If user has no name, go to phone-auth to fill name
        navigate("/phone-auth");
        return;
      }

      if (!phone) {
        // If user has a name but no phone, pass a flag so phone-auth can skip name
        navigate("/phone-auth", { state: { isNameEntered: true } });
        return;
      }

      if (!dob) {
        // If user is missing DOB, go to DOB selection
        navigate("/select-dob");
        return;
      }

      // If they have all fields, proceed to your main page
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during WelcomeScreen handleOnClick:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${welcomeScreenImg})`,
      }}
      className="flex flex-col relative justify-center items-center text-center w-full min-h-screen bg-no-repeat bg-center bg-cover"
    >
      {/* Overlay with gradient */}
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.0) 0%, rgba(0, 0, 0, 0.8) 100%)",
        }}
        className="absolute inset-0 flex flex-col justify-center items-center text-center"
      >
        <div className="fixed bottom-16 mb-1 px-6">
          <h1 className="font-bold text-white text-[32px] sm:text-[32px] leading-8">
            Welcome
          </h1>
          <p className="text-[#A5A5A5] font-medium text-[16px] mt-2 w-full max-w-[300px] mx-auto">
            Immerse yourself into the world of AKS
          </p>

          {/* Button */}
          <div
            className="flex items-center  justify-center rounded-[24px] mt-10 w-full h-[48px] cursor-pointer bg-gradient-to-r from-[#842ED8] via-[#DB28A9] to-[#9D1DCA]"
            onClick={handleOnClick}
          >
            <p className="flex items-center font-medium text-[14px] sm:text-[16px] leading-4 text-white">
              Continue
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
