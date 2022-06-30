import React from "react";
import "../main.css";

const cardRed = (props) => {
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

      {props.children}
    </div>
  );
};

export default cardRed;
