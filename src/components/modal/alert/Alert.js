import React, { useEffect, useState } from "react";
import * as S from "./Alert.style";

const Alert = ({ contract, signerAddress, close }) => {
  const [prize, setPrize] = useState("");

  // Get Prize
  const getMyWhitelist = async () => {
    const response = await contract.getPrize(signerAddress);
    const _prize = parseInt(response);
    console.log("Prize: ", _prize);
    setPrize(_prize);
  };

  // Close Modal Button
  const onClickBtn = (event) => {
    event.preventDefault();
    close();
    location.reload();
  };

  useEffect(() => {
    getMyWhitelist();
  }, []);

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
            <li class="pass_nft">
              {prize === 1 && "경쟁 화이트리스트"}{" "}
              {prize === 2 && "확정 화이트리스트"}획득!
            </li>
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
