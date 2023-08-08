import { useEffect, useState } from "react";
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
import KSTTimeout from "../src/components/coming-soon/KSTTimeout";
import UTCTimeout from "../src/components/coming-soon/UTCTimeout";
import Button from "../src/components/modal/Button";
import Confirm from "../src/components/modal/confirm/Confirm";
import Portal from "../src/components/modal/portal/Portal";
import useModal from "../src/hooks/useModal";

const ComingSoon = () => {
  // Get Kor remaining time
  const [korDiffTime, setKorDiffTime] = useState();
  const [korDays, setKorDays] = useState();
  const [korHours, setKorHours] = useState();
  const [korMinutes, setKorMinutes] = useState();
  const [korSeconds, setKorSeconds] = useState();

  // Get UTC remaining time
  const [utcDiffTime, setUTCDiffTime] = useState();
  const [utcDays, setUTCDays] = useState();
  const [utcHours, setUTCHours] = useState();
  const [utcMinutes, setUTCMinutes] = useState();
  const [utcSeconds, setUTCSeconds] = useState();

  // State variables for ethers provider and contract
  const [provider, setProvider] = useState(null);

  // State variables for user status
  const [tokenIds, setTokenIds] = useState([]);
  const [signerAddress, setSignerAddress] = useState("");

  // Custom Hook to Modal
  const { isOpen, open, close } = useModal();

  const initializeEthers = async () => {
    // Request access to the user's Ethereum account
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Create an ethers provider using the window.ethereum object
    const newProvider = new ethers.providers.Web3Provider(window.ethereum);
    // console.log("newProvider: ", newProvider);
    setProvider(newProvider);

    // Wallet Address
    const accounts = await newProvider.listAccounts();
    const address = accounts[0];
    // console.log("address: ", address);
    setSignerAddress(address);

    // Create an ethers contract instance using the contract address and ABI
    const contractAbi = contractABI;

    const newContract = new ethers.Contract(
      contractAddress,
      contractAbi,
      newProvider
    );
    // console.log("newContract: ", newContract);

    // event filter
    const transferEventFilter = newContract.filters.Transfer();
    // console.log("transferEventFilter: ", transferEventFilter);

    // event logs
    const logs = await newProvider.getLogs({
      fromBlock: 0,
      toBlock: "latest",
      address: contractAddress,
      topics: transferEventFilter.topics,
    });
    // console.log("logs: ", logs);

    const tokenIds = [];

    // Parsing event logs
    const eventInterface = new ethers.utils.Interface(contractAbi);
    logs.forEach((log) => {
      const parsedLog = eventInterface.parseLog(log);
      // console.log("토큰 전송 이벤트: ", parsedLog.args);
      tokenIds.push(parsedLog.args.tokenId);
    });

    console.log("tokenIds: ", tokenIds);
    //! 배열에서 중복된 값을 제거하는 테스트 중입니다!!
    // const unDuplicatedArr = tokenIds.filter(
    //   (item, index) => tokenIds.indexOf(index) === index
    // );
    // console.log("unDuplicatedArr: ", unDuplicatedArr);

    setTokenIds(tokenIds);
  };

  // Staking Function
  const onClickStaking = async () => {
    // Approve Wallet to Staking Contract
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
    const stakingContractAbi = stakingContractABI;

    const stakingContract = new ethers.Contract(
      stakingContractAddress,
      stakingContractAbi,
      provider.getSigner()
    );

    console.log("tokenIds: ", tokenIds);

    await stakingContract.stake(tokenIds[1], {
      gasLimit: 500000,
    });

    // stakingContract.stakeBatch([tokenIds[1], tokenIds[2]], {
    //   gasLimit: 500000,
    // });
  };

  // UnStaking Function
  const onClickUnStaking = async () => {
    // Approve Wallet to Staking Contract
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
    const stakingContractAbi = stakingContractABI;

    const stakingContract = new ethers.Contract(
      stakingContractAddress,
      stakingContractAbi,
      provider.getSigner()
    );

    console.log("tokenIds: ", tokenIds);
    await stakingContract.unstake(tokenIds[1], 1, {
      gasLimit: 500000,
    });
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

  const showUTCCountDown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();
      const utcCurrentTime = new Date(
        korCurrentTime.getTime() +
          korCurrentTime.getTimezoneOffset() * 60 * 1000
      );

      const korTargetTime = new Date("2023/09/07 10:00:00"); // UTC 입력
      const utcTargetTime = new Date(
        korTargetTime.getTime() + korTargetTime.getTimezoneOffset() * 60 * 1000
      );

      const utcDiffTime = utcTargetTime - utcCurrentTime;

      if (utcDiffTime <= 0) {
        setUTCDiffTime(0);
        clearInterval(intervalId);
        console.log("미국 타이머 종료");
      } else {
        const days = Math.floor(utcDiffTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (utcDiffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (utcDiffTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((utcDiffTime % (1000 * 60)) / 1000);

        setUTCDays(days);
        setUTCHours(hours);
        setUTCMinutes(minutes);
        setUTCSeconds(seconds);
        setUTCDiffTime(utcDiffTime);
      }
    }, 1000);
  };

  useEffect(() => {
    showKorCountdown();
    // showUTCCountDown();

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
    <Layout pageTitle={"Coming Soon"}>
      <div className="metaportal_fn_coming_soon">
        <div className="container">
          {/* 타임아웃 */}
          <KSTTimeout
            korDays={korDays}
            korHours={korHours}
            korMinutes={korMinutes}
            korSeconds={korSeconds}
          />

          {/* <UTCTimeout
            utcDays={utcDays}
            utcHours={utcHours}
            utcMinutes={utcMinutes}
            utcSeconds={utcSeconds}
          /> */}
          {/* 타임아웃 */}
          <div className="soon_title">
            <h3
              className="fn__maintitle"
              data-text="Public Minting is Coming Soon"
              data-align="center"
            >
              Public Minting is Coming Soon
            </h3>
            <p>
              Our website is coming soon. We are currently working on our
              website. Please check again within couple days.
            </p>
          </div>
        </div>
      </div>
      {/* <button onClick={onClickStaking}>스테이킹</button>
      <br />
      <button onClick={onClickUnStaking}>언스테이킹</button>
      <br />
      <Button onClick={open}>Confirm 모달</Button> */}
      {/* 코드 처리하는 중 */}
      {isOpen && (
        <Portal>
          <Confirm
            title="Confirm"
            message="confirm 하시겠습니까?"
            close={close}
            confirm={confirm}
          ></Confirm>
        </Portal>
      )}
      <br />
    </Layout>
  );
};
export default ComingSoon;
