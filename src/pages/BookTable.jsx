import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookTableImg, cartIcon, leftArrow } from "../assets/Images";
import DrinksComponent from "../components/BookingComponent/DrinksComponent";
import DateTimeComponent from "../components/BookingComponent/DateTimeComponent";
import PackagesComponent from "../components/BookingComponent/AffordablePackages";
import { useDispatch, useSelector } from "react-redux";
import { setDateTime } from "../slice/hotelSlice";
import {
  addDrink,
  addPackage,
  removeDrink,
  removePackage,
  setNewCartItem,
} from "../slice/cartSlice";
import { motion } from "framer-motion";

const BookTable = () => {
  const [activeTab, setActiveTab] = useState("dateTime");
  const [activeButton, setActiveButton] = useState("buyNow");

  const navigate = useNavigate();
  const location = useLocation();

  const hotelData = location.state?.hotelData;

  const dispatch = useDispatch();
  const { selectedPackages, selectedDrinks, newItem } = useSelector(
    (state) => state.cart
  );

  const totalItems =
    (selectedDrinks?.length || 0) + (selectedPackages?.length || 0);

  const showCartButtons = useMemo(() => {
    return (
      selectedPackages.some((pkg) => pkg.quantity > 0) ||
      selectedDrinks.some((drink) => drink.quantity > 0)
    );
  }, [selectedPackages, selectedDrinks]);

  const bookingTabs = [
    { id: "dateTime", name: "Time and Date" },
    { id: "packages", name: "Affordable Packages" },
    { id: "drinks", name: "Drinks" },
  ];

  const handleAddToCart = (buttonType) => {
    dispatch(setNewCartItem(true));
    navigate("/shopping-cart", { state: { action: buttonType } });
  };

  const handleNext = () => {
    setActiveTab("drinks");
  };

  const handleTimeChosen = () => {
    setActiveTab("packages");
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dateTime":
        return (
          <DateTimeComponent
            onSave={(dateTime) => dispatch(setDateTime(dateTime))}
            onTimeChosen={handleTimeChosen}
          />
        );
      case "packages":
        return (
          <PackagesComponent
            packagesInfo={hotelData.affordablePackages}
            onAdd={(pkg) => dispatch(addPackage(pkg))}
            onRemove={(pkg) => dispatch(removePackage(pkg))}
          />
        );
      case "drinks":
        return (
          <DrinksComponent
            drinksInfo={hotelData.drinks}
            onAdd={(drink) => dispatch(addDrink(drink))}
            onRemove={(drink) => dispatch(removeDrink(drink))}
          />
        );
      default:
        return null;
    }
  };

  const handleChat = () => {
    navigate("/chat-with-us", {
      state: { hotelData: hotelData },
    });
  };

  if (!hotelData) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white mt-10">
        <p>Hotel data not available. Redirecting to the home page...</p>
        {setTimeout(() => navigate("/home"), 2000)}
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0", opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="
      text-white flex flex-col items-center mx-auto 
      h-auto overflow-y-auto w-full relative 
    "
    >
      <div
        style={{ backgroundImage: `url(${BookTableImg})` }}
        className="w-full bg-no-repeat bg-cover bg-center min-h-[250px] xs:min-h-[320px] sm:min-h-[340px] md:h-auto relative"
      >
        <div className="absolute mt-12 left-5 right-8 flex items-center justify-between">
          <div
            onClick={handleBack}
            className="w-10 h-10 bg-[#090D14] border border-slate-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600"
          >
            <img src={leftArrow} alt="Back" className="w-5 h-5" />
          </div>
          <div
            className="w-10 h-10 bg-[#090D14] border border-slate-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 relative"
            onClick={() => navigate("/shopping-cart")}
          >
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5" />
            {newItem && (
              <div className="absolute top-12 flex items-center justify-center bg-red-500  rounded-full w-[18px] h-[18px] translate-x-[12px] -translate-y-[20px] text-white">
                <p className="text-[11px] ">{totalItems}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-6 mt-5">
        {/* Hotel Details */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-medium">{hotelData.name}</h2>
            <p className="text-xs text-[#83858A]">{hotelData.distance}</p>
          </div>
          <button
            onClick={handleChat}
            className="py-1 px-3 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-all"
          >
            Message
          </button>
        </div>

        {/* Book a Table Heading */}
        <h2 className="text-lg font-medium mb-10">Book a Table</h2>

        {/* Booking Tabs */}
        <div className="flex overflow-x-auto xs:space-x-3 mb-4 items-center justify-center">
          {bookingTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-sm rounded-full whitespace-nowrap
                ${
                  activeTab === tab.id
                    ? "border border-blue-500 text-blue-500 bg-[#161C25]"
                    : "border border-gray-700 text-white"
                }
              `}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="w-full mt-8 flex items-center justify-center">
          {renderActiveTab()}
        </div>
      </div>
      {/* Cart Buttons and  activeTab is packages then we need to render the add to cart and next buttons*/}
      {showCartButtons && activeTab === "packages" && (
        <div className="sticky bottom-0 left-0 w-full bg-[#090D14] border-t border-[#202938] pt-4 pb-6 px-4">
          <div className="flex justify-evenly">
            <button
              onClick={() => handleAddToCart("addToCart")}
              className={`px-6 py-2 text-sm font-medium rounded-full 
                ${
                  activeButton === "addToCart"
                    ? "bg-[#3579DD] text-white border border-[#3579DD]"
                    : "text-[#3579DD] border border-[#3579DD] hover:bg-[#3579DD] hover:text-white"
                }
              `}
            >
              Go to Cart
            </button>
            <button
              onClick={() => handleNext("next")}
              className={`px-6 py-2 text-sm font-medium rounded-full
                ${
                  activeButton === "buyNow"
                    ? "bg-[#3579DD] text-white border border-[#3579DD]"
                    : "text-[#3579DD] border border-[#3579DD] hover:bg-[#3579DD] hover:text-white"
                }
              `}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* Cart Buttons and the activeTab is drinks then we need to render the add to cart and buy now */}
      {showCartButtons && activeTab === "drinks" && (
        <div className="sticky bottom-0 left-0 w-full bg-[#090D14] border-t border-[#202938] pt-4 pb-6 px-4">
          <div className="flex justify-evenly">
            <button
              onClick={() => handleAddToCart("addToCart")}
              className={`px-6 py-2 text-sm font-medium rounded-full 
                ${
                  activeButton === "addToCart"
                    ? "bg-[#3579DD] text-white border border-[#3579DD]"
                    : "text-[#3579DD] border border-[#3579DD] hover:bg-[#3579DD] hover:text-white"
                }
              `}
            >
              Go to Cart
            </button>
            <button
              onClick={() => handleAddToCart("BuyNow")}
              className={`px-6 py-2 text-sm font-medium rounded-full
                ${
                  activeButton === "buyNow"
                    ? "bg-[#3579DD] text-white border border-[#3579DD]"
                    : "text-[#3579DD] border border-[#3579DD] hover:bg-[#3579DD] hover:text-white"
                }
              `}
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BookTable;
