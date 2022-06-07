import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Offers from "./components/Offers";
import About from "./components/About";
import Testimony from "./components/Testimony";
import Earn from "./components/Earn";
import Footer from "./components/Footer";

const Landingpage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Offers />
      <About />
      <Testimony />
      <Earn />
      <Footer />
    </div>
  );
};

export default Landingpage;
