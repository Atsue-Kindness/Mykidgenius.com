import React from "react";
import photo2 from "../imgs/About.png";
import "../main.css";

const About = () => {
  return (
    <div className="about-box">
      <div className="red-circle"></div>
      <div className="green-circle-2"></div>
      <div className="heading-primary">
        <h2>About Us</h2>
        <div className="heading-primary__yellow-one"></div>
      </div>

      <div className="about u__margin__bottom__large">
        <div className="about__left">
          <img src={photo2} alt="" />
        </div>

        <div className="about__right">
          <p>
            We are a group of educationist who have combined our skills together
            to improve the skills of children in English and Maths from ages 2
            to 16 years. <br /> <br /> We have been offering affordable
            educational opportunities since 1995 combining knowledge with
            entertainment. <br /> <br /> We aim at making all children perform
            well in both English and Math through practices that look like play.
          </p>

          <a href="">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default About;
