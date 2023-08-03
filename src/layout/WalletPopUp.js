import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../components/utils/constants";

const WalletPopUp = ({ walletToggle, wallet }) => {
  const [errorMessage, setErrorMessage] = useState(
    "You are not connected to a wallet"
  );
  const [joinWhiteListText, setJoinWhiteListText] =
    useState("Join the Whitelist");

  const [numofWhitelisted, setNumofWhitelisted] = useState(null);
  const [connectButtonText, setConnetButtonText] = useState("Connect Wallet");
  const [connectedAddress, setConnectedAddress] = useState(null);

  // state management of provider , signer and contract
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  // this function lets you update your provider and signer , and initialize contract
  const updateEthers = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    console.log(provider.getCode(contractAddress));
    // console.log("provider: ", provider);

    const signer = provider.getSigner();
    setSigner(signer);
    // console.log("signer: ", signer);

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    setContract(contract);
    // console.log("contract: ", contract);

    console.log({
      provider,
      signer,
      contract,
    });

    location.reload();
  };

  // this function lets you connect the frontend to the blockchain using metamask
  const connectWalletHandler = () => {
    // console.log("ethereum: ", ethereum);
    // console.log("window.ethereum: ", window.ethereum);
    if (ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          // console.log("result: ", result);
          setConnectedAddress(result[0]);
          setConnetButtonText("Wallet Connected!");
          updateEthers();
        });
    } else {
      alert("메타마스크를 설치해주세요.");
      setConnectedAddress("Please Install Metamask Extension!");
    }
  };

  return (
    <Fragment>
      <div
        className={`metaportal_fn_wallet_closer ${wallet ? "active" : ""}`}
        onClick={() => walletToggle(false)}
      />
      <div className={`metaportal_fn_walletbox ${wallet ? "active" : ""}`}>
        <a className="fn__closer" onClick={() => walletToggle(false)}>
          <span />
        </a>
        <div className="walletbox">
          <div className="title_holder">
            <h3>Connect Wallet</h3>
            <p>
              Connect with one of our available wallet providers or create a new
              one.
            </p>
          </div>
          <div className="list_holder">
            <ul className="metaportal_fn_items">
              <li>
                <div className="item">
                  <a href="#" onClick={connectWalletHandler} />
                  <span className="icon">
                    <img src="/img/wallet/metamask.png" alt="" />
                  </span>
                  <span className="text">Metamask</span>
                </div>
              </li>
              {/*
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/coinbase.png" alt="" />
                  </span>
                  <span className="text">Coinbase</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/walletconnect.png" alt="" />
                  </span>
                  <span className="text">WalletConnect</span>
                </div>
              </li>
              <li>
                <div className="item">
                  <a href="#" />
                  <span className="icon">
                    <img src="/img/wallet/venly.png" alt="" />
                  </span>
                  <span className="text">Venly</span>
                </div>
              </li>
              */}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wallet: state.site.wallet,
});

export default connect(mapStateToProps, { walletToggle })(WalletPopUp);
