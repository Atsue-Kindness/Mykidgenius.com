import React from "react";
import AccordianData from "./AccordianData";
import { useState } from "react";
import "../main.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import Navigation from "./Navigation";

const Accordian = () => {
  const [clicked, setClick] = useState(false);

  const toggle = (i) => {
    if (clicked === i) {
      setClick(null);
    }
    setClick(i);
  };

  return (
    <div>
      <Navigation />
      <div className="keys maths">
        <div className="keys__titles">
          <h2 className="keys__titles__eng">English</h2>
          <h2 className="keys__titles__nurs">Nursery/Reception</h2>
        </div>

        <div className="maths__line"></div>
      </div>
      <div className="accordion-box">
        <div className="accordian">
          {AccordianData.map((item, i) => (
            <div className="accordian__items">
              <div
                className="accordian__items__one"
                onClick={() => toggle(i)}
                key={i}
              >
                <div>
                  <span>
                    {clicked === i ? <FaChevronDown /> : <FaChevronUp />}
                  </span>

                  <p>{item.cont1}</p>
                </div>

                <div></div>
              </div>

              {clicked === i ? (
                <div className="accordian__items__hidden-box">
                  <ol className="accordian__items__hidden-box__lists">
                    <li>{item.listOne}</li>
                    <li>{item.listtwo}</li>
                    <li>{item.listThree}</li>
                  </ol>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      );
    </div>
  );
};

export default Accordian;
