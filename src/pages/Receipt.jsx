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

  if (!cartItem) {
    return (
      <div className="flex flex-col items-center justify-center text-white mt-10">
        <p>No receipt found. Redirecting to Home...</p>
        {setTimeout(() => navigate("/home"), 2000)}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen mb-2 bg-[#090D14] text-white animate-fade-in pt-4 px-4">
      {/* Back Arrow */}
      <div className="self-start md:ml-10 sm:ml-4 ml-2 mb-4">
        <Link to="/history" className="block">
          <div className="rounded-full p-2 hover:bg-gray-600 w-11 h-11 bg-[#090D14] border border-[#202938] flex items-center justify-center">
            <img src={leftArrow} alt="Back" className="w-5 h-5" />
          </div>
        </Link>
      </div>

      {/* QR Image */}
      <div className="sm:w-[420px] mb-10">
        <div className="flex items-center justify-center mb-12 mt-6">
          <img
            src={qrimage}
            alt="QR Code"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Receipt Card */}
        <div className="flex flex-col p-6 w-full max-w-lg bg-transparent border border-gray-500 rounded-xl text-center relative animate-slide-in">
          {/* Success Icon */}
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
          <p className="text-gray-400 text-sm mx-auto w-full sm:w-11/12">
            Sit back and await your delicious delivery. Thank you for choosing
            us to serve up your culinary cravings. Enjoy your meal!
          </p>

          <hr className="my-4 border-gray-700" />

          {/* Order Summary */}
          <div className="mt-6 text-sm">
            <h3 className="text-white text-lg font-bold mb-4">Order Summary</h3>

            <div className="max-h-[180px] overflow-y-auto scrollbar-hide">
              <ul className="space-y-2">
                {cartItem.cartItem.map((item, index) => (
                  <li
                    className="flex justify-between text-gray-400"
                    key={index}
                  >
                    <span>{item.name || item.itemName}</span>
                    <span>
                      {item.qunatity} x ${item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="my-4 border-gray-700" />

            <div className="space-y-2">
              <div className="flex justify-between text-gray-400">
                <span>Total Amount:</span>
                <span>${parseFloat(totalPrice).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Discount (20%):</span>
                <span>${calculateDiscountedPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Merchant fee (5%):</span>
                <span>${merchantFee(totalPrice)}</span>
              </div>
            </div>

            {/* Back to Home Button */}
            <CustomButton
              text="Back to Home"
              buttonStyle="w-full h-14 bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[24px] font-semibold mt-6"
              type="button"
              onClick={handleBackToHome}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
