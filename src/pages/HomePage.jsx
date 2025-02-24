import { useNavigate } from "react-router-dom";
import {
  arrowRightIcon,
  cartIcon,
  homeBg,
  locationIcon,
  profileIcon,
  vibgyorBlub,
} from "../assets/Images";
import Footer from "../components/common/Footer";
import CarouselComponent from "../components/HomeComponent/CarouselComponent";
import CouponsCarousel from "../components/HomeComponent/CouponsCarousel";
import { coupanData } from "../data/coupanData";
import { hotelData } from "../data/hotelData";
import { useEffect, useState } from "react";
import { useAuth } from "../helper/AuthContext";
import { useSelector } from "react-redux";
import OrderToast from "../components/common/OrderToast";
import GetLocation from "../components/HomeComponent/GetLocation";
import RecommendationShimmer from "../components/common/RecommendationShimmer";

const HomePage = () => {
  const { user, signOut } = useAuth();
  const [recommendedEvents, setRecommendedEvents] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const { totalCoins } = useSelector((state) => state.coins);
  const { newOrder } = useSelector((state) => state.checkout);
  const locationState = useSelector((state) => state.location);
  console.log(locationState);

  const { newItem, selectedPackages, selectedDrinks } = useSelector(
    (state) => state.cart
  );
  const location = useSelector((state) => state.location);
  console.log("location: ", location);
  const totalItem =
    (selectedPackages?.length || 0) + (selectedDrinks?.length || 0);
  const [toast, setToast] = useState(newOrder);
  const navigate = useNavigate();

  const handleCartOnClick = () => {
    navigate("/shopping-cart");
  };

  const handleProfileOnClick = () => {
    navigate("/profile");
  };

  const handleSeeAllOnclick = () => {
    navigate("/recommendation");
  };

  const handleToastOnClick = () => {
    navigate("/view-receipt");
  };

  useEffect(() => {
    if (!locationState.lat || !locationState.lon) {
      return;
    }
    const fetchRecommendations = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://aks-backend-53407187172.us-central1.run.app/api/v1/recommend_location/recommendations/by-distance`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        console.log("Recommendations data:", data.recommendations);
        setRecommendedEvents(data.recommendations);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [locationState.lat, locationState.lon]);

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-black text-white">
      {/* Hero Section with BG Image */}
      <div
        style={{ backgroundImage: `url(${homeBg})` }}
        className="bg-no-repeat bg-cover bg-center w-full min-h-[300px] sm:min-h-[350px] relative"
      >
        {/* Top-Right Icons */}
        <div className="absolute top-10 right-3 flex gap-4 sm:right-4">
          <div
            onClick={handleCartOnClick}
            className="relative w-11 h-11 border-2 border-slate-500 cursor-pointer rounded-full flex items-center justify-center"
          >
            <img src={cartIcon} alt="Cart Icon" className="w-5 h-5" />
            {newItem && (
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center translate-x-[25%] -translate-y-[25%]">
                {totalItem}
              </div>
            )}
          </div>

          <div
            className="w-11 h-11 cursor-pointer"
            onClick={handleProfileOnClick}
          >
            <img
              src={profileIcon}
              alt="Profile Icon"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Rewards Section (No absolute) */}
        <div className="flex flex-col items-center pt-32 pb-8">
          <div className="w-16 h-16">
            <img src={vibgyorBlub} alt="Vibgyor" className="w-full h-full" />
          </div>
          <div className="text-center mt-4">
            <h1 className="text-xl font-medium">My Rewards Points</h1>
            <p className="text-sm mt-1">Earned Points</p>
            <p className="text-4xl sm:text-5xl font-bold mt-2">{totalCoins}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4">
        {/* Coupons Carousel */}
        <div className="my-4">
          <CouponsCarousel couponsData={coupanData} />
        </div>

        <GetLocation />

        <div className="pt-2 pb-6">
          <div className="flex justify-between items-center mb-8 px-4">
            <p className="font-semibold text-base">Recommended for You</p>
            <button
              onClick={handleSeeAllOnclick}
              className="text-sm text-[#3579DD] font-medium"
            >
              See All
            </button>
          </div>
          {isLoading ? (
            <CarouselComponent carouselData={[]} isLoading={isLoading} />
          ) : recommendedEvents.length > 0 ? (
            <CarouselComponent
              carouselData={recommendedEvents}
              isLoading={isLoading}
            />
          ) : (
            <p className=" flex justify-center items-center text-gray-500">
              No event is recommended for your location
            </p>
          )}
        </div>
      </div>

      {newOrder && toast && (
        <div
          onClick={handleToastOnClick}
          className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50"
        >
          <OrderToast setToast={setToast} />
        </div>
      )}

      <div className="mt-auto sticky bottom-0 z-10 w-full bg-[#090D14] border-t border-[#202938] py-2 flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
