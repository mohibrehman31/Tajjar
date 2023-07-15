import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialSlider.scss';
import {Pagination} from 'swiper/modules';
import img1 from '../../assets/Images/img1.jpg'
import Testimonials from '../Testimonials/Testimonials';

export default function TestimonialSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Testimonials
            heading="Increase Business"
            subheading="Increase Your Forwarder Business"
            imageSrc={img1}
            name="John Doe"
            position="Software Engineer"
            review="We increase our sales thanks to Parnity, is the perfect tool to expand our global network."
            buttonText="Increase My Forwarder Shipment"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Testimonials
            heading="Increase Business"
            subheading="Increase Your Forwarder Business"
            imageSrc={img1}
            name="John Doe"
            position="Software Engineer"
            review="We increase our sales thanks to Parnity, is the perfect tool to expand our global network."
            buttonText="Increase My Forwarder Shipment"
          />
        </SwiperSlide>
        <SwiperSlide>
        <Testimonials
            heading="Increase Business"
            subheading="Increase Your Forwarder Business"
            imageSrc={img1}
            name="John Doe"
            position="Software Engineer"
            review="We increase our sales thanks to Parnity, is the perfect tool to expand our global network."
            buttonText="Increase My Forwarder Shipment"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
