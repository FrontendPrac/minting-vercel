import { useEffect, useState } from "react";
import Layout from "../src/layout/Layout";
import { ethers } from "ethers";
import {
  contractABI,
  contractAddress,
  stakingContractABI,
  stakingContractAddress,
} from "../src/components/utils/constants";
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
  // const [contract, setContract] = useState(null);

  // State variables for user status
  const [tokenIds, setTokenIds] = useState([]);
  const [signerAddress, setSignerAddress] = useState("");

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
    // setContract(newContract);

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

    // console.log("TokenIds: ", TokenIds);
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
    // console.log("isApprovedForAll: ", isApprovedForAll);
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

    console.log("tokenIds[5]: ", tokenIds[5]);
    stakingContract.stake(tokenIds[5], {
      gasLimit: 500000,
    });
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
    // console.log("isApprovedForAll: ", isApprovedForAll);
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

    console.log("tokenIds[5]: ", tokenIds[5]);
    stakingContract.unstake(tokenIds[5], 1, {
      gasLimit: 500000,
    });
  };

  const showKorCountdown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();

      const korTargetTime = new Date("2023/09/07 19:00:00"); // KST 입력

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
    showUTCCountDown();

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
          <div className="soon_countdown">
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
						Add boxed class to get #1 type of countdown
					*/}
            <h3
              className="metaportal_fn_countdown boxed"
              data-type="ever"
              data-date="October 13, 2022 12:30:00"
              data-days={34}
              data-hours={9}
              data-minutes={20}
              data-seconds={10}
            >
              {korDiffTime <= 0
                ? "한국 타이머 종료"
                : `KST : ${korDays}d: ${korHours}h: ${korMinutes}m: ${korSeconds}s`}
              <br />
              {utcDiffTime <= 0
                ? "미국 타이머 종료"
                : `UTC : ${utcDays}d: ${utcHours}h: ${utcMinutes}m: ${utcSeconds}s`}
            </h3>
          </div>
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
      <button onClick={onClickStaking}>스테이킹</button>
      <br />
      <button onClick={onClickUnStaking}>언스테이킹</button>
    </Layout>
  );
};
export default ComingSoon;
