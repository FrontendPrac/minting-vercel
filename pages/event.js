import React, { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { ethers } from "ethers";
import {
  contractABI,
  contractAddress,
  raffleContactABI,
  raffleContractAddress,
  stakingContractABI,
  stakingContractAddress,
} from "../src/components/utils/constants";
import Portal from "../src/components/modal/portal/Portal";
import Alert from "../src/components/modal/alert/Alert";
import useModal from "../src/hooks/useModal";
import useLoading from "../src/hooks/useLoading";
import Loading from "../src/components/loading/Loading";
import PageWrapper from "../src/components/PageWrapper";
import { useAlert } from "react-alert";
import Cards from "../src/components/Cards";
import { motion } from "framer-motion";
import {
  variantsOpacity,
  variantsSideLeft,
  variantsSideRight,
} from "../src/variants";

const EventPage = () => {
  const alert = useAlert();

  // State variables for ethers provider and contract
  const [provider, setProvider] = useState("");
  const [contract, setContract] = useState("");

  // State variables for user status
  const [signerAddress, setSignerAddress] = useState("");
  const [isRaffle, setIsRaffle] = useState("");
  const [prize, setPrize] = useState("");
  const [isCompetitiveWhiteList, setIsCompetitiveWhiteList] = useState(false);
  const [isGuaranteeWhiteList, setIsGuaranteeWhiteList] = useState(false);

  // Custom Hook
  const { isOpen, open, close } = useModal();
  const { isLoading, setIsLoading } = useLoading();

  // Get Raffle Data
  const initializeEthers = async () => {
    // Request access to the user's Ethereum account
    // await window.ethereum.request({ method: "eth_requestAccounts" });
    if (
      typeof window.ethereum !== "undefined" &&
      window.ethereum.selectedAddress
    ) {
      // Create an ethers provider using the window.ethereum object
      const newProvider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("newProvider: ", newProvider);
      setProvider(newProvider);

      // Wallet Address
      const accounts = await newProvider.listAccounts();
      console.log("accounts[0]: ", accounts[0]);
      setSignerAddress(accounts[0]);

      console.log("raffleContractAddress: ", raffleContractAddress);
      console.log("raffleContactABI: ", raffleContactABI);

      // Create an ethers contract instance using the contract address and ABI
      const newRaffleContract = new ethers.Contract(
        raffleContractAddress,
        raffleContactABI,
        newProvider.getSigner()
      );
      console.log("Depoly Test");
      console.log("newRaffleContract: ", newRaffleContract);
      setContract(newRaffleContract);

      try {
        const response = await newRaffleContract.getEntranceState(accounts[0]);
        console.log("EntranceState: ", response);
        setIsRaffle(response);

        const response_2 = await newRaffleContract.getPrize(accounts[0]);
        console.log("Prize: ", response_2);
        const _prize = parseInt(response_2);
        console.log("_prize: ", _prize);
        setPrize(_prize);

        // Create an ethers contract instance using the contract address and ABI
        const newContract = new ethers.Contract(
          contractAddress,
          contractABI,
          newProvider.getSigner()
        );

        const response_3 = await newContract.getOnCompetitiveWhitelist(
          accounts[0]
        );
        const response_4 = await newContract.getOnGuaranteedWhitelist(
          accounts[0]
        );

        setIsCompetitiveWhiteList(response_3);
        setIsGuaranteeWhiteList(response_4);
      } catch (error) {
        console.log("error: ", error);
      }
    }
  };

  // Join Raffle
  const onClickEnterAndSpin = async (event) => {
    event.preventDefault();

    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider.getSigner()
    );

    const isApprovedForAll = await contract.isApprovedForAll(
      signerAddress,
      raffleContractAddress
    );

    console.log("isApprovedForAll: ", isApprovedForAll);
    if (!isApprovedForAll) {
      await contract.setApprovalForAll(raffleContractAddress, true);
      console.log("isApprovedForAll: ", isApprovedForAll);
    }

    const raffleContract = new ethers.Contract(
      raffleContractAddress,
      raffleContactABI,
      provider.getSigner()
    );

    try {
      // 래플 시작하기
      const transaction = await raffleContract.enterRaffle({
        gasLimit: 500000,
        value: ethers.utils.parseEther((0.01).toString()),
      });

      setIsLoading(true);
      await transaction.wait();
      console.log("화이트리스트 부여 성공");

      setIsLoading(false);
      open();
    } catch (error) {
      if (error.code === "ACTION_REJECTED") {
        console.log("error: ", error);
      } else {
        console.log("error: ", error);
        setIsLoading(false);
        alert.error(
          `트랜잭션에 실패했습니다.\n 참여 가능 횟수를 초과했거나, \n 화이트리스트를 보유하고 있습니다.`
        );
      }
    }
  };

  // Test stake
  const onClickStake = async () => {
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider.getSigner()
    );

    const isApprovedForAll = await contract.isApprovedForAll(
      signerAddress,
      stakingContractAddress
    );

    console.log("isApprovedForAll: ", isApprovedForAll);
    if (!isApprovedForAll) {
      await contract.setApprovalForAll(stakingContractAddress, true);
      console.log("isApprovedForAll: ", isApprovedForAll);
    }

    const stakeContract = new ethers.Contract(
      stakingContractAddress,
      stakingContractABI,
      provider.getSigner()
    );

    try {
      const response = await stakeContract.stake(2, {
        gasLimit: 500000,
      });

      console.log("response: ", response);
    } catch (error) {
      console.log("error:", error);
    }
  };

  // Scroll
  const [scroll_01, setScroll_01] = useState("10rem");

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScroll_01(currentPosition);
  };

  useEffect(() => {
    initializeEthers();

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageWrapper>
      {isLoading ? (
        <Loading isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <Layout pageTitle={"Event"}>
          <div id="event">
            <div class="event_wrap">
              <div class="event_text">
                <div class="e-dt">08.08.mon - 09.01.fri</div>
                <div class="e-tit">
                  KTMF PASS NFT
                  <br />
                  DRAW EVENT
                  <img class="light r-1" src="/img/event/light.png" alt="" />
                  <img class="light r-2" src="/img/event/light.png" alt="" />
                </div>
                <div class="en-tex">
                  Draw events that anyone can participate in once-a
                  <br />
                  choose the key you want and check out the benefits you won!
                </div>
                <div class="ko-tex">
                  이벤트 기간 동안 하루에 - 한 번씩 누구나 참여할 수 있는 드로우
                  이벤트
                  <br />
                  원하는 자물쇠를 선택해서 당첨된 혜택을 확인해 보세요!
                </div>
                <div class="e-fn">
                  <div class="ch_bar">
                    <span>현재 획득한 혜택</span>
                    <p>
                      {!isCompetitiveWhiteList &&
                        !isGuaranteeWhiteList &&
                        "아직 받은 혜택이 없어요. 이벤트에 참여해보세요! "}
                      {isCompetitiveWhiteList &&
                        !isGuaranteeWhiteList &&
                        "경쟁 화이트리스트"}
                      {!isCompetitiveWhiteList &&
                        isGuaranteeWhiteList &&
                        "확정 화이트리스트"}
                      {isCompetitiveWhiteList &&
                        isGuaranteeWhiteList &&
                        "확정 화이트리스트 & 경쟁 화이트리스트"}
                    </p>
                  </div>
                  <div class="e-count">
                    <span>참여 가능 횟수</span>
                    <strong>{isRaffle ? 1 : 0}/1</strong>
                  </div>
                </div>
              </div>

              <div class="event_flex">
                {/* <div class="ev_item">
                  <ul>
                    <li class="card">
                      <a class="card" href="" onClick={onClickEnterAndSpin}>
                        <div class="key">
                          <span>click</span>
                          <svg
                            id="b"
                            data-name="레이어 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 71.7 70.9"
                          >
                            <defs>
                              <style>
                                {` .d {
                      fill: #fff;
                    }
                    .d,
                    .e {
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                    .e {
                      fill: #ffce00;
                    }`}
                              </style>
                            </defs>
                            <g id="c" data-name="레이어 1">
                              <g>
                                <rect
                                  class="e"
                                  x=".5"
                                  y="18.8"
                                  width="70.7"
                                  height="51.7"
                                  rx="6.2"
                                  ry="6.2"
                                />
                                <path d="m41.2,43c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4.9,3.3,2.2,4.3l-2.2,14.4h10.7l-2.2-14.3c1.3-1,2.2-2.5,2.2-4.3Z" />
                                <path
                                  class="d"
                                  d="m6,18.8h59.7c3,0,5.5,2.5,5.5,5.5v4.5H.5v-4.5c0-3,2.5-5.5,5.5-5.5Z"
                                />
                                <path
                                  class="d"
                                  d="m13.3,24c.4.5,1,.6,1.9.8.5.1,1,.1,1.3.1,0,0,0,0,0,0,0,0,1.8,0,3.3-.5.2,0,.4-.2.4-.2s0,0,0,0c.1,0,.3-.2.5-.4,0,0,0,0,0-.1,0-.2,0-.4,0-.4,0-.2,0-4.3,3.3-8.7.8-1,1.6-2.1,3-3.2,3.7-2.9,8-2.9,9.3-2.8,5.6.2,9.2,3.6,10,4.4,4.3,4.3,4.4,9.6,4.4,10.7,0,0,0,.1,0,.2.2.4.6.5.7.5,1,.3,2.6.8,4.6.4.6-.1,1.2-.3,1.6-.4.1,0,.3-.1.5-.3,0,0,.1-.1.2-.2,0,0,0,0,0-.1,0-.2,0-.3,0-.4,0-1.7-.2-4-1-6.7-1.1-3.6-3-6.1-4.2-7.6-1.2-1.5-5.7-6.6-13.3-8.1-5.5-1.1-10,.3-12,1-1.9.7-7.2,3-11.1,8.8-3.4,5.1-3.8,10.1-3.9,12.2,0,.6.1,1,.2,1.1Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li class="card">
                      <a href="" onClick={onClickEnterAndSpin}>
                        <div class="key">
                          <span>click</span>
                          <svg
                            id="b"
                            data-name="레이어 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 71.7 70.9"
                          >
                            <defs>
                              {` .d {
                      fill: #fff;
                    }
                    .d,
                    .e {
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                    .e {
                      fill: #ffce00;
                    }`}
                            </defs>
                            <g id="c" data-name="레이어 1">
                              <g>
                                <rect
                                  class="e"
                                  x=".5"
                                  y="18.8"
                                  width="70.7"
                                  height="51.7"
                                  rx="6.2"
                                  ry="6.2"
                                />
                                <path d="m41.2,43c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4.9,3.3,2.2,4.3l-2.2,14.4h10.7l-2.2-14.3c1.3-1,2.2-2.5,2.2-4.3Z" />
                                <path
                                  class="d"
                                  d="m6,18.8h59.7c3,0,5.5,2.5,5.5,5.5v4.5H.5v-4.5c0-3,2.5-5.5,5.5-5.5Z"
                                />
                                <path
                                  class="d"
                                  d="m13.3,24c.4.5,1,.6,1.9.8.5.1,1,.1,1.3.1,0,0,0,0,0,0,0,0,1.8,0,3.3-.5.2,0,.4-.2.4-.2s0,0,0,0c.1,0,.3-.2.5-.4,0,0,0,0,0-.1,0-.2,0-.4,0-.4,0-.2,0-4.3,3.3-8.7.8-1,1.6-2.1,3-3.2,3.7-2.9,8-2.9,9.3-2.8,5.6.2,9.2,3.6,10,4.4,4.3,4.3,4.4,9.6,4.4,10.7,0,0,0,.1,0,.2.2.4.6.5.7.5,1,.3,2.6.8,4.6.4.6-.1,1.2-.3,1.6-.4.1,0,.3-.1.5-.3,0,0,.1-.1.2-.2,0,0,0,0,0-.1,0-.2,0-.3,0-.4,0-1.7-.2-4-1-6.7-1.1-3.6-3-6.1-4.2-7.6-1.2-1.5-5.7-6.6-13.3-8.1-5.5-1.1-10,.3-12,1-1.9.7-7.2,3-11.1,8.8-3.4,5.1-3.8,10.1-3.9,12.2,0,.6.1,1,.2,1.1Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li class="card">
                      <a href="" onClick={onClickEnterAndSpin}>
                        <div class="key">
                          <span>click</span>
                          <svg
                            id="b"
                            data-name="레이어 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 71.7 70.9"
                          >
                            <defs>
                              {` .d {
                      fill: #fff;
                    }
                    .d,
                    .e {
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                    .e {
                      fill: #ffce00;
                    }`}
                            </defs>
                            <g id="c" data-name="레이어 1">
                              <g>
                                <rect
                                  class="e"
                                  x=".5"
                                  y="18.8"
                                  width="70.7"
                                  height="51.7"
                                  rx="6.2"
                                  ry="6.2"
                                />
                                <path d="m41.2,43c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4.9,3.3,2.2,4.3l-2.2,14.4h10.7l-2.2-14.3c1.3-1,2.2-2.5,2.2-4.3Z" />
                                <path
                                  class="d"
                                  d="m6,18.8h59.7c3,0,5.5,2.5,5.5,5.5v4.5H.5v-4.5c0-3,2.5-5.5,5.5-5.5Z"
                                />
                                <path
                                  class="d"
                                  d="m13.3,24c.4.5,1,.6,1.9.8.5.1,1,.1,1.3.1,0,0,0,0,0,0,0,0,1.8,0,3.3-.5.2,0,.4-.2.4-.2s0,0,0,0c.1,0,.3-.2.5-.4,0,0,0,0,0-.1,0-.2,0-.4,0-.4,0-.2,0-4.3,3.3-8.7.8-1,1.6-2.1,3-3.2,3.7-2.9,8-2.9,9.3-2.8,5.6.2,9.2,3.6,10,4.4,4.3,4.3,4.4,9.6,4.4,10.7,0,0,0,.1,0,.2.2.4.6.5.7.5,1,.3,2.6.8,4.6.4.6-.1,1.2-.3,1.6-.4.1,0,.3-.1.5-.3,0,0,.1-.1.2-.2,0,0,0,0,0-.1,0-.2,0-.3,0-.4,0-1.7-.2-4-1-6.7-1.1-3.6-3-6.1-4.2-7.6-1.2-1.5-5.7-6.6-13.3-8.1-5.5-1.1-10,.3-12,1-1.9.7-7.2,3-11.1,8.8-3.4,5.1-3.8,10.1-3.9,12.2,0,.6.1,1,.2,1.1Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li class="card">
                      <a href="" onClick={onClickEnterAndSpin}>
                        <div class="key">
                          <span>click</span>
                          <svg
                            id="b"
                            data-name="레이어 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 71.7 70.9"
                          >
                            <defs>
                              {` .d {
                      fill: #fff;
                    }
                    .d,
                    .e {
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                    .e {
                      fill: #ffce00;
                    }`}
                            </defs>
                            <g id="c" data-name="레이어 1">
                              <g>
                                <rect
                                  class="e"
                                  x=".5"
                                  y="18.8"
                                  width="70.7"
                                  height="51.7"
                                  rx="6.2"
                                  ry="6.2"
                                />
                                <path d="m41.2,43c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4.9,3.3,2.2,4.3l-2.2,14.4h10.7l-2.2-14.3c1.3-1,2.2-2.5,2.2-4.3Z" />
                                <path
                                  class="d"
                                  d="m6,18.8h59.7c3,0,5.5,2.5,5.5,5.5v4.5H.5v-4.5c0-3,2.5-5.5,5.5-5.5Z"
                                />
                                <path
                                  class="d"
                                  d="m13.3,24c.4.5,1,.6,1.9.8.5.1,1,.1,1.3.1,0,0,0,0,0,0,0,0,1.8,0,3.3-.5.2,0,.4-.2.4-.2s0,0,0,0c.1,0,.3-.2.5-.4,0,0,0,0,0-.1,0-.2,0-.4,0-.4,0-.2,0-4.3,3.3-8.7.8-1,1.6-2.1,3-3.2,3.7-2.9,8-2.9,9.3-2.8,5.6.2,9.2,3.6,10,4.4,4.3,4.3,4.4,9.6,4.4,10.7,0,0,0,.1,0,.2.2.4.6.5.7.5,1,.3,2.6.8,4.6.4.6-.1,1.2-.3,1.6-.4.1,0,.3-.1.5-.3,0,0,.1-.1.2-.2,0,0,0,0,0-.1,0-.2,0-.3,0-.4,0-1.7-.2-4-1-6.7-1.1-3.6-3-6.1-4.2-7.6-1.2-1.5-5.7-6.6-13.3-8.1-5.5-1.1-10,.3-12,1-1.9.7-7.2,3-11.1,8.8-3.4,5.1-3.8,10.1-3.9,12.2,0,.6.1,1,.2,1.1Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li class="card">
                      <a href="" onClick={onClickEnterAndSpin}>
                        <div class="key">
                          <span>click</span>
                          <svg
                            id="b"
                            data-name="레이어 2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 71.7 70.9"
                          >
                            <defs>
                              {` .d {
                      fill: #fff;
                    }
                    .d,
                    .e {
                      stroke: #000;
                      stroke-miterlimit: 10;
                    }
                    .e {
                      fill: #ffce00;
                    }`}
                            </defs>
                            <g id="c" data-name="레이어 1">
                              <g>
                                <rect
                                  class="e"
                                  x=".5"
                                  y="18.8"
                                  width="70.7"
                                  height="51.7"
                                  rx="6.2"
                                  ry="6.2"
                                />
                                <path d="m41.2,43c0-3-2.4-5.4-5.4-5.4s-5.4,2.4-5.4,5.4.9,3.3,2.2,4.3l-2.2,14.4h10.7l-2.2-14.3c1.3-1,2.2-2.5,2.2-4.3Z" />
                                <path
                                  class="d"
                                  d="m6,18.8h59.7c3,0,5.5,2.5,5.5,5.5v4.5H.5v-4.5c0-3,2.5-5.5,5.5-5.5Z"
                                />
                                <path
                                  class="d"
                                  d="m13.3,24c.4.5,1,.6,1.9.8.5.1,1,.1,1.3.1,0,0,0,0,0,0,0,0,1.8,0,3.3-.5.2,0,.4-.2.4-.2s0,0,0,0c.1,0,.3-.2.5-.4,0,0,0,0,0-.1,0-.2,0-.4,0-.4,0-.2,0-4.3,3.3-8.7.8-1,1.6-2.1,3-3.2,3.7-2.9,8-2.9,9.3-2.8,5.6.2,9.2,3.6,10,4.4,4.3,4.3,4.4,9.6,4.4,10.7,0,0,0,.1,0,.2.2.4.6.5.7.5,1,.3,2.6.8,4.6.4.6-.1,1.2-.3,1.6-.4.1,0,.3-.1.5-.3,0,0,.1-.1.2-.2,0,0,0,0,0-.1,0-.2,0-.3,0-.4,0-1.7-.2-4-1-6.7-1.1-3.6-3-6.1-4.2-7.6-1.2-1.5-5.7-6.6-13.3-8.1-5.5-1.1-10,.3-12,1-1.9.7-7.2,3-11.1,8.8-3.4,5.1-3.8,10.1-3.9,12.2,0,.6.1,1,.2,1.1Z"
                                />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <Cards onClickEnterAndSpin={onClickEnterAndSpin} />
              </div>

              {/* <!-- IMG EFFECT --> */}

              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-1"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-2"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-3"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-4"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>

              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-5"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-6"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>
              <motion.div
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsOpacity}
                custom={0.5}
              >
                <img
                  class="leri_ef e-7"
                  src="/img/event/event_img.png"
                  alt=""
                />
              </motion.div>

              {isOpen && (
                <Portal>
                  <Alert
                    contract={contract}
                    signerAddress={signerAddress}
                    close={close}
                  />
                </Portal>
              )}
            </div>
          </div>
        </Layout>
      )}
    </PageWrapper>
  );
};

export default EventPage;
