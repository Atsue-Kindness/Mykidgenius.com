import React from "react";
import "../main.css";

const cardRed = (props) => {
  return (
    <div>
      <div className="cardred">
        <div className="cardred__head">
          <h3>{props.title}</h3>
        </div>
        <div className="cardred__body-text">
          <p>{props.body}</p>
          <p>{props.body1}</p>
          <p>{props.body2}</p>
        </div>

        <a href="">Take class</a>
      </div>
    </div>
  );
};

export default cardRed;
