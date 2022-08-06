import React from "react";
import { motion } from "framer-motion";
const cardVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const OnScrollAnimationBox = ( {children}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
};

export default OnScrollAnimationBox;
