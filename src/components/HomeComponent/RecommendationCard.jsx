import React from "react";
import { ratingStar } from "../../assets/Images";
import { useNavigate } from "react-router-dom";
import { selectHotel } from "../../slice/hotelSlice";
import { useDispatch } from "react-redux";

const RecommendationCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBooking = (item) => {
    console.log("data-id: ", item.id);
    dispatch(selectHotel(item));
    const url = `/book-table/${item.id}`;
    navigate(url, { state: { hotelData: item } });
  };

  return (
    <div className="flex flex-col justify-center ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex p-4"
          onClick={() => handleBooking(item)}
        >
          <div className="flex gap-x-[30px]">
            <img
              src={item.hotelImg}
              alt={item.name}
              className="w-[98px] h-[98px] rounded-[12px]"
            />

            <div className="flex flex-col items-start gap-2 mt-4">
              <h2>{item.name}</h2>
              {/* Star Icon and Rating */}
              <div className="flex items-center gap-x-2">
                <img
                  src={ratingStar}
                  alt="Rating Star"
                  className="w-[12px] h-[12px] object-contain"
                />
                <span className="text-[12px] text-gray-400">
                  {item.avgRating}
                </span>{" "}
                <span className="text-[12px] text-gray-400">.</span>
                <span className="text-[12px] text-gray-400">
                  {item.distance}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendationCard;
