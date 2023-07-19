import Link from "next/link";
import Layout from "../src/layout/Layout";
import SectionDivider from "../src/components/SectionDivider";
import RoadMapSlider from "../src/components/RoadMapStep";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import contract_abi from "../src/abis/KTMF_PASS_NFT.json"

const NftSingle = () => {
  // State variables for quantity and total price
  const [quantity, setQuantity] = useState(0);
  const [cost, setCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // State variables for ethers provider and contract
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Update total price when quantity changes
  const handleQuantityChange = (value) => {
    setQuantity(value);
    // Calculate total price using the cost value from the smart contract
    const newTotalPrice = value * cost;
    setTotalPrice(newTotalPrice);
  };

  useEffect(() => {
    const initializeEthers = async () => {
      // Check if the window.ethereum object is available
      if (window.ethereum) {
        // Request access to the user's Ethereum account
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Create an ethers provider using the window.ethereum object
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(newProvider);
        console.log("setProvider Completed!", provider, newProvider);

        // Create an ethers contract instance using the contract address and ABI
        const contractAddress = "0x1E133e65F06Bb3625CBc9cCC8dD392d065c32f67"; // Replace with the actual contract address
        const contractAbi = contract_abi;
        const newContract = new ethers.Contract(
          contractAddress,
          contractAbi,
          newProvider.getSigner() // Use the signer to send transactions
        );
        setContract(newContract);
        console.log("setContract Completed!", contract, newContract);
        
        // Function to load the public_Price value from the contract
        try {
          // Call the public_Price function in the smart contract to get the value
          const publicPrice = await newContract.getPublicPrice();
          // Convert the BigNumber to a floating-point number (wei to ether)
          const publicPriceInEther = ethers.utils.formatEther(publicPrice);
          // Update the cost2 value with the loaded public_Price value
          setCost(parseFloat(publicPriceInEther));
        } catch (error) {
          console.error("Error loading public_Price:", error);
          alert("Error loading public_Price. Please check the console for details.");
        }
      } else {
        alert("Please install a Web3-enabled browser like MetaMask.");
      }
    };
    initializeEthers();
    handleQuantityChange(0);
  }, []);

  // Mint function to interact with the smart contract and mint NFTs
  const mintNFTs = async () => {
    if (!provider || !contract) {
      alert("Ethers provider or contract not initialized.");
      return;
    }

    try {
      // Call the publicMint function in the smart contract
      const transaction = await contract.publicMint(quantity, {
        gasLimit: 500000,
        value: ethers.utils.parseEther("0.0001") * quantity
      });

      // Wait for the transaction to be mined
      await transaction.wait();

      alert("NFTs minted successfully!");
    } catch (error) {
      console.error("Error minting NFTs:", error);
      alert("Error minting NFTs. Please check the console for details.");
    }
  };

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div className="img_in" data-bg-img="/img/about/KTMF_Pass_1x1.jpg">
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
                  미주 한국일보 KPOP COVER SONG CONTEST와 함께하는 아즈메타 생태계 특별 한정판 NFT: 
                  <b>KTMF PASS NFT COLLECTION</b>
                </p>
                <p>
                  &quot;한류 열풍을 주도하는 케이팝(K-POP), 세계를 넘어 메타버스로! 아즈메타와 K-POP이 만납니다, K-POP in Metaverse&quot;
                  아즈메타가 선보이는 온·오프라인 융합 하이브리드 콘테스트와 특별 한정판 NFT는 KPOP COVER SONG CONTEST에 새로운 전환점과 패러다임을 제시합니다.
                  이더리움(ETH) 블록체인상에서 창작된 유니크한 15,000장의 아즈메타 메타버스 생태계 NFT 컬렉션으로, 멤버십 서비스와 제너레이티브 아이템 NFT가 결합된 유틸리티 성격의 NFT입니다.
                  KTMF PASS NFT는 2009년 아시아의 별 보아가 미국 데뷔 동시에 빌보드 200에서 127위에 올라 한국인 최초로 빌보드 메인차트 입성한 순간부터 KTMF KPOP COVER SONG CONTEST의 스타 탄생까지 KPOP과 한류의 15년을 기록한 15K 프로젝트로, 이더리움(ETH) 블록체인상에서 창작된 유니크한 15,000장의 아즈메타 메타버스 생태계 NFT 컬렉션입니다.
                  KTMF PASS NFT는 멤버십 서비스와 제너레이티브 아이템 NFT가 결합된 유틸리티 성격의 NFT로, 각각의 NFT에는 아즈메타 KTMF 독점 커뮤니티에 입장할 수 있는 PASS 티켓과 아즈메타 메타버스 내 아바타가 착용할 수 있는 코스튬 파츠가 결합되어있습니다.
                  KTMF PASS NFT와 함께 아즈메타 얼리 엑세스가 시작됩니다. KTMF PASS NFT를 구매하여 커뮤니티에 가입하고 홀더들만의 다양한 특전과 놀라운 혜택을 누려보세요!
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
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Public Mint is Live</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price</h4>
                      <h3>
                        <span className="cost">{cost}</span> ETH
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Remaining</h4>
                      <h3>344/999(Not working)</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Quantity</h4>
                      <div className="qnt">
                        <span
                          className="decrease"
                          onClick={() => handleQuantityChange(quantity - 1)}
                        >
                          -
                        </span>
                        <span className="quantity">
                          {quantity}
                        </span>
                        <span
                          className="increase"
                          onClick={() => handleQuantityChange(quantity + 1)}
                        >
                          +
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Total Price</h4>
                      <h3>
                        <span className="total_price">{totalPrice}</span> ETH + GAS
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                <a
                  href="#"
                  className="metaportal_fn_button"
                  onClick={() => mintNFTs()}
                >
                  <span>Mint Now</span>
                </a>
                <p>
                  By clicking “MINT NOW” button, you agree to our{" "}
                  <a href="#">Terms of Service</a> and our{" "}
                  <a href="#">Privacy Policy</a>.
                </p>
              </div>
            </div>
            <div className="mint_right">
              <div className="mright">
                <div className="mint_time">
                  <h4>Public Mint Ends In</h4>
                  {/* 
									There is two types of countdown: due_date (Due Date), ever (Evergreen timer)
										1. 	data-type="due_date"
											In this case you have to change value of data-date. For example:
											data-date="October 13, 2022 12:30:00"
											It will mean that mint will finished at this time

										2. 	data-type="ever"
											In this case you have to change values of data-days, data-hours, data-minutes and data-seconds. For example:
											data-days="34"
											data-hours="10"
											data-minutes="20"
											data-seconds="0"
											It will mean that the time expires after this time, but when the page is refreshed, the value will return again. It means, it won't end.
								*/}
                  <h3
                    className="metaportal_fn_countdown"
                    data-type="due_date"
                    data-date="October 13, 2023 12:30:00"
                    data-days={34}
                    data-hours={10}
                    data-minutes={20}
                    data-seconds={0}
                  >
                    {data-days}d: {data-hours}h: {data-minutes}m: {data-seconds}s
                  </h3>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Whitelist:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                  <p>
                    <span className="text">Presale:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                </div>
                <div className="mint_info">
                  <p>
                    You need to pay a GAS fee during minting. We allow max 5
                    mints per wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* !Mint Box */}
          {/* NFT Categories */}
          <div className="metaportal_fn_nft_cats">
            <ul>
              <li>
                <div className="item">
                  <h4 className="parent_category">Clothing</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Special</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Type</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Mouth</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Not Working">
                    Not Working
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
                      <img src="/img/drops/1.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4588</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/2.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4587</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/3.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4586</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/4.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4585</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/5.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4584</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/6.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4583</a>
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
