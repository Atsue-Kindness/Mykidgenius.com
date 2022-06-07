import React from "react";
import "../main.css";

const Cardteal = (props) => {
  return (
    <div>
      <div className="cardteal">
        <div className="cardteal__head">
          <h3>{props.title}</h3>
        </div>

        <div className="cardteal__body-text">
          <p>{props.body}</p>
          <p>{props.body1}</p>
          <p>{props.body2}</p>
        </div>
        <a href="">Take class</a>
      </div>
    </div>
  );
};

export default Cardteal;
