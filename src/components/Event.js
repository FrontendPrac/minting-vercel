import React from "react";
import * as S from "./Event.style";
import Image from "next/image";
import Link from "next/link";

const Event = () => {
  return (
    <div className="fn_cs_event">
      <div>
        <span className="left_text">GET</span> - your whitelist
      </div>
      <div className="title">
        KTMF Pass NFT <br />
        Draw Event
      </div>
      <div className="content">
        8월 8일 부터 9월 1일까지 매일 매일 참여할 수 있는 KTMF PASS NFT 이벤트에
        참여해보세요!
      </div>

      <Link href="/event">
        <div className="button">Get Started !</div>
      </Link>
    </div>
  );
};

export default Event;
