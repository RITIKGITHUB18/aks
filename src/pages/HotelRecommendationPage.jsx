import { Link, useNavigate } from "react-router-dom";
import { leftArrow } from "../assets/Images";
import { hotelData } from "../data/hotelData";
import RecommendationCard from "../components/HomeComponent/RecommendationCard";

const HotelRecommendationPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-screen text-white flex flex-col items-center relative scrollbar-hide">
      <Link
        onClick={handleBack}
        className="flex items-center self-start left-0 transition-transform translate-x-5 sm:translate-x-10 z-[200]"
      >
        <div className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center translate-y-[25px]">
          <img src={leftArrow} alt="Back" className="w-6 h-6" />
        </div>
      </Link>
      <div className="flex items-center justify-start bg-[#090D14] px-10 pt-2 pb-4 w-full sm:max-w-[28rem] h-[11rem] ml-3">
        <div className="mt-10 flex flex-col translate-y-[50px] gap-2 pb-20">
          <h1 className="text-[24px] font-[500] leading-[31.2px] ">
            Recommended For You
          </h1>
          <p className="font-[400] text-[12px] leading-[19.2px] text-[#83858A]">
            Our recommendation depend by your search result
          </p>
        </div>
      </div>
      <div className="h-[40rem] overflow-y-auto scrollbar-hide rounded-[20px]">
        {<RecommendationCard data={hotelData} />}
      </div>
    </div>
  );
};

export default HotelRecommendationPage;
