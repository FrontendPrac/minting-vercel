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
import { useMetaMask } from "metamask-react";
import { toast } from "react-toastify";

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
  const { status, connect, account, chainId, ethereum, switchChain } =
    useMetaMask();

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
    if (status === "notConnected") {
      toast.dark("Connect to metamask", {
        position: toast.POSITION.TOP_CENTER,
      });
      connect();
      return;
    }

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
          {/* <div id="event_vd">
            <div class="bg"></div>
            <video src="/img/video/arzmeta.mp4" playsInline autoPlay loop muted />
          </div> */}
          <div id="event">
            <div class="event_wrap">
              <img class="leri_ef e-1" src="/img/event/event_img.png" alt="" />
              <img class="leri_ef e-2" src="/img/event/event_img.png" alt="" />
              <img class="leri_ef e-3" src="/img/event/event_img.png" alt="" />
              <img class="leri_ef e-4" src="/img/event/event_img.png" alt="" />

              <div class="event_text">
                <div class="e-dt">09.01.fri</div>
                <div class="e-tit">
                  KTMF PASS NFT
                  <br />
                  DRAW EVENT
                  <img class="light r-1" src="/img/event/light.png" alt="" />
                  <img class="light r-2" src="/img/event/light.png" alt="" />
                </div>
                <div class="en-tex">
                  Discover whats behind the lock.
                  <br />A whitelist spot awaits!
                </div>
                <div class="ko-tex">
                  숨어있는 화이트리스트를 찾아라!
                  <br />
                  자물쇠를 열고, 화이트리스트를 획득하세요
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
                    <strong>{isRaffle ? 0 : 1}/1</strong>
                  </div>
                </div>
              </div>

              <img class="leri_ef e-5" src="/img/event/event_img.png" alt="" />
              <img class="leri_ef e-6" src="/img/event/event_img.png" alt="" />
              <img class="leri_ef e-7" src="/img/event/event_img.png" alt="" />

              <div class="event_flex">
                <Cards onClickEnterAndSpin={onClickEnterAndSpin} />
              </div>

              {/* <!-- IMG EFFECT --> */}

              <div id="event">
                {/* <div class="event_wrap"> */}
                <img
                  class="leri_ef e-1"
                  src="/img/event/event_img.png"
                  alt=""
                />

                <img
                  class="leri_ef e-2"
                  src="/img/event/event_img.png"
                  alt=""
                />
                <img
                  class="leri_ef e-3"
                  src="/img/event/event_img.png"
                  alt=""
                />
                <img
                  class="leri_ef e-4"
                  src="/img/event/event_img.png"
                  alt=""
                />
                <img
                  class="leri_ef e-5"
                  src="/img/event/event_img.png"
                  alt=""
                />
                <img
                  class="leri_ef e-6"
                  src="/img/event/event_img.png"
                  alt=""
                />
                <img
                  class="leri_ef e-7"
                  src="/img/event/event_img.png"
                  alt=""
                />
                {/* </div> */}
              </div>

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
