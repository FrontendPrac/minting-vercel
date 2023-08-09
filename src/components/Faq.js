import { useState } from "react";

const Faq = () => {
  const faqs1 = [
    {
      title: "아즈메타 NFT 컬렉션이란?",
      dec: "아즈메타 NFT 컬렉션은 메타버스 플랫폼인 '아즈메타'를 기반으로 발행되는 컬렉션입니다. 아즈메타 플랫폼에서 여러 이벤트를 진행하고, 각 이벤트를 기념하여 NFT를 발행하거나, 이벤트와 관련된 IP를 회득하여 NFT를 발행합니다. 각 이벤트 별로 컬렉션이 생성되며. 베네핏과 %팅 방식 등은 이벤트 별로 상이할 수 있습니다.",
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
      title: "거버넌스 토큰이 무엇인가요?",
      dec: "거버넌스 토큰은 아즈메타 생태계 내에서 투표할 수 있는 의결권의 성격올 가진토큰입니다. 아즈메타에는 $META라는 거버넌스 토큰이 존재하며 이를 통해 아즈메타 생태계의 방향성을 결정하는 투표에 참여할 수 있습니다.",
    },
    {
      title: "유즈(가침)가 무엇인가요?",
      dec: "아즈메타에는 '유즈(가칭)'라는 재화가 존재하며, 아즈메타 플랫폼 내 여러 활동들올 통해 획득할 수 있습니다.",
    },
  ];

  const faqs2 = [
    {
      title: "커뮤니티는 어떻게 참여하나요?",
      dec: "아즈메타 커뮤니티는 카카오톡, 텔레그램, 인스타그램, 유튜브 둥이 개설되어 있으며, 홈페이지 내 연결된 URL로 입장하실 수 있습니다. 추후 디스코드, 트위터 둥이 추가로 개설될 예정입니다.",
    },
    {
      title: "2차 거래 로열티가 있나요?",
      dec: "2차 거래 로열티는 00%입니다.",
    },
    {
      title: "화이트리스트가 무엇인가요?",
      dec: "화이트리스트는 NFT 구매 우선권입니다. 퍼블릭 세일 전, 먼저 제한된 수량올 구매할 수 있는 권한입니다. 타 프로젝트 NFT를 홀드하거나, 특정 조건 부합 시 지급됩니다.",
    },
    {
      title: "리빌이 무엇인가요?",
      dec: "민팀 시에는 드러나지 않고, 일정 기간이 지난 후 NFT의 특성(레어리티 등)이 드러납니다.",
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
            <div className="desc">
              <p>
                Pellentesque eu ex iaculis, tempus ex eu, consectetur lectus.
                Aenean nec iaculis est, a mattis turpis. Morbi posuere lorem id
                risus luctus, luctus tristique enim luctus. Vivamus ut tincidunt
                erat.
              </p>
              <p>
                Nunc nec sollicitudin elit, ut pretium dui. Nulla facilisis
                pulvinar odio ac suscipit. Quisque pretium, est id facilisis
                luctus, magna lorem posuere velit.
              </p>
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
export default Faq;
