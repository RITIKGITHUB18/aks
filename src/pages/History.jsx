import { Link } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CheckoutCard from "../components/common/CheckoutCard";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";

const HistoryPage = () => {
  const { completedOrders } = useSelector((state) => state.checkout);

  return (
    <div className="bg-[#090D14] w-[393px] min-h-screen text-white flex flex-col items-center relative scrollbar-hide">
      {/* Back Button */}

      <div className="fixed top-0 z-50 bg-[#090D14] px-4 pt-2 pb-4 w-[393px] max-w-[440px] h-[180px] ">
        {/* Back Button */}
        <Link to="/home">
          <div className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center translate-y-[50px]">
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
        </Link>

        {/* Header Text */}
        <h1 className="mt-10 text-[24px] font-[500] leading-[31.2px] translate-y-[50px]">
          Checkout
        </h1>
      </div>

      <div className="mt-[200px] mb-[120px] flex-1 overflow-y-auto scrollbar-hide px-3 flex flex-col items-center gap-y-4">
        {[...completedOrders].reverse().map((order, index) => (
          <div
            key={index}
            className="w-full max-w-[343px] border border-[#202938] max-h-[500px] rounded-[12px] overflow-y-auto scrollbar-hide"
          >
            {/* The *latest* order is now at index 0 after reversing */}
            <CheckoutCard checkoutData={order} isLatest={index === 0} />
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default HistoryPage;
