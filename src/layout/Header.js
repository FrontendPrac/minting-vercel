import Link from "next/link";
import React from "react";
import { useAlert } from "react-alert";
import { requestConnectWallet } from "../utilits";

const Header = () => {
  const alert = useAlert();

  const onClickConnectWallet = (event) => {
    event.preventDefault();

    if (ethereum) {
      requestConnectWallet(alert);
    } else {
      alert.error("메타마스크를 설치하세요.");
    }
  };

  return (
    <div class="fixed_nav">
      <div class="flex_item">
        <div class="flex_logo">
          <div class="nav_logo h-2">
            <Link href="/">ARZPASS</Link>
          </div>
        </div>
        <div class="flex_ul">
          <ul>
            <li class="h-2">
              <Link href="/" class="h-3">
                <img
                  src="/img/main/main_arzmata_logo.png"
                  alt=""
                  style={{ marginRight: 15, marginLeft: 15, cursor: "pointer" }}
                />
              </Link>
            </li>
            <li class="h-2">
              <a href="">WORLD</a>
            </li>
            <li class="h-2">
              <a href="ktmf-pass">NFTS</a>
            </li>
            <li class="h-2">
              <a href="event">EVENT</a>
            </li>
            <li class="h-2">
              <a
                href="https://www.instagram.com/arzmeta_/"
                target="_blank"
                rel="noreferrer"
                class="h-3"
              >
                <svg
                  class="h-1"
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
                      <path d="M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li class="h-2">
              <a
                href="https://twitter.com/a_rzmeta"
                target="_blank"
                rel="noreferrer"
                class="h-3"
              >
                <svg
                  class="h-1"
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
            </li>
            <li class="h-2">
              <div
                onClick={onClickConnectWallet}
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                CONNECT
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
