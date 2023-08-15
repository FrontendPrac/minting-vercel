import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children, ...rest }) => {
  const direction = 1;

  const pageEffect = {
    initial: {
      y: direction * 100, // 초기 위치 설정 (위쪽으로 이동)
      opacity: 0,
    },
    in: {
      y: 0, // 원래 위치 (가운데)
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1, type: "spring" }}
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
