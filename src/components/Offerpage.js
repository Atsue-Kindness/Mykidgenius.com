import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Offers from "./Offers";

const Offerpage = () => {
  return (
    <div>
      <div className="u__margin__bottom__medium">
        <Navigation />
      </div>
      <Offers />
      <Footer />
    </div>
  );
};

export default Offerpage;
