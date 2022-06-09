import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const CardtealTwo = (props) => {
  return (
    <div className="cardteal">
      <div className="cardteal__head">
        <h3>{props.title}</h3>
      </div>

      <div className="cardteal__body-text">
        <p>{props.body}</p>
        <p>{props.body1}</p>
        <p>{props.body2}</p>
      </div>
      <Link to={""}>Take class</Link>
    </div>
  );
};

export default CardtealTwo;
