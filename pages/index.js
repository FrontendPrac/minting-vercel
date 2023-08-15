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
import { Video } from "../src/components/Video";
import Textmoving from "../src/components/Textmoving";
import Front from "../src/components/Front";
import { CSSTransition } from "react-transition-group";
import Enter from "../src/components/Enter";

const WaterHero = dynamic(() => import("../src/components/WaterHero"), {
  ssr: false,
});

const Index = () => {
  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("scrollPosition: ", scrollPosition);
      console.log("windowHeight: ", windowHeight);

      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition) {
        setShowSecondComponent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout pageTitle={"Home"}>
      {/* Enter */}
      <Enter showSecondComponent={showSecondComponent} />
      {/* Enter */}

      {/* WaterHero */}
      <WaterHero />
      {/* WaterHero */}

      {/* Fun Facts */}
      {/* <FunFacts /> */}
      {/* !Fun Facts */}

      {/* Event */}
      {/* Event Slider */}
      <Event />
      <EventSlider />
      {/* Event Slider */}
      {/* Event */}

      {/* About */}
      <About />
      {/* About  */}
      {/* Section Textmoving */}
      <SectionDivider />
      <Textmoving />
      {/* Section Parallax */}
      {/* Section Divider */}
      {/* <SectionDivider /> */}
      {/* !Section Divider */}
      {/* Collection Section */}
      {/* <Collection /> */}
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
