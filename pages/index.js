import { useState, useEffect } from "react";
import SectionDivider from "../src/components/SectionDivider";
import Layout from "../src/layout/Layout";
import Textmoving from "../src/components/Textmoving";
import Enter from "../src/components/Enter";
import PageWrapper from "../src/components/PageWrapper";
import Event from "../src/components/Event";
import News from "../src/components/News";
import Faq from "../src/components/Faq";

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
    <PageWrapper>
      <Layout pageTitle={"Home"}>
        <div id="main">
          {/* Enter */}

          <Enter showSecondComponent={showSecondComponent} />

          {/* Enter */}

          {/* WaterHero */}
          {/* <WaterHero /> */}
          {/* WaterHero */}

          {/* Fun Facts */}
          {/* <FunFacts /> */}
          {/* !Fun Facts */}

          {/* Event */}
          {/* Event Slider */}
          <Event />
          {/* <EventSlider /> */}
          {/* Event Slider */}
          {/* Event */}

          {/* About */}
          {/* <About /> */}
          {/* About  */}

          {/* Section News */}
          <News />
          {/* !Section News */}

          {/* Section Textmoving */}
          <Textmoving />
          {/* Section Parallax */}
          {/* Section Divider */}
          {/* <SectionDivider /> */}
          {/* !Section Divider */}
          {/* Collection Section */}
          {/* <Collection /> */}
          {/* !Collection Section */}
          {/* Section Divider */}
          {/* !Section Divider */}

          {/* Section Divider */}
          {/* <SectionDivider /> */}
          {/* !Section Divider */}
          {/* Section FAQ */}
          <Faq />
          {/* !Section FAQ */}
          {/* Section Divider */}
          {/* <SectionDivider /> */}
          {/* !Section Divider */}
          {/* Section */}
          {/* <Contact /> */}
        </div>
      </Layout>
    </PageWrapper>
  );
};
export default Index;
