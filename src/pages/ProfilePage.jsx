import { Link, useNavigate } from "react-router-dom";
import { call, EditIcon, leftArrow, mail, profileIcon } from "../assets/Images";
import { motion } from "framer-motion";
import { supabase } from "../helper/supabaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../slice/userSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log("user: ", user);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      dispatch(removeUser({}));
      navigate("/getStarted");
    } catch (error) {
      console.log("Error during logout: ", error.message);
    }
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full text-white flex flex-col items-center justify-center"
    >
      {/* Back Button */}
      <Link to="/home" className="self-start ml-4 sm:ml-8">
        <div className="rounded-full p-[10px] mt-[30px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      <div className="relative flex flex-col items-center justify-center rounded-full">
        <img
          src={user?.profile_pic || profileIcon}
          className="w-[122.13px] h-[122.13px] rounded-full"
        />
        <img
          src={EditIcon}
          className="absolute w-[27.24px] h-[27.24px] transform translate-x-[36px] translate-y-[30px] cursor-pointer"
          alt="Edit"
        />
        <p className="text-[17.5px] font-[600] leading-[21px] mt-8">
          {user?.username ? user?.username : <span>GFX Agency</span>}
        </p>
      </div>

      <div className="w-full px-6 mt-8 flex flex-col gap-6 items-center">
        <div className="flex flex-col xs:w-[340px] sm:w-[393px] justify-center">
          <p className="text-white text-sm mb-4 leading-4 font-[600]">Email</p>
          <div className="bg-[#090d14] text-[#ABABAB] rounded-[12px] px-4 py-3 border-[1px] border-solid border-[#F1ECEC80]">
            <div>
              <img src={mail} className="absolute w-[24px] h-[24px]" />
            </div>
            <p className="translate-x-8">{user?.email}</p>
          </div>
        </div>

        {/* Phone Field */}
        <div className="flex flex-col xs:w-[340px] sm:w-[393px]">
          <p className="text-white text-sm mb-4 leading-4 font-[600]">Phone</p>
          <div className="bg-[#090d14] text-[#ABABAB] rounded-[12px] px-4 py-3 border-[1px] border-solid border-[#F1ECEC80]">
            <div>
              <img src={call} className="absolute w-[24px] h-[24px]" />
            </div>
            <p className="translate-x-[30px] text-[14px]">{user?.phone}</p>
          </div>
        </div>

        {/* DOB Field */}
        <div className="flex flex-col xs:w-[340px] sm:w-[393px]">
          <p className="text-white text-sm mb-4 leading-4 font-[600]">
            Date of Birth
          </p>
          <div className="bg-[#090d14] text-[#ABABAB] rounded-[12px] px-4 py-3 border-[1px] border-solid border-[#F1ECEC80]">
            {user?.dob}
          </div>
        </div>

        <div className="flex flex-col xs:w-[340px] sm:w-[393px]">
          <button
            onClick={handleLogout}
            className="mb-10 xs:mb-10 w-full max-w-[393px] h-[56px] border border-[#3579DD] text-[#3579DD] rounded-[56px] font-[600] mt-6 leading-6"
          >
            Logout
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
