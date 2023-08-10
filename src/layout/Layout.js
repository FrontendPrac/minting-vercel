import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataBgImg,
  holdSection,
  imgToSVG,
  requestConnectWallet,
} from "../utilits";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Searchbox from "./Searchbox";
import SearchButton from "./SearchButton";
import Social from "./Social";
import WalletPopUp from "./WalletPopUp";
const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    // Check if the window.ethereum object is available
    if (typeof window.ethereum !== "undefined") {
      // Check install metamask
      if (window.ethereum.selectedAddress) {
        // Check if the connect to metamask
        // Request access to the user's Ethereum account
        requestConnectWallet();
        console.log("메타마스크 로직을 작성해주세요.");
      } else {
        alert("메타마스크를 연결해주세요.");
      }
    } else {
      alert("메타마스크를 설치해주세요.");
    }

    holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>a:rzmeta | {pageTitle}</title>
      </Head>
      <ImageView />
      <VideoPopup />
      <PreLoader />
      {/* !Preloader */}
      {/* Left Navigation */}
      <Navigation />
      {/* !Left Navigation */}
      {/* Searchbox Popup */}
      <Searchbox />
      {/* !Searchbox Popup */}
      {/* Wallet Popup */}
      <WalletPopUp />
      {/* !Wallet Popup */}
      {/* Main */}
      <div className="metaportal_fn_main">
        {/* Mobile Navigation */}
        <MobileNavigation />
        {/* !Mobile Navigation */}
        {/* Header */}
        <Header />
        {/* !Header */}
        {/* Content */}
        <div className="metaportal_fn_content">
          {children}
          {/* Footer */}
          <Footer />
          {/* !Footer */}
        </div>
        {/* !Content */}
        {/* Social */}
        <Social />
        {/* !Social */}
        {/* Totop */}
        <ScrollTop />
        {/* /Totop */}
        {/* Search Button */}
        <SearchButton />
        {/* !Search Button */}
      </div>
    </Fragment>
  );
};
export default Layout;
