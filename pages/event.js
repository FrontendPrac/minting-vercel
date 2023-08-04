import React, { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
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

    const response = await newRaffleContract.getEntranceState(accounts[0]);
    setIsRaffle(response);
    console.log("response: ", response);

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
          <button onClick={onClickRaffleSetting}>세팅</button>
          <EventPicker open={open} result={result} setResult={setResult} />
          {/* <button onClick={onClickSpin}>스핀</button> */}
        </div>
      </div>
      {isOpen && (
        <Portal>
          <Alert
            title={result}
            message="축하드립니다."
            btnText="확인"
            close={close}
          />
        </Portal>
      )}
    </Layout>
  );
};

export default EventPage;
