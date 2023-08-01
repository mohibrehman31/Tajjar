import { useState, useRef } from "react";
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
  const swiperRef = useRef(null);
  const [autoplayPaused, setAutoplayPaused] = useState(false);

  const handleMouseEnter = () => {
    setAutoplayPaused(true);
  };

  const handleMouseLeave = () => {
    setAutoplayPaused(false);
  };

  return (
    <>
      <div className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Swiper
          // @ts-ignore
          ref={swiperRef}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            // Pause autoplay when autoplayPaused state is true
            pauseOnMouseEnter: true,
          }}
          centeredSlides={true}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper"
          // Pass the autoplayPaused state to the Swiper component
          autoplayPaused={autoplayPaused}
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
