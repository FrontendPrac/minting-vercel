import { useState, useEffect } from "react";
import Layout from "../src/layout/Layout";
import Enter from "../src/components/Enter";
import PageWrapper from "../src/components/PageWrapper";
import Event from "../src/components/Event";
import News from "../src/components/News";
import Faq from "../src/components/Faq";
import { useGlobalContext } from "../context/GlobalContextProvider";

const Index = () => {
  const data = useGlobalContext();
  const { setIsSidebar } = data;

  const [showSecondComponent, setShowSecondComponent] = useState(false);

  useEffect(() => {
    setIsSidebar(false);
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

          {/* Event */}
          <Event />

          {/* Section News */}
          <News />
          {/* !Section News */}

          {/* Section FAQ */}
          <Faq />
          {/* !Section FAQ */}
        </div>
      </Layout>
    </PageWrapper>
  );
};
export default Index;
