import { useState } from "react";
import {
  applePayIcon,
  arrowRightIcon,
  leftArrow,
  masterCardIcon,
  paypalIcon,
  stripeIcon,
  walletIcon,
} from "../assets/Images";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/common/CustomButton";
import { Player } from "@lottiefiles/react-lottie-player";
import { applePayAnimation, cardAnimation } from "../assets/animation";
import { useDispatch, useSelector } from "react-redux";
import {
  addCompletedOrder,
  addReceipt,
  setNewOrder,
} from "../slice/checkOutSlice";
import { resetCart } from "../slice/cartSlice";

export const PaymentPage = () => {
  const dispatch = useDispatch();
  const { selectedPackages, selectedDrinks, receiptData } = useSelector(
    (state) => state.cart
  );

  const { cartItem, totalPrice } = receiptData || {};
  const receipt = { cartItem: [...cartItem], totalPrice: totalPrice };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [showApplePayAnimation, setApplePayAnimation] = useState(false);
  const [showCardAnimation, setShowCardAnimation] = useState(false);
  const [error, setError] = useState(false);
  const checkedOutItems = [...selectedDrinks, ...selectedPackages];

  console.log("CheckedOutItems: ", checkedOutItems);

  const cardData = [
    {
      id: 1,
      cardName: "MasterCard",
      icon: masterCardIcon,
    },
    {
      id: 2,
      cardName: "Paypal",
      icon: paypalIcon,
    },
    {
      id: 3,
      cardName: "Stripe",
      icon: stripeIcon,
    },
    {
      id: 4,
      cardName: "Apple Pay",
      icon: applePayIcon,
    },
  ];

  const navigate = useNavigate();

  const handlePaymentMethodSelection = (cardName) => {
    setSelectedPaymentMethod(cardName);
    setError(false);
  };

  const handleProceedPayment = () => {
    if (selectedPaymentMethod) {
      const completedOrder = {
        paymentMethod: selectedPaymentMethod,
        checkedOutItems,
        orderDate: new Date().toISOString(),
      };
      if (selectedPaymentMethod === "Apple Pay") {
        setApplePayAnimation(true);
        setTimeout(() => {
          setApplePayAnimation(false);
          setShowCardAnimation(true);

          setTimeout(() => {
            dispatch(addCompletedOrder(completedOrder));
            dispatch(setNewOrder(true));
            dispatch(addReceipt(receipt));
            navigate("/order-completion", {
              state: {
                payment: selectedPaymentMethod,
                cartItems: cartItem,
                totalPrice: totalPrice,
              },
            });
          }, 3000);
        }, 4000);
      } else {
        setShowCardAnimation(true);
        setTimeout(() => {
          dispatch(addCompletedOrder(completedOrder));
          dispatch(setNewOrder(true));
          dispatch(addReceipt(receipt));
          navigate("/order-completion", {
            state: {
              payment: selectedPaymentMethod,
              cartItems: cartItem,
              totalPrice: totalPrice,
            },
          });
        }, 4000);
      }
    } else {
      setError(true);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col items-center">
      {!error && showApplePayAnimation ? (
        <div className="fixed inset-0 bg-[#090D14] bg-opacity-60 z-10 flex items-center justify-center">
          <Player
            autoplay
            loop={true}
            src={applePayAnimation}
            className="w-[200px] h-[200px]"
          />
        </div>
      ) : showCardAnimation ? (
        <div className="fixed inset-0 bg-[#090D14] bg-opacity-60 z-10 flex items-center justify-center">
          <Player
            autoplay
            loop={true}
            src={cardAnimation}
            className="w-[200px] h-[200px]"
          />
        </div>
      ) : (
        <>
          {/* Back Button */}
          <Link to="/shopping-cart" className="self-start">
            <div
              onClick={handleBack}
              className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center"
            >
              <img src={leftArrow} alt="Back" className="w-6 h-6" />
            </div>
          </Link>

          {/* Header Section */}
          <div className="self-start text-start mt-[32px] mb-[24px] px-8">
            <h1 className="text-[24px] font-[500] leading-[31.2px] text-white">
              Payment Method
            </h1>
          </div>

          {/* Wallet Option */}
          <Link to="/wallet">
            <div
              // onClick={handleWalletClick}
              className="relative mx-auto bg-[#161C25] rounded-[56px] w-[330px] h-[62px] mb-4 cursor-pointer shadow-md flex justify-center items-center border-2 border-[#202938]"
            >
              <div className="absolute transform left-0 flex items-center justify-center">
                <img
                  src={walletIcon}
                  className="w-[80px] h-[80px] translate-y-2 translate-x-[-9px]"
                />
                <div className="">
                  <p className="text-[#FFFFFF] translate-x-[-18px]">wallet</p>
                  <p className="text-[#83858A] translate-x-[-18px]">
                    Available balance: $183.43
                  </p>
                </div>
                <img src={arrowRightIcon} className="translate-x-[20px]" />
              </div>
            </div>
          </Link>

          {/* Other Methods Header */}
          <h1 className="absolute top-[275px] transform -translate-x-[100px] font-[500] text-[18px]  leading-[23.4px] text-[#FFFFFF]">
            Other Method
          </h1>

          {/* Payment Methods */}
          <div className="w-full px-8 mt-20">
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`w-[343px] h-[52px] flex items-center justify-between px-4 py-2 mb-4 rounded-[100px] bg-[#090D14] cursor-pointer ${
                  selectedPaymentMethod === card.cardName
                    ? "border border-blue-500"
                    : "border border-[#202938]"
                }`}
                onClick={() => handlePaymentMethodSelection(card.cardName)}
              >
                <div className="flex items-center space-x-4">
                  {card.icon ? (
                    <img
                      src={card.icon}
                      alt={card.cardName}
                      className="w-6 h-6"
                    />
                  ) : (
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-700 text-white rounded-full text-sm font-semibold">
                      +
                    </span>
                  )}
                  <p className="text-white text-sm">{card.cardName}</p>
                </div>
                <div className="relative">
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={selectedPaymentMethod === card.cardName}
                    readOnly
                    className="hidden"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedPaymentMethod === card.cardName
                        ? "border-blue-500 bg-[#090D14]"
                        : "border-[#202938] bg-[#161C25]"
                    }`}
                  >
                    {selectedPaymentMethod === card.cardName && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {error && (
            <div className="text-red-500 bg-[#090D14] opacity-80 mt-4 text-sm px-2 rounded-lg">
              Please select a payment method before proceeding.
            </div>
          )}

          {/* Proceed Payment Button */}
          {selectedPaymentMethod && (
            <div className="fixed bottom-0 border-t-[1px] border-[#202938] px-8 pb-4 pt-4">
              <CustomButton
                style="w-[330px] mx-auto h-[50px]"
                text="Proceed Payment"
                buttonStyle="w-full h-[50px] bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-[100px] font-[500]"
                type="button"
                onClick={handleProceedPayment}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentPage;
