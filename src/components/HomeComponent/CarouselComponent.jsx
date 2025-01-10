import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CarouselCard from "./CarouselCard";
import "./swiper.css";

const CarouselComponent = ({ carouselData }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView="1.5"
        grabCursor={true}
        modules={[Pagination]}
        className="hotelSwiper"
      >
        {carouselData.map((data) => (
          <SwiperSlide key={data.id}>
            <CarouselCard cardData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
