import Link from "next/link";
import { motion } from "framer-motion";
import {
  imgScale,
  variantsCenter,
  variantsDown,
  variantsFade,
  variantsOpacity,
  variantsSideLeft,
  variantsSideRight,
  variantsUp,
} from "../variants";

const About = () => {
  return (
    <section id="about">
      {/* !About Shortcode */}
      <div className="container">
        {/* Mint Shortcode */}
        <div className="fn_cs_mint">
          <div className="left_part">
            <h3 className="fn__maintitle" data-text="NFT란?">
              NFT란?
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
                NFT(Non-Fungible Token)는 블록체인 기술을 이용하여 디지털 자산을
                표현한 것입니다. 각 NFT는 고유한 정보를 가지고 있어 서로 구분
                가능하며, 이러한 특성 덕분에 디지털 아트, 뮤직, 동영상, 게임
                아이템 등 다양한 자산을 표현하고 거래할 수 있습니다.
              </p>
              <div className="fn_cs_divider">
                <div className="divider">
                  <span />
                  <span />
                </div>
              </div>
              <p>
                1. 웹사이트 연결
                <br />
                우측 상단에 [Connect Wallet] 버튼을 클릭하여 지갑을 연결하세요.
              </p>
              <p>
                2. 연결 수락
                <br />
                지갑 앱을 열어 연결 요청을 확인하고, 연결을 수락하세요.
              </p>
              <p>
                3. 민팅할 NFT 선택
                <br />
                웹사이트에서 원하는 NFT를 찾아 선택하세요.
              </p>
              <p>
                4. 수량 설정
                <br />
                민팅하고자 하는 NFT의 수량을 설정하세요. 일부 NFT는 한번에 여러
                개를 민팅하는 것이 가능하므로 원하는 수량을 지정해 주세요.
              </p>
              <p>
                5. 트랜잭션 확인
                <br />
                지갑 앱에서 트랜잭션의 세부 정보와 Gas Fee를 확인한 후,
                트랜잭션을 승인하세요. Gas Fee는 블록체인의 혼잡도에 따라 달라질
                수 있으니 주의깊게 확인하세요.
              </p>
              <p>
                6. 트랜잭션 대기
                <br />
                트랜잭션이 블록체인에 기록되기를 기다립니다. 혼잡도에 따라
                시간이 걸릴 수 있습니다.
              </p>
              <p>
                7. 지갑 확인
                <br />
                트랜잭션이 완료되면 연결된 지갑에서 민팅된 NFT를 확인할 수
                있습니다.
              </p>
              <p>
                8
                <br />
                마켓플레이스 및 웹사이트에서의 보기: NFT는 OpenSea를 통해 직접
                확인할 수 있습니다.
              </p>
            </div>
            <Link href="/ktmf-pass">
              <a className="metaportal_fn_button">
                <span>Mint</span>
              </a>
            </Link>
          </div>
          <div className="right_part">
            {/* Steps Shortcode */}
            <div className="fn_cs_steps">
              <ul>
                <li>
                  <motion.div
                    className="item"
                    whileInView="onscreen"
                    initial="offscreen"
                    variants={imgScale}
                    custom={1}
                  >
                    <div className="item_in">
                      <h3 className="fn__gradient_title">01</h3>
                      <p style={{ textAlign: "center", fontSize: "40px" }}>
                        지갑 연결
                      </p>
                    </div>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    className="item"
                    whileInView="onscreen"
                    initial="offscreen"
                    variants={variantsDown}
                    custom={1}
                  >
                    <div className="item_in">
                      <h3 className="fn__gradient_title">02</h3>
                      <p style={{ textAlign: "center", fontSize: "40px" }}>
                        수량 선택
                      </p>
                    </div>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    className="item"
                    whileInView="onscreen"
                    initial="offscreen"
                    variants={variantsSideLeft}
                    custom={1}
                  >
                    <div className="item_in">
                      <h3 className="fn__gradient_title">03</h3>
                      <p style={{ textAlign: "center", fontSize: "40px" }}>
                        민팅 완료
                      </p>
                    </div>
                  </motion.div>
                </li>
                <li>
                  <motion.div
                    className="item"
                    whileInView="onscreen"
                    initial="offscreen"
                    variants={variantsSideRight}
                    custom={1}
                  >
                    <div className="item_in">
                      <h3 className="fn__gradient_title">04</h3>
                      <p style={{ textAlign: "center", fontSize: "40px" }}>
                        NFT 수령
                      </p>
                    </div>
                  </motion.div>
                </li>
              </ul>
            </div>
            {/* !Steps Shortcode */}
            {/* Video Shortcode */}
            {/* <div className="fn_cs_video">
              <img src="/img/ktmf.jpg" alt="" />
              <a
                className="popup-youtube"
                href="https://www.youtube.com/watch?v=X3-wCHPQ7uU"
              >
                <img src="/svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div> */}
            {/* /Video Shortcode */}
          </div>
        </div>
        {/* !Mint Shortcode */}
      </div>
    </section>
  );
};
export default About;

export const About2 = () => (
  <section id="about2">
    <div className="container small">
      <div className="fn_cs_shortabout">
        <div className="about_left">
          <h3 className="fn__maintitle" data-text="The Rise of Legends">
            The Rise of Legends
          </h3>
          <div className="fn_cs_divider">
            <div className="divider">
              <span />
              <span />
            </div>
          </div>
          <div className="desc">
            <p>
              As the first hero of the Meta Legends, collection has over 9,999
              unique skins drawn from the different missions and challenges he
              faced throughout his life.
            </p>
            <p>
              The artwork has been hand-drawned by Robert Green in the
              traditional anime style and composited by Layla Efiyo.
            </p>
          </div>
          <a
            href="https://discord.com/"
            className="metaportal_fn_button"
            target="_blank"
            rel="noreferrer"
          >
            <span>Find us On Discord</span>
          </a>
        </div>
        <div className="about_right">
          <div className="abs_img" data-bg-img="/img/about/2.jpg" />
        </div>
      </div>
      <div className="fn_cs_collection_info">
        <h3 className="fn__gradient_title">10,000</h3>
        <h3
          className="fn__maintitle upper"
          data-text="Total Items in Collection"
        >
          Total Items in Collection
        </h3>
        <p>
          There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which {`don't`} look even slightly
          believable.
        </p>
      </div>
    </div>
    <div className="fn_cs_video bg">
      <div className="abs_img" data-bg-img="/img/video/1.jpg" />
      <a
        className="popup-youtube"
        href="https://www.youtube.com/embed/7e90gBu4pas"
      >
        <img src="/svg/play.svg" alt="" className="fn__svg" />
      </a>
    </div>
    <div className="container">
      {/* Steps Shortcode */}
      <div className="fn_cs_steps gap" data-cols={4} data-gap={60}>
        <ul>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">01</h3>
                <p>Connect your Wallet</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">02</h3>
                <p>Select Your Quantity</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">03</h3>
                <p>Confirm The Transaction</p>
              </div>
            </div>
          </li>
          <li>
            <div className="item">
              <div className="item_in">
                <h3 className="fn__gradient_title">04</h3>
                <p>Receive Your {`NFT’s`}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* !Steps Shortcode */}
      <div className="fn_cs_join">
        <div className="join_in">
          <h3 className="fn__maintitle upper" data-text="Join Our Community">
            Join Our Community
          </h3>
          <p>
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which {`don't`} look even slightly
            believable.
          </p>
          <div className="buttons">
            <a
              href="https://opensea.io/"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>Buy On Opensea</span>
            </a>
            <a
              href="#"
              className="metaportal_fn_button"
              target="_blank"
              rel="noreferrer"
            >
              <span>WhiteList Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
