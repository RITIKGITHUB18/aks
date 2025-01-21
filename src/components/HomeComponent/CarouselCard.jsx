import { useNavigate } from "react-router-dom";
import { crown, ratingStar, RecommendedIcon } from "../../assets/Images";
import { useDispatch } from "react-redux";
import { selectHotel } from "../../slice/hotelSlice";

const CarouselCard = ({ cardData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBookTable = () => {
    dispatch(selectHotel(cardData));
    const url = `/book-table/${cardData.id}`;
    navigate(url, { state: { hotelData: cardData } });
  };

  return (
    <div
      className="relative flex flex-col w-[17rem] h-auto rounded-[12px] px-2"
      onClick={handleBookTable}
    >
      {/* Hotel Image */}
      <div className="relative w-full h-[142px]">
        <img
          src={cardData.hotelImg}
          alt={cardData.name}
          className="w-full h-full object-cover rounded-[12px]"
        />

        {cardData.recommendedIcon && (
          <img
            src={RecommendedIcon}
            style={{
              width: "110px",
              height: "26px",
              top: 5,
              right: 5,
              position: "absolute",
            }}
          />
        )}
      </div>

      {/* Hotel Details */}
      <div className="flex flex-col w-full px-4 mt-2">
        {/* Hotel Name and Rating */}
        <div className="flex justify-between items-center">
          {/* Hotel Name and Rating */}
          <div>
            <p className="font-[500] text-[15px] md:text-[15px] leading-[18px] text-white mb-1 text-nowrap">
              {cardData.name}
            </p>
            <div className="flex items-center gap-2">
              {/* Star Icon and Rating */}
              <div className="flex items-center gap-1">
                <img
                  src={ratingStar}
                  alt="Rating Star"
                  className="w-[14px] h-[14px] object-contain"
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
            <p className="text-white font-[500] text-[14px] leading-[20.8px]">
              {cardData.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
