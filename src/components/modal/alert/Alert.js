import React from "react";
import * as S from "./Alert.style";

const Alert = ({ prize, close }) => {
  const onClickBtn = (event) => {
    event.preventDefault();
    close();
  };

  return (
    // <S.Wrapper>
    //   <S.Overlay onClick={close}></S.Overlay>
    //   <S.Content>
    //     <S.Title>{title}</S.Title>
    //     <S.Message>{message}</S.Message>
    //     <S.ConfirmBtn onClick={close}>{btnText}</S.ConfirmBtn>
    //   </S.Content>
    // </S.Wrapper>
    <div class="mint_modal">
      <div class="modal_overlay" onClick={close}></div>
      <div class="modal_bg">
        <div class="modal">
          <ul>
            <li class="modal_esc">
              <a href=""></a>
            </li>
            <li class="mo_text" data-text="CONGRATULATIONS" data-align="left">
              CONGRATULATIONS
            </li>
            <li>
              <img src="/img/NFT_POPUP_ticket.png" alt="" />
            </li>
            <li class="pass_name">KTMF PASS NFT</li>
            <li class="pass_nft">{prize} 획득!</li>
          </ul>
          <div class="modal_chec">
            <a href="" onClick={onClickBtn}>
              확인
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
