import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BookTableImg, cartIcon, leftArrow } from "../assets/Images";
import DrinksComponent from "../components/BookingComponent/DrinksComponent";
import DateTimeComponent from "../components/BookingComponent/DateTimeComponent";
import PackagesComponent from "../components/BookingComponent/AffordablePackages";
import { useCart } from "../components/common/CartContext";
import { useDispatch, useSelector } from "react-redux";
import { setDateTime } from "../slice/hotelSlice";
import {
  addDrink,
  addPackage,
  removeDrink,
  removePackage,
} from "../slice/cartSlice";

const BookTable = () => {
  const [activeTab, setActiveTab] = useState("dateTime");
  // const [showButton, setShowButton] = useState("false");
  const [activeButton, setActiveButton] = useState("buyNow");
  const navigate = useNavigate();
  const location = useLocation();
  const hotelData = location.state?.hotelData;

  const dispatch = useDispatch();
  const { selectedPackages, selectedDrinks } = useSelector(
    (state) => state.cart
  );

  // Show cart buttons if any packages or drinks are selected
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
    navigate("/shopping-cart", { state: { action: buttonType } });
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dateTime":
        return (
          <DateTimeComponent
            onSave={(dateTime) => dispatch(setDateTime(dateTime))}
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

  if (!hotelData) {
    return (
      <div className="flex flex-col items-center justify-center text-center text-white mt-10">
        <p>Hotel data not available. Redirecting to the home page...</p>
        {setTimeout(() => navigate("/home"), 2000)}
      </div>
    );
  }
  return (
    <div
      style={{
        height: "100vh",
      }}
      className="bg-[#090D14] w-[440px] max-w-[440px] text-white flex flex-col items-center mx-auto overflow-hidden"
    >
      {/* Header Section */}
      <div
        style={{
          backgroundImage: `url(${BookTableImg})`,
        }}
        className="bg-no-repeat sticky bg-cover bg-center w-[456px] h-[350px]"
      >
        <div className="absolute flex mt-10 justify-around">
          <Link to="/home" className="fixed self-start ml-20">
            <div className="rounded-full p-[10px] hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border-[1.5px] border-slate-500 flex items-center justify-center transform translate-x-[25px]">
              <img src={leftArrow} alt="Back" className="w-6 h-6" />
            </div>
          </Link>
          <div
            className="flex fixed items-center justify-center w-[44px] h-[44px] border-[1.5px] bg-[#090D14] border-slate-500 cursor-pointer rounded-full p-[10px] transform translate-x-[375px] hover:bg-gray-600"
            onClick={() => navigate("/shopping-cart")}
          >
            <img src={cartIcon} alt="Cart Icon" className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-5">
        {/* Hotel Details */}
        <div className="px-[10px] py-[18px] flex items-center justify-between">
          <div className="ml-4">
            <h2 className="text-[18px] font-[500] leading-[23.4px]">
              {hotelData.name}
            </h2>
            <p className="text-[#83858A] font-[400] text-[12px] leading-[19.2px]">
              {hotelData.distance}
            </p>
          </div>
          <button className="flex items-center justify-center mr-2 py-2 w-[75px] h-[32px] border border-blue-500 text-blue-500 rounded-[100px] bg-transparent">
            <p className="text-[12px] leading-[15.6px] ">Message</p>
          </button>
        </div>

        {/* Booking Tabs */}
        <h2 className="text-[18px] font-[500] mt-2 flex items-center justify-start ml-7 leading-[23.4px] text-[#FFFFFF]">
          Book a Table
        </h2>
        <div className="flex flex-col items-center justify-center px-[21px] mt-7">
          <div className="flex overflow-x-auto space-x-2 p-1">
            {bookingTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 text-sm rounded-[56px] leading-[18.2px] ${
                  activeTab === tab.id
                    ? "border-[1px] border-blue-500 text-blue-500 bg-[#161C25]"
                    : "border-[1px] border-gray-700 text-white"
                } `}
                aria-label={`switch to ${tab.name}`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="p-4 w-[393px]">{renderActiveTab()}</div>

        {/* Cart Buttons */}
        {showCartButtons && (
          <div className="fixed bottom-12 border-t-[0.75px] border-[#202938] bg-[#090D14] py-4 px-5 w-[456px]">
            <div className="flex items-center justify-center gap-x-10 w-[343px]">
              <button
                onClick={() => handleAddToCart("addToCart")}
                className={`px-6 py-3 text-[12px] leading-[15.6px] font-[500] border-[1px] rounded-[100px] ml-10 w-[165px] ${
                  activeButton === "addToCart"
                    ? "bg-[#3579DD] text-white border-[1px] border-[#3579DD]"
                    : "text-[#3579DD] border-[#3579DD] hover:bg-[#3579DD] hover:text-white"
                }`}
              >
                Add to Cart
              </button>
              <button
                onClick={() => handleAddToCart("BuyNow")}
                className={`px-6 py-3 text-[12px] leading-[15.6px] font-[500] border-[1px] rounded-[100px] w-[165px] ${
                  activeButton === "buyNow"
                    ? "bg-[#3579DD] text-white border-[1px] border-[#3579DD]"
                    : "text-[#3579DD] border-[#3579DD] hover:bg-[#3579DD] hover:text-white"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookTable;
