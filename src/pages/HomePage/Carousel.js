import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import slidesrc2 from "assets/images/5.png";
import slidesrc3 from "assets/images/2.jpg";
import slidesrc4 from "assets/images/1.jpg";
import slidesrc5 from "assets/images/4.jpg";


// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import { Box, Typography } from "@mui/material";

// Set the Carousel's Height here, the words cover it will caculate marginTop and margin Left by this value.
const CarouselHeight = "580px"
export default function Carousel() {
  return (
    <>
      <Swiper pagination={{ dynamicBullets: true, }} modules={[Autoplay]} className="mySwiper" autoplay={{
        delay: 4000,
      }}>
        <SwiperSlide style={{ overflow: "hidden" }}>
          <img src={slidesrc4} alt="slid" height={`${CarouselHeight}`} style={{ filter: "opacity(70%)" }} />
          <Box className="swiper-caption" sx={{ position: "absolute", top: {xs:"40%", md: "60%"}, left: {xs:"0", md:"40%", lg: "30%"} }} >
            <Typography sx={{ color: "white", mb: { xs: 5, md: 2 }, fontSize: { xs: "2rem", md: "3rem", lg: "5em" }, fontFamily: "Inter var", fontWeight: 900 }} >Welcome to <span>Whale Succulent</span></Typography>
            <Typography sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3em" }, fontFamily: "Dancing Script", fontWeight: 900 }}>
              We sale the most beautiful succulent plants in the world.
            </Typography>
          </Box>
        </SwiperSlide>

        <SwiperSlide style={{ filter: "opacity(70%)", overflow: "hidden" }}>
          <img src={slidesrc2} alt="slid" height={`${CarouselHeight}`} />
          <Box className="swiper-caption" sx={{ position: "absolute", top: { xs: "40%", md: "60%" }, left: { xs: "0", md: "40%", lg: "30%" } }} >
            <Typography sx={{ color: "white", mb: { xs: 5, md: 2 }, fontSize: { xs: "2rem", md: "3rem", lg: "5em" }, fontFamily: "Inter var", fontWeight: 900 }} >Most Beautiful Succulent</Typography>
            <Typography sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3em" }, fontFamily: "Dancing Script", fontWeight: 900 }}>
              Rare plants from overseas with one step shopping experience.
            </Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide style={{ filter: "opacity(70%)", overflow: "hidden" }}>
          <img src={slidesrc3} alt="slid" height={`${CarouselHeight}`} />
        </SwiperSlide>
        <SwiperSlide style={{ filter: "opacity(70%)", overflow: "hidden" }}>
          <img src={slidesrc5} alt="slid" height={`${CarouselHeight}`} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
