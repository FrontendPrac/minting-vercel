import React from "react";
import { TypeAnimation } from "react-type-animation";

const LoadingSplash = () => {
  const options = ["Loading ...", 1000];

  return (
    <div className="loading-splash">
      <TypeAnimation sequence={options} speed={50} repeat={Infinity} />
    </div>
  );
};

export default LoadingSplash;
