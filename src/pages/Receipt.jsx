import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { leftArrow, qrimage } from "../assets/Images";
import CustomButton from "../components/common/CustomButton";

const Receipt = () => {
  const { receiptData, orderId } = useLocation().state || {};
  const { receipt } = useSelector((state) => state.checkout);
  console.log("receipt: ", receipt);

  const cartItem = receipt[receipt.length - 1];
  const totalPrice = receipt[receipt.length - 1].totalPrice;

  console.log("CartItem: ", cartItem);
  console.log("totalPrice: ", totalPrice);

  const navigate = useNavigate();

  const calculateDiscountedPrice = (price) => {
    return (price * 0.2).toFixed(2);
  };

  const handleBackToHome = () => {
    navigate("/home");
  };

  const merchantFee = (price) => {
    return (price * 0.05).toFixed(2);
  };

  return (
    <div className="w-[393px] text-white animate-fade-in mt-14">
      <Link to="/history" className="self-start">
        <div className="rounded-full p-[10px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>

      <div className="flex items-center justify-center mb-12 px-5 mt-10">
        <img src={qrimage} alt="QR Code" className="w-[80px] h-[80px]" />
      </div>

      <div className="p-6 rounded-xl w-full max-w-lg text-center border-gray-500 border-[1px] relative animate-slide-in">
        <div className="flex justify-center mb-4 absolute top-[-30px] left-1/2 transform -translate-x-1/2">
          <div className="bg-[#203921] p-2 rounded-full">
            <div className="bg-[#32B638] p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-white"
                aria-label="Order completed icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-2 mt-4">Order Completed</h2>
        <p className="text-gray-400 text-sm">
          Sit back and await your delicious delivery. Thank you for choosing us
          to serve up your culinary cravings. Enjoy your meal!
        </p>
        <hr className="my-4 border-gray-700" />

        <div className="mt-6 text-sm ">
          <h3 className="text-white text-lg font-bold mb-4">Order Summary</h3>
          <div className="max-h-[180px] overflow-y-auto scrollbar-hide">
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400"></li>
              {cartItem.cartItem.map((item, index) => (
                <li className="flex justify-between text-gray-400" key={index}>
                  <span>{item.name || item.itemName}</span>
                  <span>
                    {item.qunatity} x $ {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="my-4 border-gray-700" />
          <div className="space-y-2">
            <div className="flex justify-between text-gray-400">
              <span>Total Amount:</span>
              <span>$ {parseFloat(totalPrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Discount (20%):</span>
              <span>$ {calculateDiscountedPrice(totalPrice)}</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Merchant fee (5%):</span>
              <span>$ {merchantFee(totalPrice)}</span>
            </div>
          </div>

          <CustomButton
            text="Back to Home"
            buttonStyle="w-full h-[56px] bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[24px] font-semibold mt-6"
            type="button"
            onClick={handleBackToHome}
          />
        </div>
      </div>
    </div>
  );
};

export default Receipt;
