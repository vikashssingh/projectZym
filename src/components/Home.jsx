import React from "react";
import MiddleSection from "./MiddleSection";
import Middle from "./Middle";

import TopSection from "./TopSection";

const Home = () => {
  return (
    <>
      <div className="home">
        <TopSection />
        <MiddleSection />
        <Middle />
      </div>
    </>
  );
};

export default Home;
