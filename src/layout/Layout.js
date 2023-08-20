import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  checkNetwork,
  dataBgImg,
  holdSection,
  imgToSVG,
  requestConnectWallet,
} from "../utilits";
import Footer from "./Footer";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Searchbox from "./Searchbox";
import SearchButton from "./SearchButton";
import Social from "./Social";
import WalletPopUp from "./WalletPopUp";
import { useAlert } from "react-alert";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
    // holdSection();
    imgToSVG();
    dataBgImg();
  }, []);

  return (
    <Fragment>
      <section id="layout">
        <div className="alert_modal">
          <div className="alert_box">
            <div className="modal_content">
              <p>Checkout</p>
              <span>메타마스크를 설치하세요.</span>
              <a href="" className="alert_modal_btn">
                Add funds
              </a>
            </div>
          </div>
        </div>
      </section>
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
      {/* <Searchbox /> */}
      {/* !Searchbox Popup */}
      {/* Wallet Popup */}
      {/* <WalletPopUp /> */}
      {/* !Wallet Popup */}
      {/* Main */}
      <div className="metaportal_fn_main">
        {/* Mobile Navigation */}
        {/* <MobileNavigation /> */}
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
        {/* <SearchButton /> */}
        {/* !Search Button */}
      </div>
    </Fragment>
  );
};
export default Layout;
