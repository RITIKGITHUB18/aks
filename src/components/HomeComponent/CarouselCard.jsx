import { useNavigate } from "react-router-dom";
import { ratingStar } from "../../assets/Images";

const CarouselCard = ({ cardData }) => {
  const navigate = useNavigate();
  const handleBookTable = () => {
    const url = `/book-table/${cardData.id}`;
    navigate(url);
  };

  return (
    <div
      className="relative flex flex-col w-[269px] h-[183px] rounded-[12px] px-2 mb-3"
      onClick={handleBookTable}
    >
      {/* Hotel Image */}
      <div className="relative w-full h-[132px]">
        <img
          src={cardData.hotelImg}
          alt={cardData.name}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>

      {/* Hotel Details */}
      <div className="absolute flex flex-col w-full px-2 transform translate-y-[140px]">
        {/* Hotel Name and Rating */}
        <div className="flex justify-between items-center">
          {/* Hotel Name and Rating */}
          <div>
            <p className="font-[500] text-[14px] leading-[18px] text-white mb-1">
              {cardData.name}
            </p>
            <div className="flex items-center gap-2">
              {/* Star Icon and Rating */}
              <div className="flex items-center gap-1">
                <img
                  src={ratingStar}
                  alt="Rating Star"
                  className="w-[12px] h-[12px] object-contain"
                />
                <span className="text-[12px] text-gray-400">
                  {cardData.avgRating}
                </span>
              </div>
              <span className="text-[12px] text-gray-400">
                {cardData.distance}
              </span>
            </div>
          </div>

          {/* Price */}
          <div>
            <p className="text-white font-[500] text-[16px] leading-[20.8px]">
              {cardData.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
