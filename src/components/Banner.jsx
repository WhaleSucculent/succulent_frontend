import { Message } from "@mui/icons-material";
import { Box, Slide, styled, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useEffect, useState } from "react";


function Banner() {
  const PromoContainer = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px,0px,10px,0px",
    overflow: "hidden",
    backgroundColor: "#87d8f4",
    fontSize: "40px",
  }));
  const PromoText = styled(Typography)(() => ({
    lineHeight: 1.8,
    fontSize: "30px",
    marginBottom: "10px",
    fontFamily: "monospace",
  }));
  const messages = [
    "End of sping sale is on",
    "Take 10% off of select items",
    "Harry Up! From Aug 01 to Aug 27",
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
      <PromoContainer>
        <Slide direction="left" in={show}>
          <Box>
            <PromoText>{messages[messageIndex]}</PromoText>
          </Box>
        </Slide>{" "}
      </PromoContainer>
    </div>
  );
}

export default Banner;
