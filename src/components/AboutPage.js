import React from "react";
import About from "./About";
import Footer from "./Footer";
import Navigation from "./Navigation";

const AboutPage = () => {
  return (
    <div>
      <div className="u__margin__bottom__medium move-up">
        <Navigation />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
