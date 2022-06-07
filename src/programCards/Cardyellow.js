import React from "react";
import "../main.css";

const Cardyellow = (props) => {
  return (
    <div>
      <div className="cardyellow">
        <div className="cardyellow__head">
          <h3>{props.title}</h3>
        </div>
        <div className="cardyellow__body-text">
          <p>{props.body}</p>
          <p>{props.body1}</p>
          <p>{props.body2}</p>
        </div>
        <a href="">Take class</a>
      </div>
    </div>
  );
};

export default Cardyellow;
