import React from "react";
import heroimg from "../imgs/kids-technology-concept-large.png";
import "../main.css";
import logowhite from "../imgs/mykidgenius background logo white.svg";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero__left">
          <h1>
            Boost your <br /> Child's Confidence in <br />{" "}
            <span>Maths and English</span>
          </h1>
          <a className="btn-red2" href="">
            Learn More
          </a>
        </div>

        <div className="hero__right">
          <img src={heroimg} alt="" />
        </div>
      </div>

      <div className="logo-white u__margin__bottom__large">
        <img src={logowhite} alt="" />
      </div>
    </div>
  );
};

export default Hero;
