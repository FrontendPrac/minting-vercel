import React from "react";
import * as S from "./Event.style";
import Image from "next/image";
import Link from "next/link";

const Event = () => {
  return (
    <div className="fn_cs_event">
      <div>
        <span className="left_text">GET</span> YOUR WHITELIST
      </div>
      <div className="title">
        KTMF PASS NFT <br />
        DRAW EVENT
      </div>
      <div className="content">
        이벤트에 참여하고 KTMF PASS NFT 화이트리스트를 획득하세요!
      </div>

      <Link href="/event">
        <div className="button">GET STARTED!</div>
      </Link>
    </div>
  );
};

export default Event;
