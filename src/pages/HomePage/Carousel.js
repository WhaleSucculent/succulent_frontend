import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slidesrc from "assets/images/Slide.png";
import slidesrc2 from "assets/images/Slide2.jpg";
import slidesrc3 from "assets/images/1.jpg";
import slidesrc4 from "assets/images/2.jpg";


// import required modules
import { Navigation, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} pagination={{ dynamicBullets: true, }} modules={[Navigation]} className="mySwiper" autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}>
        <SwiperSlide >
          <img src={slidesrc4} alt="slid" width="100%" height="550px" style={{ filter: "blur(2px)" }} />
          <Box className="swiper-caption" sx={{ position: "absolute", top: "50%", left: "50%", zIndex: 100 }} >
            <Typography color={"white"} fontSize={"3em"} >Welcome to <span>Whale Succulent</span></Typography>
            <Typography color={"white"} fontSize={"1.5em"}>
              We sales the most beautiful succulent plants in the world.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc} alt="slid" width="100%" height="550px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc2} alt="slid" width="100%" height="550px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slidesrc3} alt="slid" width="100%" height="550px" />
        </SwiperSlide>


      </Swiper>
    </>
  );
}
