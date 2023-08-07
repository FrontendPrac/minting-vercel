import React, { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import cardMockup from "../public/img/NFT_POPUP_ticket.png";
import { ethers } from "ethers";
import {
  contractABI,
  contractAddress,
  raffleContactABI,
  raffleContractAddress,
} from "../src/components/utils/constants";
import EventPicker from "../src/components/eventpage/EventPicker";
import Portal from "../src/components/modal/portal/Portal";
import Alert from "../src/components/modal/alert/Alert";
import useModal from "../src/hooks/useModal";
import Image from "next/image";
import Link from "next/link";

const EventPage = () => {
  // State variables for ethers provider and contract
  const [provider, setProvider] = useState("");
  const [contract, setContract] = useState("");

  // State variables for user status
  const [signerAddress, setSignerAddress] = useState("");
  const [isRaffle, setIsRaffle] = useState("");
  const [result, setResult] = useState("");

  // Custom Hook to Modal
  const { isOpen, open, close } = useModal();

  // Get Raffle Data
  const initializeEthers = async () => {
    // Request access to the user's Ethereum account
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Create an ethers provider using the window.ethereum object
    const newProvider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("newProvider: ", newProvider);
    setProvider(newProvider);

    // Wallet Address
    const accounts = await newProvider.listAccounts();
    console.log("accounts[0]: ", accounts[0]);
    setSignerAddress(accounts[0]);

    // Create an ethers contract instance using the contract address and ABI
    const newRaffleContract = new ethers.Contract(
      raffleContractAddress,
      raffleContactABI,
      newProvider.getSigner()
    );
    console.log("newRaffleContract: ", newRaffleContract);
    setContract(newRaffleContract);

    // const response = await newRaffleContract.getEntranceState(accounts[0]);
    // setIsRaffle(response);
    // console.log("response: ", response);

    // const response_2 = await newRaffleContract.getRafflePrice();
    // console.log("response_2: ", response_2);
  };

  // Setting initial Raffle
  const onClickRaffleSetting = async () => {
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
      await raffleContract.setRaffleParams(
        1691128636,
        1691129636,
        0,
        0,
        3,
        3,
        0,
        {
          gasLimit: 500000,
        }
      );
      await raffleContract.enterRaffle();
      console.log("트랜젝션 성공");
    } catch (error) {
      if (error.code === ethers.utils.Logger.errors.ACTION_REJECTED) {
        console.log("트랜젝션 거절");
      } else {
        console.log("트랜잭션 실패");
      }
    }
  };

  // const onClickSpin = async () => {
  //   const response_2 = await contract.spin({
  //     gasLimit: 500000,
  //   });
  //   console.log("response_2: ", response_2);
  // };

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
      <div className="metaportal_fn_event">
        <div className="container">
          <div class="mint_modal">
            <div class="modal_bg">
              <div class="modal">
                <ul>
                  <li class="modal_esc">
                    <a href=""></a>
                  </li>
                  <li class="mo_text" data-text="CONGRATULATIONS"
                  data-align="left">
                    CONGRATULATIONS</li>
                  <li>
                    <img src="/img/NFT_POPUP_ticket.png" alt=""/>
                  </li>
                  <li class="pass_name">KTMF PASS NFT</li>
                  <li class="pass_nft">경쟁 화이트리스트 획득!</li>
                </ul>
                <div class="modal_chec">
                  <a href="">확인</a>
                </div>
              </div>
            </div>
          </div>

    
          <div class="metaportal_fn_mintpage">
            <div class="container small mtp">
              <div class="metaportal_fn_mint_top">
                <div class="mint_right">
                  <div class="metaportal_fn_share">
                    <h5 class="label">23.08.04MON - 23.09.02THU</h5>
                  </div>
                  <h3
                    class="fn__maintitle mintT"
                    data-text="KTMF Pass NFT Draw Event"
                    data-align="left">
                    KTMF Pass NFT Draw Event
                  </h3>
                  <div class="desc">
                    <p>
                      드로우에 참여하고 혜택을 받아보세요!
                      원하는 카드를 선택하면 바로 당첨 확인 가능!
                      이벤트 기간 동안 24시간에 한 번씩 누구나 참여할 수 있어요 과연 어떤 혜택이 기다리고 있을까요?
                    </p>
                  </div>
                  <div class="view_on">
                    <ul class="textC">
                      <li>
                        <span>현재 획득 혜택</span>
                      </li>
                      <li>
                        <span>아직 받은 혜택이 없어요. 이벤트에 참여해보세요!</span>
                      </li>
                    </ul>
                    <ul class="counT">
                      <li>
                        <span>오늘 참여 가능 횟수</span>
                      </li>
                      <li>
                        <span>0/1</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="mint_left">
                  <div class="img">
                    <ul class="mint_grid">
                      <li>
                        <div class="mint__item">
                          <span class="nft_title">
                            <b>KTMF</b> PASS NFT
                          </span>
                          <div class="img_holder">
                            <video autoplay muted loop src="/img/video/mint.mp4" type="video/mp4">
                            </video>
                            <Link href="/nft-single">
                              <a class="full_link" />
                            </Link>
                          </div>
                          <div class="title_holder">
                            <h3 class="fn_title">
                              <a href="#">Click</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="mint__item">
                          <span class="nft_title">
                            <b>KTMF</b> PASS NFT
                          </span>
                          <div class="img_holder">
                            <video autoplay muted loop src="/img/video/mint.mp4" type="video/mp4">
                            </video>
                            <Link href="/nft-single">
                              <a class="full_link" />
                            </Link>
                          </div>
                          <div class="title_holder">
                            <h3 class="fn_title">
                              <a href="#">Click</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="mint__item">
                          <span class="nft_title">
                            <b>KTMF</b> PASS NFT
                          </span>
                          <div class="img_holder">
                            <video autoplay muted loop src="/img/video/mint.mp4" type="video/mp4">
                            </video>
                            <Link href="/nft-single">
                              <a class="full_link" />
                            </Link>
                          </div>
                          <div class="title_holder">
                            <h3 class="fn_title">
                              <a href="#">Click</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="mint__item">
                          <span class="nft_title">
                            <b>KTMF</b> PASS NFT
                          </span>
                          <div class="img_holder">
                            <video autoplay muted loop src="/img/video/mint.mp4" type="video/mp4">
                            </video>
                            <Link href="/nft-single">
                              <a class="full_link" />
                            </Link>
                          </div>
                          <div class="title_holder">
                            <h3 class="fn_title">
                              <a href="#">Click</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="mint__item">
                          <span class="nft_title">
                            <b>KTMF</b> PASS NFT
                          </span>
                          <div class="img_holder">
                            <video autoplay muted loop src="/img/video/mint.mp4" type="video/mp4">
                            </video>
                            <Link href="/nft-single">
                              <a class="full_link" />
                            </Link>
                          </div>
                          <div class="title_holder">
                            <h3 class="fn_title">
                              <a href="#">Click</a>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="mint__item">
                          <span class="nft_title">
                            <b>KTMF</b> PASS NFT
                          </span>
                          <div class="img_holder">
                            <video autoplay muted loop src="/img/video/mint.mp4" type="video/mp4">
                            </video>
                            <Link href="/nft-single">
                              <a class="full_link" />
                            </Link>
                          </div>
                          <div class="title_holder">
                            <h3 class="fn_title">
                              <a href="#">Click</a>
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
          



          {/* <button onClick={onClickRaffleSetting}>세팅</button>
          <EventPicker open={open} result={result} setResult={setResult} /> */}
          {/* <button onClick={onClickSpin}>스핀</button> */}
        </div>
      </div>

      
       {isOpen && (
        <Portal>
           <Alert
            title={result}
           message="축하드립니다."
             btnText="확인"
             close={close}/>
        </Portal>
        )}
  </Layout>
   );
 };

export default EventPage;
