import React from "react";
import "../main.css";

const cardlemon = (props) => {
  return (
    <div>
      <div className="cardlemon">
        <div className="cardlemon__head">
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

export default cardlemon;
