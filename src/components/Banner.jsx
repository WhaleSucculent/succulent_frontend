import { Box, Slide, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";


function Banner() {

  const messages = [
    "End of spring sale is on",
    "Take 10% off of select items",
    "Hurry Up! From Aug 01 to Aug 27",
  ];

  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalid = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalid);
    };
  }, [messages.length]);

  return (
    <div>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px,0px,10px,0px",
        overflow: "hidden",
        backgroundColor: "#87d8f4",
        fontSize: { xs: "20px", md: "25px" },
      }}>
        <Slide direction="left" in={show}>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Typography sx={{
              lineHeight: 1.8,
              fontSize: { xs: "20px", md: "30px", xl: "40px" },
              fontFamily: "monospace",
            }}>{messages[messageIndex]}</Typography>
          </Box>
        </Slide>
      </Box>
    </div>
  );
}

export default Banner;
