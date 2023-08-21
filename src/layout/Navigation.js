import Link from "next/link";
import { Fragment } from "react";
import { connect } from "react-redux";
import { navigationToggle } from "../redux/actions/siteSettings";
import { useMetaMask } from "metamask-react";
import { useGlobalContext } from "../../context/GlobalContextProvider";
const Navigation = ({ navigation, navigationToggle }) => {
  const { status, connect, account, chainId, ethereum, switchChain } =
    useMetaMask();
  const data = useGlobalContext();
  const { isSidebar, setIsSidebar } = data;
  console.log("isSidebar: ", isSidebar);

  return (
    <Fragment>
      {isSidebar && (
        <>
          <div
            // onClick={() => navigationToggle(false)}
            onClick={() => setIsSidebar(false)}
            className={`metaportal_fn_leftnav_closer ${
              isSidebar ? "active" : ""
            }`}
          />
          <div className={`metaportal_fn_leftnav ${isSidebar ? "active" : ""}`}>
            <div className="navbox">
              <div className="mob_bot" style={{ block: "none" }}>
                <ul className="mob_ul">
                  <li className="mo_lo_flex">
                    <div class="nav_logo h-2 mo_lo">
                      <Link href="/">ARZPASS</Link>
                    </div>
                    <a
                      href="#"
                      className="fn__closer"
                      onClick={() => setIsSidebar(false)}
                    >
                      <span />
                    </a>
                  </li>

                  <li>
                    <Link href="/#home2">
                      <a>HOME</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/world">
                      <a>WORLD</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/ktmf-pass">
                      <a>NFTs</a>
                    </Link>
                  </li>

                  <li>
                    <Link href="/event">
                      <a>EVENT</a>
                    </Link>
                  </li>

                  <li className="li-c">
                    <Link href="https://testnets.opensea.io/collection/ktmfpassnft">
                      <a target="_blank" rel="noreferrer">
                        OPENSEA
                      </a>
                    </Link>
                    <span className="svg_baro">
                      <Link href="">
                        <a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30px"
                            height=""
                            viewBox="0 0 223.000000 200.000000"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <g
                              transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                              stroke="none"
                            >
                              <path
                                d="M1058 1985 c-40 -22 -48 -45 -48 -129 0 -42 -3 -76 -8 -76 -4 0 -65
                        16 -136 35 -71 20 -131 34 -133 31 -2 -2 14 -40 36 -85 142 -282 206 -551 170
                        -723 -13 -65 -90 -228 -153 -327 -26 -40 -45 -79 -42 -87 4 -11 34 -14 136
                        -14 l130 0 0 -100 0 -100 -152 0 c-134 0 -157 2 -196 21 -56 27 -93 84 -100
                        149 l-5 50 -275 0 -275 0 6 -78 c7 -85 37 -181 82 -258 44 -75 150 -174 231
                        -217 140 -73 135 -72 739 -72 534 0 541 0 587 22 69 31 141 104 212 213 35 52
                        84 127 110 167 37 56 62 82 116 118 37 25 82 50 99 56 31 11 31 11 31 86 0 66
                        -2 74 -17 69 -10 -3 -137 -39 -283 -81 l-265 -77 -70 -68 c-92 -91 -116 -100
                        -260 -100 l-115 0 0 100 0 100 74 0 c85 0 102 10 200 120 75 84 110 135 149
                        218 28 58 32 77 31 147 -1 97 -23 160 -96 272 -52 81 -266 303 -326 338 l-32
                        19 0 88 c0 90 -13 142 -43 166 -24 20 -79 24 -109 7z"
                              />
                              <path
                                d="M586 1558 c-18 -29 -126 -198 -240 -376 -113 -178 -206 -328 -206
                        -333 0 -5 103 -9 254 -9 l254 0 52 105 c61 121 72 195 50 319 -21 118 -101
                        346 -121 346 -5 0 -24 -24 -43 -52z"
                              />
                            </g>
                          </svg>
                        </a>
                      </Link>
                    </span>
                  </li>

                  <li className="li-c">
                    <Link href="https://twitter.com/a_rzmeta">
                      <a target="_blank" rel="noreferrer">
                        TWITTER
                      </a>
                    </Link>
                    <span className="svg_baro">
                      <Link href="">
                        <a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0,0,256,256"
                            width="30px"
                            height="30px"
                            fill-rule="nonzero"
                          >
                            <g
                              fill="#ffffff"
                              fill-rule="nonzero"
                              stroke="none"
                              stroke-width="1"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              stroke-miterlimit="10"
                              stroke-dasharray=""
                              stroke-dashoffset="0"
                              font-family="none"
                              font-weight="none"
                              font-size="none"
                              text-anchor="none"
                              // style="mix-blend-mode: normal"
                            >
                              <g transform="scale(8.53333,8.53333)">
                                <path d="M28,6.937c-0.957,0.425 -1.985,0.711 -3.064,0.84c1.102,-0.66 1.947,-1.705 2.345,-2.951c-1.03,0.611 -2.172,1.055 -3.388,1.295c-0.973,-1.037 -2.359,-1.685 -3.893,-1.685c-2.946,0 -5.334,2.389 -5.334,5.334c0,0.418 0.048,0.826 0.138,1.215c-4.433,-0.222 -8.363,-2.346 -10.995,-5.574c-0.458,0.788 -0.721,1.704 -0.721,2.683c0,1.85 0.941,3.483 2.372,4.439c-0.874,-0.028 -1.697,-0.268 -2.416,-0.667c0,0.023 0,0.044 0,0.067c0,2.585 1.838,4.741 4.279,5.23c-0.447,0.122 -0.919,0.187 -1.406,0.187c-0.343,0 -0.678,-0.034 -1.003,-0.095c0.679,2.119 2.649,3.662 4.983,3.705c-1.825,1.431 -4.125,2.284 -6.625,2.284c-0.43,0 -0.855,-0.025 -1.273,-0.075c2.361,1.513 5.164,2.396 8.177,2.396c9.812,0 15.176,-8.128 15.176,-15.177c0,-0.231 -0.005,-0.461 -0.015,-0.69c1.043,-0.753 1.948,-1.692 2.663,-2.761z"></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </Link>
                    </span>
                  </li>

                  <li className="li-c">
                    <Link href="https://www.tiktok.com/@arzmeta_official">
                      <a target="_blank" rel="noreferrer">
                        TIKTOK
                      </a>
                    </Link>
                    <span className="svg_baro">
                      <Link href="">
                        <a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0,0,256,256"
                            width="30px"
                            height="30px"
                            fill-rule="nonzero"
                          >
                            <g
                              fill="#ffffff"
                              fill-rule="nonzero"
                              stroke="none"
                              stroke-width="1"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              stroke-miterlimit="10"
                              stroke-dasharray=""
                              stroke-dashoffset="0"
                              font-family="none"
                              font-weight="none"
                              font-size="none"
                              text-anchor="none"
                              // style="mix-blend-mode: normal"
                            >
                              <g transform="scale(8.53333,8.53333)">
                                <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2zM22.689,13.474c-0.13,0.012 -0.261,0.02 -0.393,0.02c-1.495,0 -2.809,-0.768 -3.574,-1.931c0,3.049 0,6.519 0,6.577c0,2.685 -2.177,4.861 -4.861,4.861c-2.684,-0.001 -4.861,-2.178 -4.861,-4.862c0,-2.685 2.177,-4.861 4.861,-4.861c0.102,0 0.201,0.009 0.3,0.015v2.396c-0.1,-0.012 -0.197,-0.03 -0.3,-0.03c-1.37,0 -2.481,1.111 -2.481,2.481c0,1.37 1.11,2.481 2.481,2.481c1.371,0 2.581,-1.08 2.581,-2.45c0,-0.055 0.024,-11.17 0.024,-11.17h2.289c0.215,2.047 1.868,3.663 3.934,3.811z"></path>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </Link>
                    </span>
                  </li>

                  <li className="li-c mbli">
                    <Link href="https://open.kakao.com/o/gda1vbof">
                      <a target="_blank" rel="noreferrer">
                        {" "}
                        KAKAOTALK
                      </a>
                    </Link>
                    <span className="svg_baro">
                      <Link href="https://open.kakao.com/o/gda1vbof">
                        <a>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 208 191.94"
                          >
                            <g>
                              <polygon
                                class="cls-1"
                                points="76.01 89.49 87.99 89.49 87.99 89.49 82 72.47 76.01 89.49"
                              />
                              <path
                                class="cls-1"
                                d="M104,0C46.56,0,0,36.71,0,82c0,29.28,19.47,55,48.75,69.48-1.59,5.49-10.24,35.34-10.58,37.69,0,0-.21,1.76.93,2.43a3.14,3.14,0,0,0,2.48.15c3.28-.46,38-24.81,44-29A131.56,131.56,0,0,0,104,164c57.44,0,104-36.71,104-82S161.44,0,104,0ZM52.53,69.27c-.13,11.6.1,23.8-.09,35.22-.06,3.65-2.16,4.74-5,5.78a1.88,1.88,0,0,1-1,.07c-3.25-.64-5.84-1.8-5.92-5.84-.23-11.41.07-23.63-.09-35.23-2.75-.11-6.67.11-9.22,0-3.54-.23-6-2.48-5.85-5.83s1.94-5.76,5.91-5.82c9.38-.14,21-.14,30.38,0,4,.06,5.78,2.48,5.9,5.82s-2.3,5.6-5.83,5.83C59.2,69.38,55.29,69.16,52.53,69.27Zm50.4,40.45a9.24,9.24,0,0,1-3.82.83c-2.5,0-4.41-1-5-2.65l-3-7.78H72.85l-3,7.78c-.58,1.63-2.49,2.65-5,2.65a9.16,9.16,0,0,1-3.81-.83c-1.66-.76-3.25-2.86-1.43-8.52L74,63.42a9,9,0,0,1,8-5.92,9.07,9.07,0,0,1,8,5.93l14.34,37.76C106.17,106.86,104.58,109,102.93,109.72Zm30.32,0H114a5.64,5.64,0,0,1-5.75-5.5V63.5a6.13,6.13,0,0,1,12.25,0V98.75h12.75a5.51,5.51,0,1,1,0,11Zm47-4.52A6,6,0,0,1,169.49,108L155.42,89.37l-2.08,2.08v13.09a6,6,0,0,1-12,0v-41a6,6,0,0,1,12,0V76.4l16.74-16.74a4.64,4.64,0,0,1,3.33-1.34,6.08,6.08,0,0,1,5.9,5.58A4.7,4.7,0,0,1,178,67.55L164.3,81.22l14.77,19.57A6,6,0,0,1,180.22,105.23Z"
                              />
                            </g>
                          </svg>
                        </a>
                      </Link>
                    </span>
                  </li>

                  <li className="li-c">
                    {status === "unavailable" && (
                      <li class="h-2">
                        <a
                          href="https://metamask.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div
                            style={{
                              paddingLeft: 0,
                              paddingRight: 0,
                              color: "white",
                              cursor: "pointer",
                            }}
                          >
                            INSTALL METAMASK
                          </div>
                        </a>
                      </li>
                    )}

                    {status !== "unavailable" && (
                      <>
                        {status !== "connected" ? (
                          <li
                            class="h-2"
                            style={{
                              marginLeft: "-14px",
                              marginTop: "10px",
                              backgroundColor: "#313866",
                              width: "20rem",
                              borderRadius: "10px",
                              padding: "8px",
                            }}
                          >
                            <div
                              onClick={connect}
                              style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                color: "white",
                                cursor: "pointer",
                              }}
                            >
                              CONNECT
                            </div>
                          </li>
                        ) : (
                          <li class="h-2">
                            <div
                              style={{
                                paddingLeft: 0,
                                paddingRight: 0,
                                color: "white",
                                cursor: "pointer",
                              }}
                            >
                              {account?.slice(0, 5) +
                                "..." +
                                account?.slice(37, 43)}
                            </div>
                          </li>
                        )}
                      </>
                    )}
                  </li>

                  {status === "connected" &&
                    chainId?.toString() !== "0xaa36a7" && (
                      <li
                        className="li-c"
                        style={{
                          marginLeft: "-14px",
                          marginTop: "2rem",
                          backgroundColor: "#313866",
                          width: "20rem",
                          borderRadius: "10px",
                          padding: "8px",
                        }}
                      >
                        <div
                          style={{
                            paddingLeft: 15,
                            paddingRight: 15,
                            color: "white",
                            cursor: "pointer",
                            textAlign: "center",
                            justifyItems: "center",
                            display: "flex",
                            margin: "0 auto",
                          }}
                          onClick={() => switchChain("0xaa36a7")}
                        >
                          swicth network
                        </div>
                      </li>
                    )}
                </ul>
              </div>

              <div className="nav_holder">
                {/* For JS */}
                <span className="icon">
                  <img src="/svg/down.svg" alt="" className="fn__svg" />
                </span>
              </div>
              <div className="info_holder">
                <div className="copyright">
                  <p>Copyright 2023 - Hancom Frontis</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Fragment>
  );
};

// const mapStateToProps = (state) => ({
//   navigation: state.site.navigation,
// });
// export default connect(mapStateToProps, { navigationToggle })(Navigation);

export default Navigation;
