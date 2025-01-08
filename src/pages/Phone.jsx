import { Link } from "react-router-dom";
import { leftArrow } from "../assets/Images";

const PhoneAuth = () => {
  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center justify-center p-4">
      <Link to="/verify-phone" className="self-start mb-4">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px]  bg-[#090D14] border-[1px] border-[#202938]">
          <img
            src={leftArrow}
            alt="Back"
            className="w-6 h-6 flex items-center justify-center"
          />
        </div>
      </Link>
    </div>
  );
};

export default PhoneAuth;
