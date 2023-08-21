import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { dataBgImg, imgToSVG } from "../utilits";
import Footer from "./Footer";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";
import ScrollTop from "./ScrollTop";
import Social from "./Social";
import Header from "./Header";

const Layout = ({ children, pageTitle }) => {
  useEffect(() => {
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
      {/* Left Navigation */}
      <Navigation />
      {/* !Left Navigation */}
      {/* Main */}
      <div className="metaportal_fn_main">
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
      </div>
    </Fragment>
  );
};
export default Layout;
