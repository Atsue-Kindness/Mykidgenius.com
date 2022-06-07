import React from "react";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="offers u__margin__bottom__large">
      <div className="green-circle"></div>
      <div className="yellow-circle"></div>

      <div className="heading-primary">
        <h2>What we offer</h2>
        <div className="heading-primary__yellow-one"></div>
      </div>

      <div className="offers__container">
        <div className="offers__container__one">
          <h2>Maths</h2>
          <p>
            Detailed analysis and signals on all pairs, we monitors all trades
            to maximizes profit. Expert in trading binary synthetic indices
            including volatility indices
          </p>
          <Link to={"/maths"}>View Maths topics</Link>
        </div>

        <div className="offers__container__two">
          <h2>English</h2>
          <p>
            Detailed analysis and signals on all pairs, we monitors all trades
            to maximizes profit. Expert in trading binary synthetic indices
            including volatility indices
          </p>
          <Link to={"/english"}>View English topics</Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
