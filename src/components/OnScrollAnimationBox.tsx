import React from "react";
import { ForwardRefComponent, HTMLMotionProps, motion, Variants } from "framer-motion";
// After Scroll animation parameter
const cardVariants: Variants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 0.4,
    },
  },
};

/**
 * Customized component, Wrapped children can have onscroll vibrate animation 
 */
const OnScrollAnimationBox = ( props:  ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.9 }}
      variants={cardVariants}
      {...props}
    />
  );
};

export default OnScrollAnimationBox;
