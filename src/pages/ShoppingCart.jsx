import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { EmptyShoppingCart, leftArrow } from "../assets/Images";
import FoodCard from "../components/Core/ShoppingCart/FoodCard";
import CustomButton from "../components/common/CustomButton";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedPackages, selectedDrinks } = useSelector(
    (state) => state.cart
  );

  const cartItems = [
    ...selectedPackages.filter((pkg) => pkg.quantity > 0),
    ...selectedDrinks.filter((drink) => drink.quantity > 0),
  ];

  console.log("CartItems: ", cartItems);

  const totalPrice =
    selectedPackages.reduce((total, pkg) => {
      if (pkg.quantity > 0) {
        const packagePrice = pkg.foodItems.reduce(
          (pkgTotal, item) => pkgTotal + item.price,
          0
        );
        return total + packagePrice * pkg.quantity;
      }
      return total;
    }, 0) +
    selectedDrinks.reduce(
      (total, drink) => total + drink.price * drink.quantity,
      0
    );

  const handleProceedToPay = () => {
    const transformedCartItems = cartItems.map((item) => ({
      label: item.name || item.itemName,
      value: `${item.quantity} x $${item.price.toFixed(2)} 
      `,
    }));

    navigate("/payment-method", {
      state: {
        cartItems: transformedCartItems,
        totalPrice,
      },
    });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="bg-[#090D14] w-[393px] text-white flex flex-col ">
      <Link to="/home" className="self-start">
        <div className="rounded-full p-[10px] mt-[52px] ml-[14px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1px] border-[#202938] flex items-center justify-center">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>
      {/* Header Section */}
      <div className="self-start text-start mt-[36px] mb-[24px] px-4">
        <h1 className="text-[24px] font-[500] leading-[31px] text-white">
          Shopping Cart
        </h1>
      </div>

      {cartItems.length > 0 && (
        <div className="self-start text-start mt-[36px] mb-[24px] px-4 w-full ">
          <div className="flex items-center  bg-[#1c1c1c]  z-30 rounded-2xl border-[1px] border-[#E19C34] px-3 py-2 ">
            <div className="flex items-center gap-2">
              <div className="bg-[#E19C34] rounded-full p-1 h-[20px] w-[20px] flex items-center justify-center">
                <p className="text-xs text-black">i</p>
              </div>

              <div className="text-sm text-[#E19C34]">
                Product more than 2 days are automatically lost
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="self-start text-start  w-full h-[420px] overflow-y-auto scrollbar-hide">
        <div className="flex flex-col items-center w-full ">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <FoodCard
                key={index}
                item={item}
                onRemove={() => handleRemoveItem(item.id)}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center text-center">
              <img src={EmptyShoppingCart} className="w-[250px] h-[250px]" />
              <div>
                <h3 className="font-[500] text-[17.9px] leading-[21.66px]">
                  Cart Empty
                </h3>
                <p className="flex flex-col mt-2 gap-1 w-[190px] h-[26px] font-[400] text-[10.74px] leading-[13px] text-center text-[#838282]">
                  Your cart is empty.
                  <span className="w-[190px] h-[26px] font-[400] text-[10.74px] leading-[13px] text-center">
                    Start adding items to enjoy shopping!
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="self-start text-start px-4">
        <h1 className="text-[20px] font-[700] leading-[40px] text-white">
          Order Summary
        </h1>
      </div> */}

      {/* Apply promos before you order */}
      {/* <hr className="w-full h-[0.75px] border-t-[0.75px] -[#202938]" /> */}
      {cartItems.length > 0 && (
        <div className="fixed bottom-16 flex flex-col  border-[#202938] items-center justify-center ml-2">
          <div className="self-start text-start ml-2">
            <h1 className="text-[20px] font-[700] leading-[40px]">
              Order Summary
            </h1>
          </div>

          <div className="self-start text-start px-4 w-full">
            <div className="flex justify-between w-full text-gray-400 font-medium text-sm">
              <div>Total</div>
              <div>${totalPrice.toFixed(2)}</div>
            </div>
          </div>

          {/* Proceed to Pay Button */}
          <CustomButton
            text="Proceed To Pay"
            style="ml-2"
            buttonStyle="w-[353px] h-[50px] flex items-center justify-center bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[100px] font-[500] mt-6"
            type="submit"
            onClick={handleProceedToPay}
          />
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
