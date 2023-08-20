import React from "react";
import PageWrapper from "../src/components/PageWrapper";
import Layout from "../src/layout/Layout";
import { TypeAnimation } from "react-type-animation";

const world = () => {
  const options = ["COMING SOON ...", 1000, "PLEASE WAIT MOMENT...", 1000];

  return (
    <PageWrapper>
      <Layout pageTitle={"World"}>
        <div className="metaportal_fn_worldpage" style={{ height: "80vh" }}>
          <div>
            <TypeAnimation
              sequence={options}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
        </div>
      </Layout>
    </PageWrapper>
  );
};

export default world;
