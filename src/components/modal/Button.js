import React from "react";
import * as S from "./Button.style";

const Button = ({ children, onClick }) => {
  return <S.Wrapper onClick={onClick}>{children}</S.Wrapper>;
};

export default Button;
