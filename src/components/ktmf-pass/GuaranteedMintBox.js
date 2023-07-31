import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

const GuaranteedMintBox = ({ provider, contract, guaranteeActive }) => {
  // State variables for quantity and total price
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // State variables for guaranteed user
  const [guaranteePrice, setGuaranteePrice] = useState(0);
  const [guaranteeLimit, setGuaranteeLimit] = useState(0);
  const [guaranteeNumMinted, setGuaranteeNumMinted] = useState(0);
  const [guaranteeSupply, setGuaranteeSupply] = useState(0);

  // State variables for KOR time stamp
  const [korDiffTime, setKorDiffTime] = useState();
  const [korDays, setKorDays] = useState();
  const [korHours, setKorHours] = useState();
  const [korMinutes, setKorMinutes] = useState();
  const [korSeconds, setKorSeconds] = useState();

  // State variables for UTC time stamp
  const [utcDiffTime, setUTCDiffTime] = useState();
  const [utcDays, setUTCDays] = useState();
  const [utcHours, setUTCHours] = useState();
  const [utcMinutes, setUTCMinutes] = useState();
  const [utcSeconds, setUTCSeconds] = useState();

  // Get smart contract data
  const getGuaranteeData = async (newContract) => {
    try {
      const price = await newContract.getGuaranteeWhitelistPrice(); // 가격
      const limit = await newContract.getGuaranteeWhitelistLimit(); // 갯수 제한 (화면에는 필요 X)
      const numMinted = await newContract.getGuaranteeWhitelistNumMinted(); // 민팅된 갯수
      const supply = await newContract.getGuaranteeWhitelistSupply(); // 총 갯수

      // Convert the BigNumber to a floating-point number (wei to ether)
      // Update the cost2 value with the loaded guarantee_Price value
      setGuaranteePrice(
        parseFloat(ethers.utils.formatEther(parseFloat(price)))
      );
      setGuaranteeLimit(parseFloat(limit));
      setGuaranteeNumMinted(parseFloat(numMinted));
      setGuaranteeSupply(parseFloat(supply));
    } catch (error) {
      console.error("Error loading guarantee_Price:", error);
      alert(
        "Error loading guarantee_Price. Please check the console for details."
      );
    }
  };

  // Mint function to interact with the smart contract and mint NFTs
  const mintNFTs = async (totalPrice, quantity) => {
    if (!provider || !contract) {
      alert("Ethers provider or contract not initialized.");
      return;
    }

    console.log("quantity: ", quantity);
    console.log("totalPrice: ", totalPrice);

    try {
      // Call the guaranteeMint function in the smart contract
      const transaction = await contract.guaranteeWhitelistMint(quantity, {
        gasLimit: 500000,
        value: ethers.utils.parseEther(totalPrice.toFixed(5).toString()),
      });

      // Wait for the transaction to be mined
      await transaction.wait();

      alert("NFTs minted successfully!");
      location.reload();
    } catch (error) {
      console.error("Error minting NFTs:", error);
      alert("Error minting NFTs. Please check the console for details.");
    }
  };

  // Update total price when quantity changes
  const handleQuantityChange = async (value) => {
    if (!window.ethereum) {
      alert("메타마스크를 연결해주세요");
      return;
    }

    if (value > 0) {
      setQuantity(value);
      // Calculate total price using the cost value from the smart contract
      const newTotalPrice = value * guaranteePrice;
      setTotalPrice(newTotalPrice);
    }
  };

  // Get Kor remaining time
  const showKorCountdown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();
      const korTargetTime = new Date("2023/09/06 20:00:00"); // KST 입력

      const korDiffTime = korTargetTime - korCurrentTime;

      if (korDiffTime <= 0) {
        setDiffKorTime(0);
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

  // Get UTC remaining time
  const showUTCCountdown = () => {
    const intervalId = setInterval(() => {
      const korCurrentTime = new Date();
      const utcCurrentTime = new Date(
        korCurrentTime.getTime() +
          korCurrentTime.getTimezoneOffset() * 60 * 1000
      );

      const korTargetTime = new Date("2023/09/06 11:00:00"); // UTC 입력
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
    showUTCCountdown();
    getGuaranteeData(contract);
    handleQuantityChange(0);
  }, []);

  // console.log("quantity: ", quantity);
  // console.log("totalPrice: ", totalPrice);

  return (
    <div className="metaportal_fn_mintbox">
      <div className="mint_left">
        <div className="mint_title">
          <span>GUARANTEE Mint is Live</span>
        </div>
        <div className="mint_list">
          <ul>
            <li>
              <div className="item">
                <h4>Price</h4>
                <h3>
                  <span className="cost">{guaranteePrice}</span> ETH
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4>Remaining</h4>
                <h3>
                  {guaranteeNumMinted}/{guaranteeSupply}
                </h3>
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
                  <span className="quantity">{quantity}</span>
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
                  <span className="total_price">{totalPrice.toFixed(5)}</span>{" "}
                  ETH + GAS
                </h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="mint_desc">
          <a
            href="#"
            className="metaportal_fn_button"
            onClick={() => mintNFTs(totalPrice, quantity)}
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
            <h4>Guarantee Mint Ends In</h4>
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
              data-date="October 11, 2023 00:00:00"
            >
              {korDiffTime <= 0
                ? "한국 타이머 종료"
                : `KST : ${korDays}d: ${korHours}h: ${korMinutes}m: ${korSeconds}s \n`}
              <br />
              {utcDiffTime <= 0
                ? "미국 타이머 종료"
                : `UTC : ${utcDays}d: ${utcHours}h: ${utcMinutes}m: ${utcSeconds}s \n`}
              {/* 34d: 10h: 20m: 0s */}
            </h3>
          </div>
          <div className="mint_checked">
            <p>
              <span className="text">Guarantee Whitelist:</span>
              <span className="status">
                {guaranteeActive === guaranteeSupply ? "SOLD OUT" : "IS LIVE"}
                {/* Soldout{" "} */}
                <span className="icon">
                  <img src="/svg/checked.svg" alt="" className="fn__svg" />
                </span>
              </span>
            </p>
            <p>
              <span className="text">Competitive Whitelist:</span>
              <span className="status">
                {guaranteeActive === 1 && "COMING SOON"}
                {/* Soldout{" "} */}
                <span className="icon">
                  <img src="/svg/checked.svg" alt="" className="fn__svg" />
                </span>
              </span>
            </p>
            <p>
              <span className="text">Public:</span>
              <span className="status">
                {guaranteeActive === 1 && "COMING SOON"}
                {/* Soldout{" "} */}
                <span className="icon">
                  <img src="/svg/checked.svg" alt="" className="fn__svg" />
                </span>
              </span>
            </p>
          </div>
          <div className="mint_info">
            <p>
              You need to pay a GAS fee during minting. We allow max{" "}
              {guaranteeLimit} mints per wallet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteedMintBox;
