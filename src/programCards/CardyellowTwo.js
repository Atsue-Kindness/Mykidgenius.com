import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const CardyellowTwo = (props) => {
  return (
    <div className="cardyellow">
      <div className="cardyellow__head">
        <h3>{props.title}</h3>
      </div>
      <div className="cardyellow__body-text">
        <p>{props.body}</p>
        <p>{props.body1}</p>
        <p>{props.body2}</p>
      </div>
      <Link to={""}>Take class</Link>
    </div>
  );
};

export default CardyellowTwo;
