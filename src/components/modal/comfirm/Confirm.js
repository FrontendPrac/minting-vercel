import React from "react";
import * as S from "./Confirm.style";

const Confirm = ({ title, message, close, confirm }) => {
  return (
    <S.Wrapper>
      <S.Overlay onClick={close}></S.Overlay>
      <S.Content>
        <S.Top>
          <S.Title>{title}</S.Title>
          <S.CloseBtn onClick={close}>&#x2716;</S.CloseBtn>
        </S.Top>
        <S.Message>{message}</S.Message>
        <S.BtnContainer>
          <S.CancelBtn onClick={close}>cancel</S.CancelBtn>
          <S.ConfirmBtn
            onClick={() => {
              confirm && confirm();
              close && close();
            }}
          >
            confirm
          </S.ConfirmBtn>
        </S.BtnContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default Confirm;
