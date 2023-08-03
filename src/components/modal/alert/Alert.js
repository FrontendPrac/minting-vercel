import React from "react";
import * as S from "./Confirm.style";

const Alert = ({ title, message, btnText, close }) => {
  return (
    <S.Wrapper>
      <S.Overlay onClick={close}></S.Overlay>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Message>{message}</S.Message>
        <S.ConfirmBtn onClick={close}>{btnText}</S.ConfirmBtn>
      </S.Content>
    </S.Wrapper>
  );
};

export default Alert;
