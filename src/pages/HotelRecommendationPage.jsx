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
    <div className="bg-[#090D14] w-[393px] h-screen text-white flex flex-col items-center relative scrollbar-hide">
      <div className="fixed top-0 z-50 bg-[#090D14] px-4 pt-2 pb-4 w-[393px] max-w-[440px] h-[180px] ">
        <Link onClick={handleBack}>
          <div className="rounded-full p-2 hover:bg-gray-600 w-[44px] h-[44px] bg-[#090D14] border border-[#202938] flex items-center justify-center translate-y-[50px]">
            <img src={leftArrow} alt="Back" className="w-6 h-6" />
          </div>
        </Link>

        <div className="mt-10 flex flex-col translate-y-[50px] gap-2 pb-20">
          <h1 className="text-[24px] font-[500] leading-[31.2px] ">
            Recommended For You
          </h1>
          <p className="font-[400] text-[12px] leading-[19.2px] text-[#83858A]">
            Our recommendation depend by your search result
          </p>
        </div>

        <div className="h-[600px] overflow-y-auto scrollbar-hide rounded-[20px]">
          {<RecommendationCard data={hotelData} />}
        </div>
      </div>
    </div>
  );
};

export default HotelRecommendationPage;
