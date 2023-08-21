import React, { useEffect } from "react";
import PageWrapper from "../src/components/PageWrapper";
import Layout from "../src/layout/Layout";
import { TypeAnimation } from "react-type-animation";
import { useGlobalContext } from "../context/GlobalContextProvider";

const World = () => {
  const options = ["COMING SOON ...", 1000, "PLEASE WAIT MOMENT...", 1000];
  const data = useGlobalContext();
  const { setIsSidebar } = data;

  useEffect(() => {
    setIsSidebar(false);
  }, []);

  return (
    <PageWrapper>
      <Layout pageTitle={"World"}>
        <div className="metaportal_fn_worldpage" style={{ height: "100vh" }}>
          <div className="world_mainT">
            <TypeAnimation sequence={options} speed={50} repeat={Infinity} />
          </div>
        </div>
      </Layout>
    </PageWrapper>
  );
};

export default World;

// const mapStateToProps = (state) => ({
//   navigation: state.site.navigation,
// });

// export default connect(mapStateToProps, { navigationToggle })(World);
