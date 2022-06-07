import React from "react";
import { useState } from "react";
import logo from "../imgs/mykidgenius-logo.svg";
import "../main.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Navigation = () => {
  const [change, setChange] = useState("hide");

  return (
    <div className="nav-box">
      <div className="navigation">
        <div className="logo">
          <Link to={"/home"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="navigation__link" id={change}>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/offer"}>Programs</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/home"}>Blog</Link>
          </li>

          <Link to={"/signup"} className="btn-red navigation__btn" href="">
            Login/Signup
          </Link>
        </ul>

        <div
          className="navigation__hambugger"
          onClick={() =>
            change === "hide" ? setChange("show") : setChange("hide")
          }
        >
          {change === "hide" ? (
            <GiHamburgerMenu size={30} />
          ) : (
            <GrClose size={30} />
          )}

          {/* <div className="navigation__hambugger__lines navigation__hambugger__line1"></div>
          <div className="navigation__hambugger__lines navigation__hambugger__line2"></div>
          <div className="navigation__hambugger__lines navigation__hambugger__line3"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
