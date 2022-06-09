import React from "react";
import "../main.css";
import { Link } from "react-router-dom";

const CardredThree = (props) => {
  return (
    <div className="cardred">
      <div className="cardred__head">
        <h3>{props.title}</h3>
      </div>
      <div className="cardred__body-text">
        <p>{props.body}</p>
        <p>{props.body1}</p>
        <p>{props.body2}</p>
      </div>

      <Link to={""}>Take class</Link>
    </div>
  );
};

export default CardredThree;
