import { useNavigate } from "react-router-dom";
import { hotelRoom01, ratingStar, RecommendedIcon } from "../../assets/Images";
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

  // Truncate or fallback for address
  const address = cardData?.location?.address || "";
  const distance = cardData?.distance || "";
  let displayAddress = address
    ? address.length > 30
      ? address.slice(0, 30) + "..."
      : address
    : distance;

  // Fallback image
  const handleImageError = (e) => {
    e.currentTarget.src = hotelRoom01;
  };

  return (
    <div
      className="relative flex flex-col w-[17rem] h-auto rounded-[12px] px-2"
      onClick={handleBookTable}
    >
      {/* Top Image */}
      <div className="relative w-full h-[142px]">
        <img
          src={cardData?.location?.image_link || hotelRoom01}
          alt={cardData?.location?.name}
          className="w-full h-full object-cover rounded-[12px]"
          onError={handleImageError}
        />
        {cardData?.recommendedIcon && (
          <img
            src={RecommendedIcon}
            style={{
              width: "110px",
              height: "26px",
              top: 5,
              right: 5,
              position: "absolute",
            }}
            alt="Recommended Icon"
          />
        )}
      </div>

      {/* Bottom Info */}
      <div className="flex flex-col w-full px-1 mt-2">
        {/* Name + Rating on the same row, spaced apart */}
        <div className="flex justify-between items-center">
          {/* Hotel Name */}
          <p className="font-[500] text-[15px] leading-[18px] text-white text-nowrap mr-2">
            {cardData?.location?.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <img
              src={ratingStar}
              alt="Rating Star"
              className="w-[14px] h-[14px] object-contain"
            />
            <span className="text-[12px] text-gray-400 text-nowrap">
              {cardData?.location?.rating} (
              {cardData?.location?.number_of_reviews})
            </span>
          </div>
        </div>

        {/* Address / distance below */}
        <div className="text-start mt-1">
          <span className="text-[12px] text-gray-400">{displayAddress}</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
