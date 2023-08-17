import Link from "next/link";
import { Fragment, useState } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
const MobileNavigation = ({ walletToggle, navigationToggle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {/* <div className="metaportal_fn_mobnav">
        <div className="mob_top">
          {<div className="social_trigger">
            <div className="trigger" onClick={() => navigationToggle(true)}>
              <span />
            </div>
            <div className="social">
              <ul>
                <li>
                  <a
                    href="https://twitter.com/a_rzmeta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/svg/social/twitter-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/arzmeta_/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/svg/social/instagram-1.svg"
                      alt=""
                      className="fn__svg"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/arzmeta_official"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/img/telegram.png"
                      alt=""
                      style={{
                        width: "30px",
                        height: "40px",
                        paddingBottom: "5px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.kakao.com/o/gda1vbof"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/img/kakao.png"
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        paddingBottom: "5px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div> }
          <div className="wallet">
            <a
              href="#"
              className="metaportal_fn_button wallet_opener"
              onClick={() => walletToggle(true)}
            >
              <span>Wallet</span>
            </a>
          </div>
        </div>
        <div className="mob_mid">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div
            className={`trigger ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
        <div className="mob_bot" style={{ display: toggle ? "block" : "none" }}>
          <ul>
            <li>
              <Link href="/#home2">
                <a className="creative_link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/ktmf-pass">
                <a className="creative_link">NFTs</a>
              </Link>
            </li>
            <li>
              <Link href="/event">
                <a className="creative_link">Event</a>
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  navigation: state.site.navigation,
});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  MobileNavigation
);
