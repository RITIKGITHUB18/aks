import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CarouselCard from "./CarouselCard";
import "./swiper.css";
import RecommendationShimmer from "../common/RecommendationShimmer";

const CarouselComponent = ({ carouselData, isLoading }) => {
  console.log("carouselData: ", carouselData);
  console.log("isLoading in carouselComponent: ", isLoading);
  if (isLoading) {
    return (
      <div className="w-full">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={15}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
            1456: { slidesPerView: 5, spaceBetween: 24 },
          }}
          grabCursor={true}
          modules={[Pagination]}
          className="hotelSwiper"
        >
          {[...Array(5)].map((_, i) => (
            <SwiperSlide key={i}>
              <RecommendationShimmer />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        // Show 1.5 slides on very small screens, scale up at breakpoints
        slidesPerView={1.5}
        spaceBetween={15}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          1456: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
        grabCursor={true}
        modules={[Pagination]}
        className="hotelSwiper"
      >
        {carouselData.map((data, index) => (
          <SwiperSlide key={index}>
            <CarouselCard cardData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
