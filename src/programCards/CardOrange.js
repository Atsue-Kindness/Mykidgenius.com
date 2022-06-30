import React from "react";
import "../main.css";

const Cardorange = (props) => {
  return (
    <div className="cardorange">
      <div className="cardorange__head">
        <h3>{props.title} </h3>
      </div>
      <div className="cardorange__body-text">
        <p>{props.body}</p>
        <p>{props.body1}</p>
        <p>{props.body2}</p>
      </div>

      {props.children}
    </div>
  );
};

export default Cardorange;
