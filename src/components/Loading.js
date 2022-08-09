import { Box, Container } from "@mui/material";
import React from "react";
import { ReactComponent as SucculentRotate } from "../assets/images/succulents.svg";
import { motion } from "framer-motion"
import { CartButton } from "./CartButton/CartButton";

const Loading = () => {
  return (
    <Box sx={{ position: "fixed", height: "100vh", width: "100vw"}}>
      <CartButton />
      <Box sx={{ position: "fixed", height: "100vh", width: "100vw", backgroundColor: "white", filter: "blur(8px)" }}/>
      <Box sx={{ position: "fixed", top: "50%", left: "50%", marginTop: { xs: "-75px", md: "-100px", lg: "-150px" }, marginLeft: { xs: "-75px", md: "-100px", lg: "-150px" }, width: { xs: "150px", md: "200px", lg: "300px" }, height: { xs: "150px", md: "200px", lg: "300px" }, zIndex: 100}}>
        <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 5, repeat: Infinity }} >
          <SucculentRotate />
        </motion.div>
      </Box >
    </Box>

  );
};

export default Loading
