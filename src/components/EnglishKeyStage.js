import React from "react";
import "../main.css";
import Accordian from "./Accordian";
import Earn from "./Earn";
import Footer from "./Footer";
import Navigation from "./Navigation";

const EnglishKeyStage = () => {
  return (
    <div>
      <Navigation />
      <div className="keys maths">
        <div className="keys__titles">
          <h2 className="keys__titles__eng">English</h2>
          <h2 className="keys__titles__nurs">Nursery/Reception</h2>
        </div>

        <div className="maths__line"></div>

        <div className="keys__topic">
          <div className="keys__topic__one">
            <p>Alphabets</p>
            <h2>What Alphabet comes after V</h2>
            <form className="keys__topic__one__form" action="">
              <label htmlFor="answer">Answer</label>
              <input
                type="text"
                id="answer"
                name="answer"
                placeholder="Type answer here"
              />

              <button type="submit">Submit</button>
            </form>
          </div>

          <div className="keys__topic__two">
            <div className="keys__topic__two__box">
              <p className="keys__topic__two__box__p1">Question Atempted</p>
              <p className="keys__topic__two__box__ptwo">0</p>
            </div>
            <div className="keys__topic__two__box">
              <p className="keys__topic__two__box__p1">score</p>
              <p className="keys__topic__two__box__ptwo">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="earn-footer">
        <Earn />
        <Footer />
      </div>
    </div>
  );
};

export default EnglishKeyStage;
