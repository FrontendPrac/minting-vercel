import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { variantsSideLeft } from "../variants";

const Faq = () => {
  const faqs1 = [
    {
      title: "아즈메타 NFT 컬렉션이란?",
      dec: "아즈메타 NFT 컬렉션은 아즈메타 웹3.0 생태계로의 모험을 떠나기 위한 특별한 입장권 입니다. 아즈메타에서 개최되는 이벤트마다 해당 이벤트 IP를 기반으로 한정판 PASS 컬렉션이 생성되며, 각각의 컬렉션은 홀더에게 유니크한 혜택과 Web3.0 경험을 선사합니다. 컬렉션별 베네핏은 상이할 수 있습니다.",
    },
    {
      title: "민팅은 어떻게 진행되나요?",
      dec: "각 이벤트 일정에 따라 컬렉션 민팅이 진행됩니다. 민팅 일정과 세부 사항은 컬렉션별 설명 페이지를 참고해주세요.",
    },
    {
      title: "어떤 블록체인을 이용하나요?",
      dec: "아즈메타 NFT 컬렉션은 이더리움(ETH)올 이용합니다.",
    },
    {
      title: "어떤 NFT 표준을 사용하나요?",
      dec: "아즈메타 NFT 컬렉션은 CryptoPunks 및 기타 NFT 프로젝트로 가장 잘 알려진 널리 사용되는 ERC721 표준을 기반으로 하는 ERC721a 토큰 표준을 통해 세상에서 가장 저렴하게 NFT를 이용할 수 있는 기회를 제공합니다.가스 비용 절감: NFT와 고유한 특성을 처리할 때 발생하는 중요한 문제 중 하나로 토큰을 주조 및 거래하는 과정에서의 높은 가스 비용(Gas Fee)이 있습니다. ERC721a 토큰 표준은 가스 비용을 낮추는 스마트 계약 기능의 최적화를 통해 투자자와 창작자 모두에게 접근성과 비용 효율성을 제공합니다. 일괄 전송: ERC721a는 일괄 전송 기능을 지원하므로 사용자가 단일 트랜잭션에서 여러 토큰을 전송할 수 있습니다. 이 기능은 효율적으로 전송 관련 트랜잭션 프로세스를 간소화합니다. 호환성 및 통합: 기존 ERC721 표준을 기반으로 ERC721a는 이미 널리 사용되는 표준을 지원하는 기존 도구, 플랫폼 및 지갑과의 호환성을 활용합니다. 이러한 호환성은 ERC721a 토큰을 NFT 시장에 더 쉽게 통합할 수 있도록 하여 크리에이터, 수집가 및 투자자의 활동을 원활하게 만듭니다.",
    },
    {
      title: "커뮤니티는 어떻게 참여하나요?",
      dec: "아즈메타는 트위터, 텔레그램, 인스타그램, 카카오톡, 유튜브 등의 커뮤니티를 보유하고있으며, 홈페이지 내 연결된 URL을 통해 입장하실 수 있습니다. 추후 디스코드가 추가로 개설될 예정입니다.",
    },
    {
      title: "화이트리스트가 무엇인가요?",
      dec: "화이트리스트는 특정 조건에 부합하는 유저를 대상으로 제공되는 NFT 우선 구매권입니다. 화이트리스트 보유시, 퍼블릭세일 전 보다 저렴한 가격으로 NFT를 구매할 수 있습니다. ",
    },
    {
      title: "에어드랍이 무엇인가요?",
      dec: "NFT를 무료로 제공하는 것으로, 아즈메타 NFT 컬렉션 베네핏으로 획득하거나 특정 조건 달성 시 획득할 수 있습니다.",
    },
  ];

  const [active, setActive] = useState(`a0`);

  const faqMap = (arr, index) => {
    return arr.map((data, i) => (
      <div className="fn_cs_accordion" key={i}>
        <div className={`acc_item ${index + i === active ? "active" : ""}`}>
          <div
            className="acc_header"
            onClick={() =>
              setActive(`${index + i}` === active ? null : `${index + i}`)
            }
          >
            <h3 className="fn__maintitle" data-text={data.title}>
              {data.title}
            </h3>
            <span className="icon">
              <span />
            </span>
          </div>
          <div
            className="acc_content"
            style={{
              display: `${index + i === active ? "block" : "none"}`,
            }}
          >
            <p>{data.dec}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div class="main_sec3">
      <div class="sec3_flex">
        <div class="sec3_text">
          <motion.div
            whileInView="onscreen"
            initial="offscreen"
            variants={variantsSideLeft}
            custom={0.5}
          >
            <p>Frequently Asked Questions</p>
          </motion.div>
        </div>

        <div class="con_list">
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
