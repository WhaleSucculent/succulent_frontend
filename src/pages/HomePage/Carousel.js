import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard } from "swiper";
import slidesrc from "assets/images/Slide.png";
import slidesrc2 from "assets/images/Slide2.jpg";

const Carousel = () => {
  return (
    <>
      <Swiper
        autoplay={true}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard]}
        className="mySwiper"
        effect="cards"
      >
        <SwiperSlide>
          <img src={slidesrc} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc2} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc2} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc2} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc2} alt="slid" width={2000} height={500} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc} alt="slid" width={2000} height={500} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
