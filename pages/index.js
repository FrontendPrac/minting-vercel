import { useState, useEffect } from "react";
import About from "../src/components/About";
import Collection from "../src/components/Collection";
import Contact from "../src/components/Contact";
import FunFacts from "../src/components/FunFacts";
import Faq from "../src/components/Faq";
import News from "../src/components/News";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
import Event from "../src/components/Event";
import EventSlider from "../src/components/EventSlider";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section #2 */}
      <WaterHero />
      {/* !Home Section #2 */}
      {/* Fun Facts */}
      {/* <FunFacts /> */}
      {/* !Fun Facts */}
      {/* Event */}
      <Event />
      {/* Event */}
      {/* Event Slider */}
      <EventSlider />
      {/* !Event Slider */}
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
      {/* <Contact /> */}
    </Layout>
  );
};
export default Index;
