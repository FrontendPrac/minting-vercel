import React, { Fragment } from "react";
import { TypeAnimation } from "react-type-animation";

const Textmoving = () => {
  return (
    <Fragment>
      <div className="fn_cd_text_moving">
        <h3>Textmoving Textmoving Textmoving Textmoving Textmoving</h3>
      </div>
      <TypeAnimation
        sequence={[1000, "ARZ META", 1000, "ARZ PASS"]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        speed={10}
        style={{ fontSize: "2em", display: "inline-block" }}
      />
    </Fragment>
  );
};

export default Textmoving;
