import { useEffect } from "react";
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

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    return () => {
      heroSlider2();
    };
  }, []);

  return (
    <Layout pageTitle={"Home"}>
      {/* Home Section #2 */}
      <WaterHero />
      {/* !Home Section #2 */}
      {/* Fun Facts */}
      <FunFacts />
      {/* !Fun Facts */}
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
