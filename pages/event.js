import React, { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { ethers } from "ethers";
import {
  contractABI,
  contractAddress,
  raffleContactABI,
  raffleContractAddress,
} from "../src/components/utils/constants";
import Portal from "../src/components/modal/portal/Portal";
import Alert from "../src/components/modal/alert/Alert";
import useModal from "../src/hooks/useModal";

const EventPage = () => {
  // State variables for ethers provider and contract
  const [provider, setProvider] = useState("");
  const [contract, setContract] = useState("");

  // State variables for user status
  const [signerAddress, setSignerAddress] = useState("");
  const [isRaffle, setIsRaffle] = useState("");
  const [prize, setPrize] = useState("");
  const [isCompetitiveWhiteList, setIsCompetitiveWhiteList] = useState(false);
  const [isGuaranteeWhiteList, setIsGuaranteeWhiteList] = useState(false);

  // Custom Hook to Modal
  const { isOpen, open, close } = useModal();

  // Get Raffle Data
  const initializeEthers = async () => {
    // Request access to the user's Ethereum account
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Create an ethers provider using the window.ethereum object
    const newProvider = await new ethers.providers.Web3Provider(
      window.ethereum
    );
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
      alert("SEPOLIA 네트워크가 맞는지 확인해주세요");
    }
  };

  // Join Raffle
  const onClickEnterAndSpin = async () => {
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
        value: ethers.utils.parseEther((0.0001).toString()),
      });

      await transaction.wait();
      console.log("화이트리스트 부여 성공");
      open();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    // Check if the window.ethereum object is available
    if (window.ethereum) {
      // Check if the connect to metamask
      if (window.ethereum.selectedAddress) {
        initializeEthers();
      } else {
        alert("Please connect to MetaMask.");
      }
    } else {
      alert("Please install a Web3-enabled browser like MetaMask.");
    }
  }, []);

  return (
    <Layout pageTitle={"Event"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small mtp">
          <div className="metaportal_fn_mint_top">
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">08.08.MON - 09.01.FRI</h5>
              </div>
              <h3
                className="fn__maintitle mintT"
                data-text="KTMF Pass NFT Draw Event"
                data-align="left"
              >
                KTMF Pass NFT Draw Event
              </h3>
              <div className="desc">
                <p>
                  드로우에 참여하고 혜택을 받아보세요! 원하는 카드를 선택하면
                  바로 당첨 확인 가능! 이벤트 기간 동안 24시간에 한 번씩 누구나
                  참여할 수 있어요 과연 어떤 혜택이 기다리고 있을까요?
                </p>
              </div>
              <div className="view_on">
                <ul className="textC">
                  <li>
                    <span>현재 획득 혜택</span>
                  </li>
                  <li>
                    <span>
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
                    </span>
                  </li>
                </ul>
                <ul className="counT">
                  <li>
                    <span>참여 가능 횟수</span>
                  </li>
                  <li>
                    <span>{isRaffle ? 1 : 0}/1</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mint_left">
              <div className="img">
                <ul className="mint_grid">
                  <li>
                    <div className="mint__item">
                      <span className="nft_title">
                        <b>KTMF</b> PASS NFT
                      </span>
                      <div className="img_holder">
                        <video
                          autoPlay
                          muted
                          loop
                          src="/img/video/mint.mp4"
                          type="video/mp4"
                          poster="/img/mint.png"
                        ></video>
                        <a className="full_link2" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">
                          <a href="#" onClick={onClickEnterAndSpin}>
                            Click
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint__item">
                      <span className="nft_title">
                        <b>KTMF</b> PASS NFT
                      </span>
                      <div className="img_holder">
                        <video
                          autoPlay
                          muted
                          loop
                          src="/img/video/mint.mp4"
                          type="video/mp4"
                          poster="/img/mint.png"
                        ></video>
                        <a className="full_link2" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">
                          <a href="#" onClick={onClickEnterAndSpin}>
                            Click
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint__item">
                      <span className="nft_title">
                        <b>KTMF</b> PASS NFT
                      </span>
                      <div className="img_holder">
                        <video
                          autoPlay
                          muted
                          loop
                          src="/img/video/mint.mp4"
                          type="video/mp4"
                          poster="/img/mint.png"
                        ></video>
                        <a className="full_link2" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">
                          <a href="#" onClick={onClickEnterAndSpin}>
                            Click
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint__item">
                      <span className="nft_title">
                        <b>KTMF</b> PASS NFT
                      </span>
                      <div className="img_holder">
                        <video
                          autoPlay
                          muted
                          loop
                          src="/img/video/mint.mp4"
                          type="video/mp4"
                          poster="/img/mint.png"
                        ></video>
                        <a className="full_link2" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">
                          <a href="#" onClick={onClickEnterAndSpin}>
                            Click
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint__item">
                      <span className="nft_title">
                        <b>KTMF</b> PASS NFT
                      </span>
                      <div className="img_holder">
                        <video
                          autoPlay
                          muted
                          loop
                          src="/img/video/mint.mp4"
                          type="video/mp4"
                          poster="/img/mint.png"
                        ></video>
                        <a className="full_link2" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">
                          <a href="#" onClick={onClickEnterAndSpin}>
                            Click
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint__item">
                      <span className="nft_title">
                        <b>KTMF</b> PASS NFT
                      </span>
                      <div className="img_holder">
                        <video
                          autoPlay
                          muted
                          loop
                          src="/img/video/mint.mp4"
                          type="video/mp4"
                          poster="/img/mint.png"
                        ></video>
                        <a className="full_link2" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">
                          <a href="#" onClick={onClickEnterAndSpin}>
                            Click
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
    </Layout>
  );
};

export default EventPage;
