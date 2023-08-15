import React, { Fragment } from "react";
import { connect } from "react-redux";
import { walletToggle } from "../redux/actions/siteSettings";
import Image from "next/image";
import { requestConnectWallet } from "../utilits";
import { useAlert } from "react-alert";

const WalletPopUp = ({ walletToggle, wallet }) => {
  const alert = useAlert();

  // this function lets you connect the frontend to the blockchain using metamask
  const connectWalletHandler = () => {
    if (ethereum) {
      requestConnectWallet(alert);
    } else {
      alert.error("메타마스크를 설치하세요.");
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
                    <Image
                      src="/img/wallet/metamask.png"
                      alt="metamask"
                      width={23}
                      height={23}
                    />
                  </span>
                  <span className="text">Metamask</span>
                </div>
              </li>
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
