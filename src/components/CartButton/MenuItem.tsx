import * as React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const Li = styled(motion.li)`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;



export const MenuItem = ({ i }: any) => {
  return (
    <Li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="icon-placeholder"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          flex: "40px 0",
          marginRight: "20px",
          border: `2px solid ${colors[i]}`,
        }}
      />
      <div
        className="text-placeholder"
        style={{
          borderRadius: "5px",
          width: "200px",
          height: "20px",
          flex: "1",
          border: `2px solid ${colors[i]}`,
        }}
      />
    </Li>
  );
};
