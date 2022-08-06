import { Box, Container } from "@mui/material";
import React from "react";
import { ReactComponent as SucculentRotate } from "../assets/images/succulents.svg";
import { motion } from "framer-motion"

const Loading = () => {
  return (
    <Box sx={{ position: "fixed", height: "100vh", width: "100vw"}}>
      <Box sx={{ position: "fixed", height: "100vh", width: "100vw", backgroundColor: "white", filter: "blur(8px)" }}/>
      <Box sx={{ position: "fixed", top: "50%", left: "50%", marginTop: "-150px", marginLeft: "-150px", width: 300, height: 300, zIndex: 100}}>
        <motion.div animate={{ rotate: 360 }} transition={{ ease: "linear", duration: 5, repeat: Infinity }} >
          <SucculentRotate />
        </motion.div>
      </Box >
    </Box>

  );
};

export default Loading
