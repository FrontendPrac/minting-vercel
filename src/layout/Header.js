import Link from "next/link";
import React from "react";
import { useAlert } from "react-alert";
import { requestConnectWallet } from "../utilits";
import { useMetaMask } from "metamask-react";


const Header = () => {

  const { status, connect, account, chainId, ethereum } = useMetaMask();
  const alert = useAlert();
  /*const alert = useAlert();

  const onClickConnectWallet = (event) => {
    event.preventDefault();

    if (ethereum) {
      requestConnectWallet(alert);
    } else {
      alert.error("메타마스크를 설치하세요.");
    }
  };*/

  if (status==="unavailable") {
    alert.error("메타마스크를 설치하세요.");
  }
//

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
                class="h-3"
                href="https://www.instagram.com/arzmeta_/"
                target="_blank"
                rel="noreferrer"
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
                class="h-3"
                href="https://www.tiktok.com/@arzmeta_official"
                target="_blank"
                rel="noreferrer"
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
                      <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2zM22.689,13.474c-0.13,0.012 -0.261,0.02 -0.393,0.02c-1.495,0 -2.809,-0.768 -3.574,-1.931c0,3.049 0,6.519 0,6.577c0,2.685 -2.177,4.861 -4.861,4.861c-2.684,-0.001 -4.861,-2.178 -4.861,-4.862c0,-2.685 2.177,-4.861 4.861,-4.861c0.102,0 0.201,0.009 0.3,0.015v2.396c-0.1,-0.012 -0.197,-0.03 -0.3,-0.03c-1.37,0 -2.481,1.111 -2.481,2.481c0,1.37 1.11,2.481 2.481,2.481c1.371,0 2.581,-1.08 2.581,-2.45c0,-0.055 0.024,-11.17 0.024,-11.17h2.289c0.215,2.047 1.868,3.663 3.934,3.811z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            

            {status === 'unavailable' &&<li class="h-2">
              <a href="https://metamask.io/" target="_blank" rel="noreferrer">
              <div
             
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                INSTALL METAMASK
              </div></a>
            </li> }

            {status !== 'unavailable' &&

            (
              <>
            {status !== 'connected'  ? <li class="h-2">
              <div
                onClick={connect}
                style={{
                  paddingLeft: 15,
                  paddingRight: 15,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                CONNECT 
              </div>
            </li> :

              <li class="h-2">
                <div
                 
                  style={{
                    paddingLeft: 15,
                    paddingRight: 15,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {account?.slice(0,5)+"..."+account?.slice(37,43)}
                </div>
              </li> }
</>)}
              

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
