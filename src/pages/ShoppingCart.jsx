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
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-full justify-center text-white flex flex-col">
      <div className="fixed top-0 z-50 bg-[#090D14] px-4 pb-4 w-full h-[180px] ml-4 sm:ml-10">
        <Link onClick={handleBack}>
          <div className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center translate-y-[50px]">
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
        </Link>

        <h1 className="flex mt-10 ml-2 sm:ml-8 text-[24px] font-[500] leading-[31.2px] translate-y-[50px]">
          Shopping Cart
        </h1>
      </div>

      <div className="flex flex-col mx-auto mt-[180px] items-center justify-center">
        {cartItems.length > 0 && (
          <div className="self-start text-start mt-[16px] mb-[24px] px-4 w-full">
            <div className="flex items-center  bg-[#1c1c1c]  z-30 rounded-2xl border-[1px] border-[#E19C34] px-3 py-2 ">
              <div className="flex items-center gap-2">
                <div className="bg-[#E19C34] rounded-full p-1 h-[20px] w-[20px] flex items-center justify-center">
                  <p className="text-xs text-black">i</p>
                </div>

                <div className="text-[12px] text-[#E19C34]">
                  Product more than 2 days are automatically lost
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="self-start text-start w-full h-[500px] overflow-y-auto scrollbar-hide px-3  pb-10">
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
          <div className="fixed bottom-0 w-full flex flex-col bg-solid-[#090D14] border-t-[1px] border-[#202938] items-center justify-center ml-2 bg-[#090D14] pb-5 pt-1">
            <div className="w-full max-w-[500px]">
              <div className="self-start text-start ml-2 px-10">
                <h1 className="text-[20px] font-[700] leading-[40px]">
                  Order Summary
                </h1>
              </div>

              <div className="self-start text-start px-12 w-full">
                <div className="flex justify-between w-full text-gray-400 font-medium text-sm">
                  <div>Total</div>
                  <div>${totalPrice.toFixed(2)}</div>
                </div>
              </div>
              <CustomButton
                text="Proceed To Pay"
                style="ml-2"
                buttonStyle="w-[353px] h-[50px] flex items-center justify-center bg-[#3579DD] hover:bg-blue-600 text-white py-2 rounded-[100px] font-[500] mt-6"
                type="submit"
                onClick={handleProceedToPay}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
