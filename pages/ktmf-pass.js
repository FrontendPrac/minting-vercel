import Link from "next/link";
import Layout from "../src/layout/Layout";
import SectionDivider from "../src/components/SectionDivider";
import RoadMapSlider from "../src/components/RoadMapStep";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import {
  contractABI,
  contractAddress,
} from "../src/components/utils/constants";
import PublicMintBox from "../src/components/ktmf-pass/PublicMintBox";
import GuaranteedMintBox from "../src/components/ktmf-pass/GuaranteedMintBox";
import CompetitiveMintBox from "../src/components/ktmf-pass/CompetitiveMintBox";
import KSTTimeout from "../src/components/coming-soon/KSTTimeout";

const NftSingle = () => {
  // State variables for ethers provider and contract
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // State variables for user status
  const [publicActive, setPublicActive] = useState(false);
  const [guaranteeActive, setGuaranteeActive] = useState(false);
  const [competitiveActive, setCompetitiveActive] = useState(false);

  // Get Kor remaining time
  const [korDiffTime, setKorDiffTime] = useState();
  const [korDays, setKorDays] = useState();
  const [korHours, setKorHours] = useState();
  const [korMinutes, setKorMinutes] = useState();
  const [korSeconds, setKorSeconds] = useState();

  const initializeEthers = async () => {
    // Request access to the user's Ethereum account
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Create an ethers provider using the window.ethereum object
    const newProvider = await new ethers.providers.Web3Provider(
      window.ethereum
    );
    console.log("newProvider: ", newProvider);
    setProvider(newProvider);

    // Create an ethers contract instance using the contract address and ABI
    const contractAbi = contractABI;

    const newContract = await new ethers.Contract(
      contractAddress,
      contractAbi,
      newProvider.getSigner() // Use the signer to send transactions
    );
    console.log("newContract: ", newContract);
    setContract(newContract);

    // Function to load the public_Price value from the contract
    try {
      // Call the public_Price function in the smart contract to get the value
      const publicActive = await newContract.getPublicActive();
      console.log("publicActive: ", parseInt(publicActive));
      setPublicActive(parseInt(publicActive));

      const guaranteeActive = await newContract.getGuaranteedWhitelistActive();
      console.log("guaranteeActive: ", parseInt(guaranteeActive));
      setGuaranteeActive(parseInt(guaranteeActive));

      const competitiveActive =
        await newContract.getCompetitiveWhitelistActive();
      console.log("competitiveActive: ", parseInt(competitiveActive));
      setCompetitiveActive(parseInt(competitiveActive));
    } catch (error) {
      console.error("Error loading:", error);
    }
  };

  const showKorCountdown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();

      const korTargetTime = new Date("2023/09/06 00:00:00"); // KST 입력

      const korDiffTime = korTargetTime - korCurrentTime;

      if (korDiffTime <= 0) {
        setKorDiffTime(0);
        clearInterval(intervalId);
        console.log("한국 타이머 종료");
      } else {
        const days = Math.floor(korDiffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (korDiffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (korDiffTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((korDiffTime % (1000 * 60)) / 1000);

        setKorDays(days);
        setKorHours(hours);
        setKorMinutes(minutes);
        setKorSeconds(seconds);
        setKorDiffTime(korDiffTime);
      }
    }, 1000);
  };

  useEffect(() => {
    // Check if the window.ethereum object is available
    if (window.ethereum) {
      // Check if the connect to metamask
      if (window.ethereum.selectedAddress) {
        initializeEthers();
      } else {
        alert("메타마스크를 연결해주세요.");
      }
    }
    showKorCountdown();
  }, []);

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Count Down */}
          <KSTTimeout
            korDays={korDays}
            korHours={korHours}
            korMinutes={korMinutes}
            korSeconds={korSeconds}
            marginTop={180}
          />
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top" style={{ paddingTop: 0 }}>
            <div className="mint_left">
              <div className="img">
                <div
                  className="img_in"
                  data-bg-img="/img/about/KTMF_Pass_1x1.jpg"
                >
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/facebook-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/instagram-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/pinterest-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/behance-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/collection">
                    <a>Collection</a>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">KTMF PASS NFT</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text="KTMF PASS NFT"
                data-align="left"
              >
                KTMF PASS NFT
              </h3>
              <div className="desc">
                <p>
                  미주 한국일보 KPOP COVER SONG CONTEST와 함께하는 아즈메타
                  생태계 특별 한정판 NFT:
                  <b>KTMF PASS NFT COLLECTION</b>
                </p>
                <p>
                  &quot;한류 열풍을 주도하는 케이팝(K-POP), 세계를 넘어
                  메타버스로! 아즈메타와 K-POP이 만납니다, K-POP in
                  Metaverse&quot; 아즈메타가 선보이는 온·오프라인 융합
                  하이브리드 콘테스트와 특별 한정판 NFT는 KPOP COVER SONG
                  CONTEST에 새로운 전환점과 패러다임을 제시합니다. 이더리움(ETH)
                  블록체인상에서 창작된 유니크한 15,000장의 아즈메타 메타버스
                  생태계 NFT 컬렉션으로, 멤버십 서비스와 제너레이티브 아이템
                  NFT가 결합된 유틸리티 성격의 NFT입니다. KTMF PASS NFT는 2009년
                  아시아의 별 보아가 미국 데뷔 동시에 빌보드 200에서 127위에
                  올라 한국인 최초로 빌보드 메인차트 입성한 순간부터 KTMF KPOP
                  COVER SONG CONTEST의 스타 탄생까지 KPOP과 한류의 15년을 기록한
                  15K 프로젝트로, 이더리움(ETH) 블록체인상에서 창작된 유니크한
                  15,000장의 아즈메타 메타버스 생태계 NFT 컬렉션입니다. KTMF
                  PASS NFT는 멤버십 서비스와 제너레이티브 아이템 NFT가 결합된
                  유틸리티 성격의 NFT로, 각각의 NFT에는 아즈메타 KTMF 독점
                  커뮤니티에 입장할 수 있는 PASS 티켓과 아즈메타 메타버스 내
                  아바타가 착용할 수 있는 코스튬 파츠가 결합되어있습니다. KTMF
                  PASS NFT와 함께 아즈메타 얼리 엑세스가 시작됩니다. KTMF PASS
                  NFT를 구매하여 커뮤니티에 가입하고 홀더들만의 다양한 특전과
                  놀라운 혜택을 누려보세요!
                </p>
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/portal.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          {publicActive === 1 && (
            <PublicMintBox
              provider={provider}
              contract={contract}
              publicActive={publicActive}
            />
          )}
          {guaranteeActive === 1 && (
            <GuaranteedMintBox
              provider={provider}
              contract={contract}
              guaranteeActive={guaranteeActive}
            />
          )}
          {competitiveActive === 1 && (
            <CompetitiveMintBox
              provider={provider}
              contract={contract}
              competitiveActive={competitiveActive}
            />
          )}
          {/* !Mint Box */}
          {/* NFT Categories */}
          <div className="metaportal_fn_nft_cats">
            <ul>
              <li>
                <div className="item">
                  <h4 className="parent_category">헤어</h4>
                  <h3 className="child_category" title="Not Working">
                    빨강
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">상의</h4>
                  <h3 className="child_category" title="Not Working">
                    빨강
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">하의</h4>
                  <h3 className="child_category" title="Not Working">
                    빨강
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">신발</h4>
                  <h3 className="child_category" title="Not Working">
                    빨강
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">모자</h4>
                  <h3 className="child_category" title="Not Working">
                    빨강
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">배경</h4>
                  <h3 className="child_category" title="Not Working">
                    빨강
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">액세서리</h4>
                  <h3 className="child_category" title="Not Working">
                    마이크
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">피부색</h4>
                  <h3 className="child_category" title="Not Working">
                    흰색
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          {/* !NFT Categories */}
          {/* Section Divider */}
          <SectionDivider />
          {/* !Section Divider */}
          {/* Section RoadMap */}
          <RoadMapSlider />
          {/* !Section RoadMap */}
          {/* Section Divider */}
          <SectionDivider />
          {/* !Section Divider */}
          {/* Similar Items */}
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Similar Items">
              Similar Items
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/event/nft_ticket.png" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">KTMF #4588</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/event/nft_ticket.png" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">KTMF #4587</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/event/nft_ticket.png" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">KTMF #4586</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/event/nft_ticket.png" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">KTMF #4585</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/event/nft_ticket.png" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">KTMF #4584</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/event/nft_ticket.png" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">KTMF #4583</a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};
export default NftSingle;
