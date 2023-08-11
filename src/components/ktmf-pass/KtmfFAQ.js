import React, { useState } from "react";

const KtmfFAQ = () => {
  const faqs1 = [
    {
      title: "KTMF PASS NFT는 어떤 NFT 인가요?",
      dec: "18회째 지속되어 온 KTMF는, 2023년 제 1회 K-POP COVER SONG CONTEST를 개최합니다. KTMF PASS NFT는 참가자들이 땀과 노력이 깃든 무대를 선보이고 KPOP의 새로운 전환점을 맞이하게 되는 KTMF KPOP COVER SONG CONTEST의 첫 개최를 기념하고 추억하는 프로젝트로, 이더리움(ETH) 블록체인 상에서 만들어진 2,023장의 아즈메타 메타버스 생태계 NFT 컬렉션입니다. 멤버십 서비스와 제너레이티브 아이템 NFT가 결합된 유틸리티 성격의 NFT로, 각각의 NFT에는 아즈메타 KTMF 독점 커뮤니티에 입장할 수 있는 PASS 티켓과 아즈메타 메타버스 내 아바타가 착용할 수 있는 코스튬 파츠가 결합되어 있습니다.",
    },
    {
      title: "KTMF PASS NFT의 혜택은 어떤 것이 있나요?",
      dec: "KTMF PASS NFT의 혜택으로는 다음이 있습니다. 아즈메타 커뮤니티 KTMF 비공개 클럽 회원자격. 에어드랍(아즈메타 아트워크 NFT, 파트너 프로젝트 NFT, 이벤트 NFT등). 아즈메타 아바타 코스튬 파츠(헤어, 상의, 하의, 신발, 액세서리) 랜덤 1종. 아즈메타 메타버스 내 재화 유즈 채굴(스테이킹). 미스터리 박스 프리민팅권. 아즈메타 NFT 프로젝트 화이트리스트. 아즈메타 디스코드 Verified Holder role. KTMF 오프라인 굿즈 홀더 할인. KTMF PASS NFT 경품추첨 이벤트 참여권. 아즈메타 오프라인 이벤트 VIP 초대권. 아즈메타는 KTMF PASS NFT가 아즈메타의 모든 이벤트, NFT 컬렉션, 제품등에 대한 패스 역할을 할 수 있도록 10가지 혜택에 이어 계속해서 KTMF PASS NFT 홀더를 위한 독점 혜택을 추가 할 계획입니다. ",
    },
    {
      title: "KTMF PASS NFT의 레어리티와 레어리티별 차이는 어떤 것이 있나요?",
      dec: "KTMF PASS NFT는 헤어, 상의, 하의, 신발, 모자, 배경, 악세서리, 피부색 8종의 파츠와, 빨강, 주황, 노랑, 초록, 하늘, 남색, 보라 7종의 색상의 레이어를 보유한 제너레이티브 아이템 NFT 컬렉션입니다. 각각의 파츠 및 레이어는 단계별 레어리티를 가지고 있으며, 희귀한 정도에 따라 VIP석, R석(Royal), S석(Superior), A석(A grade) 네단계의 등급으로 나뉘게 됩니다.",
    },
    {
      title: "KTMF CD NFT란 무엇인가요?",
      dec: "KTMF PASS NFT 홀더만이 민팅 자격을 가지는 KTMF 스페셜 NFT입니다. 각각의 KTMF CD NFT는 (내용 추가)를 가지고 있으며, 리빌이 되기 전까지 내용물을 알 수 없습니다. 디지털 자산의 특징 및 속성을 고유한 인식값으로 저장하는 NFT의 특성으로 인해 민팅 시 정해진 CD의 내용물은 바꿀 수 없습니다. 오픈씨, 블러 등 마켓플레이스에서 자유롭게 거래가 가능합니다.",
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
    <section id="faq">
      <div className="container">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KtmfFAQ;
