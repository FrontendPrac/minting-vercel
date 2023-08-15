import { useState } from "react";

const Faq_2 = () => {
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
  ];

  const faqs2 = [
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
    <section id="faq">
      <div className="container">
        <div className="fn_cs_faq">
          <div className="faq_col">
            <h3 className="fn__maintitle" data-text="FAQ">
              FAQ
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs1, "a")}</div>
          </div>
          <div className="faq_col">
            <div className="fn_cs_accordion">{faqMap(faqs2, "b")}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Faq_2;
