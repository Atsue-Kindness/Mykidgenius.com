import React from "react";
import "../main.css";
import Earn from "../components/Earn";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { ImBook } from "react-icons/im";

const MathsClassOne = () => {
  return (
    <div>
      <Navigation />
      <div className="keys maths">
        <div className="keys__titles">
          <h2 className="keys__titles__eng">Maths</h2>
          <h2 className="keys__titles__nurs">Nursery/Reception</h2>
        </div>

        <div className="maths__line"></div>

        <div className="keys__topic">
          <div className="keys__topic__one">
            <p>Counting up to five</p>
            <h2>How many books are there?</h2>
            <div className="keys__topic__one__items">
              <ImBook size={60} />
              <ImBook size={60} />
              <ImBook size={60} />
            </div>
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

export default MathsClassOne;
