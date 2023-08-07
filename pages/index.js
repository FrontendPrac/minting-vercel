import { useState, useEffect } from "react";
import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import { heroSlider2 } from "../src/utilits";

import dynamic from "next/dynamic";
import Event from "../src/components/Event";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    heroSlider2();
  }, []);

  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section #2 */}
      <WaterHero />
      {/* !Home Section #2 */}
      {/* Fun Facts */}
      <FunFacts />
      {/* !Fun Facts */}
      {/* Event */}
      <Event />
      {/* Event */}
      {/* Card Slider */}
      <div
        className="frenify_cards_gallery"
        data-initial-width={400}
        data-ratio="0.925"
      >
        <ul>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
          <li>
            <div className="img_holder">
              <div className="item_in">
                <div className="o_img" data-bg-img="/img/event/nft_ticket.png" />
                <img src="/img/1x1.jpg" alt="" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* !Card Slider */}
      {/* !Home Section #2 */}
      {/* Section About #2 */}
      <About />
      {/* !Section About #2 */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Collection Section */}
      <Collection />
      {/* !Collection Section */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section News */}
      <News />
      {/* !Section News */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section FAQ */}
      <Faq />
      {/* !Section FAQ */}
      {/* Section Divider */}
      <SectionDivider />
      {/* !Section Divider */}
      {/* Section */}
      <Contact />
    </Layout>
  );
};
export default Index;
