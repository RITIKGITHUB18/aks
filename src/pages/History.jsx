import { Link } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CheckoutCard from "../components/common/CheckoutCard";
import { checkoutData } from "../data/checkoutData";
import Footer from "../components/common/Footer";

const HistoryPage = () => {
  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center">
      {/* Back Button */}
      <Link to="/home" className="self-start fixed">
        <div className="rounded-full p-[10px] mt-[52px] ml-[20px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      {/* Header Section */}
      <div className="self-start text-start mt-[130px] mb-[24px] px-10 fixed">
        <h1 className="text-[24px] font-[500] leading-[31.2px] text-white">
          Checkout
        </h1>
      </div>

      {/* Checkout Card Section */}
      <div className="max-h-[500px] fixed mt-[180px] border border-[#202938] rounded-[12px] overflow-y-auto scrollbar-hide">
        <CheckoutCard checkoutData={checkoutData} />
      </div>

      <Footer />
    </div>
  );
};

export default HistoryPage;
