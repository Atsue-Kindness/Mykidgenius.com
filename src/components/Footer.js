import React from "react";
import footerLogo from "../imgs/mykidgenius-logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__box">
        <div className="footer__box__1">
          <div className="footer__box__1__logo-box">
            <img
              className="footer__box__1__logo-box__logo"
              src={footerLogo}
              alt=""
            />
          </div>
          <p>
            We have been offering affordable educational opportunities since
            1990, combining knowledge with entertainment.
          </p>
        </div>
        <div className="footer__box__2">
          <a href="">Blog</a>
          <a href="">Earning</a>
        </div>
        <div className="footer__box__3">
          <a href="">Terms and Conditions</a>
          <a href="">Privacy and Policy</a>
        </div>
        <div className="footer__box__4">
          <h5>Contact us</h5>
          <p>(+44) 784 651 3062 - UK</p>
          <p>info@mykidgenius.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
