import React from "react";
import Accordiononedata from "./AccordionOneData";
import { useState } from "react";
import "../main.css";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const AccordionOne = () => {
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
          <h2 className="keys__titles__eng">Maths</h2>
          <h2 className="keys__titles__nurs">Nursery/Reception</h2>
        </div>

        <div className="maths__line"></div>
      </div>
      <div className="accordion-box">
        <div className="accordian">
          {Accordiononedata.map((item, i) => (
            <div className="accordian__items" key={i}>
              <div className="accordian__items__one" onClick={() => toggle(i)}>
                <div>
                  <span>
                    {clicked === i ? <FaChevronDown /> : <FaChevronUp />}
                  </span>

                  <p>{item.cont1}</p>
                </div>

                <BsFillPlayCircleFill className="play-btn" size={25} />
              </div>

              {clicked === i ? (
                <div className="accordian__items__hidden-box">
                  <ol className="accordian__items__hidden-box__lists">
                    {item.list1 ? (
                      <li>
                        <Link to={"/takeclass"}>{item.list1}</Link>
                      </li>
                    ) : null}
                    {item.list2 ? (
                      <li>
                        <Link to={""}>{item.list2}</Link>
                      </li>
                    ) : null}
                    {item.list3 ? (
                      <li>
                        <Link to={""}>{item.list3}</Link>
                      </li>
                    ) : null}
                    {item.list4 ? (
                      <li>
                        <Link to={""}>{item.list4}</Link>
                      </li>
                    ) : null}
                    {item.list5 ? (
                      <li>
                        <Link to={""}>{item.list5}</Link>
                      </li>
                    ) : null}
                    {item.list6 ? (
                      <li>
                        <Link to={""}>{item.list6}</Link>
                      </li>
                    ) : null}
                    {item.list7 ? (
                      <li>
                        <Link to={""}>{item.list7}</Link>
                      </li>
                    ) : null}
                    {item.list8 ? (
                      <li>
                        <Link to={""}>{item.list8}</Link>
                      </li>
                    ) : null}
                    {item.list9 ? (
                      <li>
                        <Link to={""}>{item.list9}</Link>
                      </li>
                    ) : null}
                    {item.list10 ? (
                      <li>
                        <Link to={""}>{item.list10}</Link>
                      </li>
                    ) : null}
                  </ol>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionOne;
