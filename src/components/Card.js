import React from "react";
import "../main.css";
import testimphoto from "../imgs/Rectangle 8.png";

const Card = (props) => {
  return (
    <div className="testimonials">
      <div className="carousel">
        <div className="carousel__left">
          <img className="carousel__left__img" src={testimphoto} alt="" />
        </div>

        <div className="carousel__right">
          <p className="carousel__right__paragraph">{props.paragraph}</p>

          <div className="carousel__right__div"></div>

          <p className="carousel__right__name">{props.name}</p>
          <p className="carousel__right__country">{props.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
