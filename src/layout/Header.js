import Link from "next/link";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits";
import { contractABI, contractAddress } from "../components/utils/constants";
import { ethers } from "ethers";

const Header = ({ walletToggle, navigationToggle }) => {
  // state management of provider , signer and contract
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [connectWalletText, setConnectWalletText] =
    useState("CONNECT TO WALLET");

  // this function lets you update your provider and signer , and initialize contract
  const updateEthers = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(provider);
    console.log(provider.getCode(contractAddress));

    let accounts = await provider.send("eth_requestAccounts", []);
    let account = accounts[0];
    setConnectWalletText(account.slice(0, 6) + "..." + account.slice(-4));
    provider.on("accountsChanged", function (accounts) {
      account = accounts[0];
      setConnectWalletText(account.slice(0, 6) + "..." + account.slice(-4));
      console.log(address); // Print new address
      location.reload();
    });

    const signer = provider.getSigner();
    setSigner(signer);

    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    setContract(contract);

    // console.log({
    //   provider,
    //   signer,
    //   contract,
    // });
  };

  useEffect(() => {
    stickyNav();
    updateEthers();
  }, []);

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav" style={{ opacity: 1 }}>
            <ul>
              <li>
                <Link href="/ktmf-pass">
                  <a className="creative_link">NFTs</a>
                </Link>
              </li>
              <li>
                <Link href="/#home2">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/#collection">
                  <a className="creative_link">Collection</a>
                </Link>
              </li>
              <li>
                <Link href="/#news">
                  <a className="creative_link">News</a>
                </Link>
              </li>
              <li>
                <Link href="/#faq">
                  <a className="creative_link">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="wallet">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                walletToggle(true);
              }}
              className="metaportal_fn_button wallet_opener"
            >
              <span>{connectWalletText}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
