import React from "react";
import { Video } from "./Video";
import Front from "./Front";
import { CSSTransition } from "react-transition-group";

const Enter = ({ showSecondComponent }) => {
  return (
    <>
      {showSecondComponent ? (
        <CSSTransition
          in={showSecondComponent}
          timeout={1000}
          classNames="fn_cs_fade"
          unmountOnExit
        >
          <Video />
        </CSSTransition>
      ) : (
        <CSSTransition out={showSecondComponent} classNames="fn_cs_fade">
          <Front />
        </CSSTransition>
      )}
    </>
  );
};

export default Enter;
