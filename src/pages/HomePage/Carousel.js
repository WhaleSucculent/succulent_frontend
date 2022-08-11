import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import slidesrc2 from "assets/images/3.jpg";
import slidesrc3 from "assets/images/2.jpg";
import slidesrc4 from "assets/images/1.jpg";
import slidesrc5 from "assets/images/4.jpg";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

export default function Carousel() {
  return (
    <>
      <Swiper  pagination={{ dynamicBullets: true, }} modules={[ Autoplay]} className="mySwiper" autoplay={{
        delay: 4000,
      }}>
        <SwiperSlide style={{ overflow: "visible" }}>
          <img src={slidesrc4} alt="slid" height="580px" style={{ filter: "opacity(70%)" }} />
          <Box className="swiper-caption" sx={{ position: "absolute", top: "100%", left: "100%", marginTop: {xs: "-75px", md: "-100px", lg: "100px" }, marginLeft: {xs: "-150px", md: "-100px", lg: "-50px" }, width: {xs: "300px", md: "200px", lg: "1000px" }, height: {xs: "300px", md: "200px", lg: "1000px" }, zIndex: 50 }} >
            <Typography sx={{ color: "black",mb: {xs:5, md:2}, fontSize: {xs:"2rem",md: "3rem",lg:"4em"}, fontFamily:"Alumni Sans Inline One", fontStyle: "italic"}} >Welcome to <span>Whale Succulent</span></Typography>
            <Typography sx={{color: "black" ,fontSize: {xs: "1rem", md: "1.5rem",lg:"2em"}}}>
              We sales the most beautiful succulent plants in the world.
            </Typography>
          </Box>
        </SwiperSlide>
   
        <SwiperSlide style={{ filter: "opacity(70%)" }}>
          <img src={slidesrc2} alt="slid" height="580px" />
        </SwiperSlide>
        <SwiperSlide style={{ filter: "opacity(70%)" }}>
          <img src={slidesrc3} alt="slid" height="580px" />
        </SwiperSlide>
        <SwiperSlide style={{ filter: "opacity(70%)" }}>
          <img src={slidesrc5} alt="slid" height="580px" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
