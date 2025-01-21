import { Link, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import CheckoutCard from "../components/common/CheckoutCard";
import Footer from "../components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setNewOrder } from "../slice/checkOutSlice";

const HistoryPage = () => {
  const { completedOrders, newOrder } = useSelector((state) => state.checkout);
  const navigate = useNavigate();
  const isCheckOutData = completedOrders.length > 0 ? true : false;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNewOrder(false));
  }, [newOrder]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative w-full min-h-screen text-white flex flex-col items-center scrollbar-hide">
      <div className="fixed flex z-50 bg-[#090D14] px-4 w-full h-[140px]">
        <Link onClick={handleBack} className="ml-5">
          <div className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center translate-y-[20px]">
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
        </Link>
        <div className="flex  items-center justify-start ml-4 sm:ml-2 text-[24px]  leading-[31.2px] translate-y-[50px]">
          <p className="text-[24px] font-[500] mb-10">Checkout</p>
        </div>
      </div>

      {isCheckOutData ? (
        <div className="relative mt-[9rem] flex-1 overflow-y-auto scrollbar-hide px-3 pb-10 flex flex-col items-center gap-y-4">
          {[...completedOrders].reverse().map((order, index) => (
            <div
              key={index}
              className="w-full max-w-[343px] border border-[#202938] max-h-[500px] rounded-[12px] overflow-y-auto scrollbar-hide"
            >
              <CheckoutCard checkoutData={order} isLatest={index === 0} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-[300px] fixed flex flex-col items-ceter justify-center mx-auto">
          <p className="flex items-center justify-center text-white">
            No Purchasing history is present.
          </p>
          <p className="flex items-center justify-center">
            please buy something
          </p>
        </div>
      )}
      <div className="mt-auto sticky bottom-0 z-10 w-full bg-[#090D14] border-t border-[#202938] py-2 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default HistoryPage;
