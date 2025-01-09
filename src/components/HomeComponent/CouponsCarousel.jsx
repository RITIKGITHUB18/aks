import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
import "./couponCarousel.css";
import { EffectCards } from "swiper/modules";
import CouponsCard from "./CouponsCard";

const CouponsCarousel = ({ couponsData }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 rounded-[30px] bg-[#0ECCB3] transform -translate-y-[6px] h-[70px] opacity-50"></div>
      <div className="absolute inset-0 rounded-[35px] bg-[#0ECCB3] transform -translate-y-[12px] h-[70px] opacity-60"></div>
      {/* <div className="absolute inset-0 rounded-[40px] bg-[#0ECCB3] transform -translate-y-[15px] h-[70px] opacity-75"></div> */}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        centeredSlides={true}
        modules={[EffectCards]}
        className="couponsSwiper"
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
