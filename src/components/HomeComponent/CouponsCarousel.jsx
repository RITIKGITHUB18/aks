import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "./couponCarousel.css";
import CouponsCard from "./CouponsCard";

const CouponsCarousel = ({ couponsData }) => {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Decorative gradients behind the coupon cards */}
      <div className="absolute inset-0 max-w-sm w-full rounded-[45px] bg-[#0ECCB3] transform -translate-y-1 h-[70px] opacity-50 mx-auto"></div>
      <div className="absolute inset-0 max-w-sm w-full rounded-[45px] bg-[#0ECCB3] transform -translate-y-2 h-[70px] opacity-60 mx-auto"></div>
      <Swiper
        effect="cards"
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCards]}
        className="couponsSwiper w-full max-w-sm" // Adjust max width as needed
      >
        {couponsData.map((data) => (
          <SwiperSlide key={data.id}>
            <CouponsCard coupon={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CouponsCarousel;
