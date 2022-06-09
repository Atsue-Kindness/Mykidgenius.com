import React from "react";
import "../main.css";
import Navigation from "./Navigation";
import Cardred from "../programCards/Cardred";
import Cardteal from "../programCards/Cardteal";
import Cardyellow from "../programCards/Cardyellow";
import CardOrange from "../programCards/CardOrange";
import Cardlemon from "../programCards/Cardlemon";
import Earn from "./Earn";
import Footer from "./Footer";
import Cardredtwo from "../programCards/Cardredtwo";
import CardredThree from "../programCards/CardredThree";
import CardredFour from "../programCards/CardredFour";
import CardtealTwo from "../programCards/CardtealTwo";
import CardyellowTwo from "../programCards/CardyellowTwo";
import CardorangeTwo from "../programCards/CardorangeTwo";
import CardlemonTwo from "../programCards/CardlemonTwo";

const MathsPage = () => {
  return (
    <div>
      <Navigation />

      <div className="maths">
        <h1>Maths</h1>
        <div className="maths__line"></div>

        <div className="maths__container">
          <Cardred
            title="Nursery/Reception"
            body="Matching of fraction with objects"
            body1="Season of the year"
            body2="Multiplying digits of numbers"
          />

          <Cardteal
            title="Year 1"
            body="Numbering and counting"
            body1="Naming the shapes of an object"
            body2="Comparing two group of coins"
          />

          <Cardyellow
            title="Year 2"
            body="Whole number"
            body1="Time of the day"
            body2="Simple Geometrics"
          />

          <CardOrange
            title="Year 3"
            body="Fraction of numbers"
            body1="Addition and subtraction"
            body2="Mixed operation on decimal"
          />

          <Cardlemon
            title="Year 4"
            body="Place value"
            body1="Estimation"
            body2="Multiplication of numbers"
          />

          <Cardredtwo
            title="Year 5"
            body="Average speed/temperature"
            body1="Fraction and Decimal"
            body2="Percentage"
          />

          <CardredThree
            title="Year 6"
            body="Square and square roots"
            body1="Addition of fraction"
            body2="Ration, Proportion and Percentage"
          />

          <CardtealTwo
            title="Year 7"
            body="Whole Number"
            body1="Indices and standard form"
            body2="Data Presentation"
          />

          <CardyellowTwo
            title="Year 8"
            body="Solving Equation"
            body1="Pythagoras Rule"
            body2="Cylinder and line"
          />

          <CardorangeTwo
            title="Year 9"
            body="Factorization"
            body1="Plane shape"
            body2="Trigonometry"
          />

          <CardlemonTwo
            title="Year 10"
            body="Algebra"
            body1="Set"
            body2="Mesuration"
          />

          <CardredFour
            title="Year 11"
            body="Geometry"
            body1="Statistics"
            body2="Linear inequality"
          />
        </div>

        <Earn />
        <Footer />
      </div>
    </div>
  );
};

export default MathsPage;
