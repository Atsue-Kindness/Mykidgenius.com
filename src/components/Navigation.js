import React from "react";
import logo from "../imgs/mykidgenius-logo.svg";
import "../main.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <Link to={"/home"}>
          <img src={logo} alt="" />
        </Link>
      </div>

      <ul className="navigation__link">
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          <Link to={"/offer"}>Programs</Link>
        </li>
        <li>
          <Link to={"about"}>About us</Link>
        </li>
        <li>
          <Link to={"/home"}>Blog</Link>
        </li>
      </ul>

      <div className="navigation__hambugger">
        <div className="navigation__hambugger__boxes"></div>
        <div className="navigation__hambugger__boxes"></div>
        <div className="navigation__hambugger__boxes"></div>
      </div>

      <Link to={"/signup"} className="btn-red" href="">
        Login/Signup
      </Link>
    </div>
  );
};

export default Navigation;
