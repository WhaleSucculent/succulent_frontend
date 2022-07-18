import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import slidesrc from "assets/images/Slide.png";
import slidesrc2 from "assets/images/Slide2.jpg";
import slidesrc3 from "assets/images/1.jpg";
import slidesrc4 from "assets/images/2.jpg";


// import required modules
import { Navigation } from "swiper";


export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
        <img src={slidesrc} alt="slid" width="100%" height="300px" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slidesrc2} alt="slid" width="100%" height="300px" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slidesrc3} alt="slid" width="100%" height="300px" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={slidesrc4} alt="slid" width="100%" height="300px" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
