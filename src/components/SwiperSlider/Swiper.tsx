import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.scss";
import { Autoplay } from "swiper/modules";
import ValueCard from "src/components/ValueCard/ValueCard";
import CustomerSatisfactionImage from "src/assets/Images/Satisfaction.svg";
import EfficiencyImage from "src/assets/Images/Efficiency.svg";
import ImprovementImage from "src/assets/Images/Improvement.svg";
import IntegrityImage from "src/assets/Images/Integrity.svg";

export default function Swipeslider() {
  const [setSwiperRef] = useState(null);
  return (
    <>
      <div className="slider">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ValueCard
              img={CustomerSatisfactionImage}
              caption="Customer Satisfaction"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ValueCard img={EfficiencyImage} caption="Efficiency" />
          </SwiperSlide>
          <SwiperSlide>
            <ValueCard
              img={ImprovementImage}
              caption="Improvement & Innovation"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ValueCard img={IntegrityImage} caption="Integrity" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
