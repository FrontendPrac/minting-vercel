import Link from "next/link";
import Layout from "../src/layout/Layout";
import SectionDivider from "../src/components/SectionDivider";
import RoadMapSlider from "../src/components/RoadMapStep";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import contract_abi from "../src/abis/KTMF_PASS_NFT.json"

const NftSingle = () => {
  // State variables for quantity and total price
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // State variables for ethers provider and contract
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);

  // Update total price when quantity changes
  const handleQuantityChange = (value) => {
    setQuantity(value);
    // Calculate total price using the cost value from the smart contract
    const newTotalPrice = value * cost;
    setTotalPrice(newTotalPrice);
  };

  // Function to load the public_Price value from the contract
  const loadPublicPrice = async () => {
    if (!provider || !contract) {
      alert("Ethers provider or contract not initialized.");
      return;
    }

    try {
      // Call the publicPrice function in the smart contract to get the value
      const publicPrice = await contract.publicPrice();
      // Convert the BigNumber to a floating-point number (wei to ether)
      const publicPriceInEther = ethers.utils.formatEther(publicPrice);
      // Update the cost value with the loaded public_Price value
      setCost(parseFloat(publicPriceInEther));
    } catch (error) {
      console.error("Error loading public_Price:", error);
      alert("Error loading public_Price. Please check the console for details.");
    }
  };

  useEffect(() => {
    const initializeEthers = async () => {
      // Check if the window.ethereum object is available
      if (window.ethereum) {
        // Request access to the user's Ethereum account
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Create an ethers provider using the window.ethereum object
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(newProvider);

        // Create an ethers contract instance using the contract address and ABI
        const contractAddress = "0x2D3fFA304E5160E15be55386d23b996514718E74"; // Replace with the actual contract address
        const contractAbi = contract_abi;
        const newContract = new ethers.Contract(
          contractAddress,
          contractAbi,
          newProvider.getSigner() // Use the signer to send transactions
        );
        setContract(newContract);
      } else {
        alert("Please install a Web3-enabled browser like MetaMask.");
      }
    };
    handleQuantityChange(1);
    initializeEthers();
    loadPublicPrice();
  }, []);

  // Mint function to interact with the smart contract and mint NFTs
  const mintNFTs = async () => {
    if (!provider || !contract) {
      alert("Ethers provider or contract not initialized.");
      return;
    }

    try {
      // Call the publicMint function in the smart contract
      const transaction = await contract.publicMint(quantity, {
        value: ethers.utils.parseEther(totalPrice.toString()), // Convert totalPrice to Wei
      });

      // Wait for the transaction to be mined
      await transaction.wait();

      alert("NFTs minted successfully!");
    } catch (error) {
      console.error("Error minting NFTs:", error);
      alert("Error minting NFTs. Please check the console for details.");
    }
  };

  return (
    <Layout pageTitle={"Minting"}>
      <div className="metaportal_fn_mintpage">
        <div className="container small">
          {/* Mint Top */}
          <div className="metaportal_fn_mint_top">
            <div className="mint_left">
              <div className="img">
                <div className="img_in" data-bg-img="/img/about/KTMF_Pass_1x1.jpg">
                  <img src="/img/1x1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="mint_right">
              <div className="metaportal_fn_share">
                <h5 className="label">Share:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/twitter-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/facebook-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/instagram-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/pinterest-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/svg/social/behance-1.svg"
                        alt=""
                        className="fn__svg"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="metaportal_fn_breadcrumbs">
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <span className="separator">/</span>
                  <Link href="/collection">
                    <a>Collection</a>
                  </Link>
                  <span className="separator">/</span>
                  <span className="current">KTMF PASS NFT</span>
                </p>
              </div>
              <h3
                className="fn__maintitle"
                data-text="KTMF PASS NFT"
                data-align="left"
              >
                KTMF PASS NFT
              </h3>
              <div className="desc">
                <p>
                  Suspendisse eu velit est. Cras nec vestibulum quam. Donec
                  tincidunt purus nec enim tincidunt, sit amet facilisis massa
                  laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa
                  dictum, vulputate neque ac, porta mauris. Sed sollicitudin
                  nisi augue, a gravida turpis elementum vel. Curabitur sagittis
                  quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed
                  non ante malesuada, ultrices sem at, tempus libero.
                </p>
                <p>
                  Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus
                  orci, eleifend euismod justo. Quisque luctus turpis eu
                  tristique feugiat. Praesent ac magna feugiat, interdum lacus
                  ac, interdum dui. Pellentesque id quam quis enim malesuada
                  rutrum. Orci varius natoque penatibus et magnis dis
                  parturient.
                </p>
              </div>
              <div className="view_on">
                <ul>
                  <li>
                    <span>View On:</span>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/opensea.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/svg/portal.svg" alt="" className="fn__svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* !Mint Top */}
          {/* Mint Box */}
          <div className="metaportal_fn_mintbox">
            <div className="mint_left">
              <div className="mint_title">
                <span>Public Mint is Live</span>
              </div>
              <div className="mint_list">
                <ul>
                  <li>
                    <div className="item">
                      <h4>Price</h4>
                      <h3>2.25 ETH</h3>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <h4>Remaining</h4>
                      <h3>344/999</h3>
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
                        <span className="summ" data-price={cost}>
                          {quantity}
                        </span>
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
                        <span className="total_price">{totalPrice}</span> ETH + GAS
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mint_desc">
                <a
                  href="#"
                  className="metaportal_fn_button"
                  onClick={() => mintNFTs()}
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
                  <h4>Public Mint Ends In</h4>
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
                    data-date="October 13, 2023 12:30:00"
                    data-days={34}
                    data-hours={10}
                    data-minutes={20}
                    data-seconds={0}
                  >
                    0d: 0h: 0m: 0s
                  </h3>
                </div>
                <div className="mint_checked">
                  <p>
                    <span className="text">Whitelist:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                  <p>
                    <span className="text">Presale:</span>
                    <span className="status">
                      Soldout{" "}
                      <span className="icon">
                        <img
                          src="/svg/checked.svg"
                          alt=""
                          className="fn__svg"
                        />
                      </span>
                    </span>
                  </p>
                </div>
                <div className="mint_info">
                  <p>
                    You need to pay a GAS fee during minting. We allow max 5
                    mints per wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* !Mint Box */}
          {/* NFT Categories */}
          <div className="metaportal_fn_nft_cats">
            <ul>
              <li>
                <div className="item">
                  <h4 className="parent_category">Clothing</h4>
                  <h3 className="child_category" title="Black Yukata">
                    Black Yukata
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Daydreaming">
                    Daydreaming
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Special</h4>
                  <h3 className="child_category" title="Fireflies, Smoke">
                    Fireflies, Smoke
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Type</h4>
                  <h3 className="child_category" title="Human, Sand">
                    Human, Sand
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Mouth</h4>
                  <h3 className="child_category" title="Not Bad">
                    Not Bad
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Eyes</h4>
                  <h3 className="child_category" title="Striking">
                    Striking
                  </h3>
                </div>
              </li>
              <li>
                <div className="item">
                  <h4 className="parent_category">Neck</h4>
                  <h3 className="child_category" title="Zen Headphones">
                    Zen Headphones
                  </h3>
                </div>
              </li>
            </ul>
          </div>
          {/* !NFT Categories */}
          {/* Section Divider */}
          <SectionDivider />
          {/* !Section Divider */}
          {/* Section RoadMap */}
          <RoadMapSlider />
          {/* !Section RoadMap */}
          {/* Section Divider */}
          <SectionDivider />
          {/* !Section Divider */}
          {/* Similar Items */}
          <div className="metaportal_fn_similar">
            <h3 className="fn__maintitle" data-text="Similar Items">
              Similar Items
            </h3>
            <div className="fn_cs_divider">
              <div className="divider">
                <span />
                <span />
              </div>
            </div>
            <div className="metaportal_fn_drops">
              <ul className="grid">
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/1.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4588</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/2.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4587</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/3.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4586</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/4.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4585</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/5.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4584</a>
                      </h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="nft__item">
                    <div className="img_holder">
                      <img src="/img/drops/6.jpg" alt="" />
                      <Link href="/nft-single">
                        <a className="full_link" />
                      </Link>
                    </div>
                    <div className="title_holder">
                      <h3 className="fn_title">
                        <a href="#">Meta Legends #4583</a>
                      </h3>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* !Similar Items */}
        </div>
      </div>
    </Layout>
  );
};
export default NftSingle;
