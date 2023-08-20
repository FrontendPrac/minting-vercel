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
  };

  // Random video
  const videoPaths = [
    "/img/video/KTMF_PASSNFT_TRANSPARENT.mp4",
    "/img/video/KTMF_PASSNFT_GOLD.mp4",
    "/img/video/KTMF_PASSNFT_SILVER.mp4",
  ];

  const randomIndex = Math.floor(Math.random() * videoPaths.length);

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

    <div className="mint_modal">
      <div className="modal_overlay" onClick={close}></div>
      <div className="modal_bg">
        <div className="modal">
          <ul>
            <li className="modal_esc">
              <a href=""></a>
            </li>
            <li
              className="mo_text"
              data-text="CONGRATULATIONS"
              data-align="left"
            >
              CONGRATULATIONS
            </li>
            <li>
              {/* <img src="/img/NFT_ALERT.png" alt="img" /> */}
              <video
                src={videoPaths[randomIndex]}
                playsInline
                autoPlay
                loop
                muted
                style={{ width: "100%", height: "100%" }}
              />
            </li>
            <li className="pass_name">KTMF PASS NFT</li>
            <li className="pass_nft">
              {prize === 1 && "경쟁 화이트리스트"}{" "}
              {prize === 2 && "확정 화이트리스트"}획득!
            </li>
          </ul>
          <div className="modal_chec">
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
