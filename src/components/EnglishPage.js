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

const EnglishPage = () => {
  return (
    <div>
      <Navigation />

      <div className="maths">
        <h1>English</h1>
        <div className="maths__line"></div>

        <div className="maths__container">
          <Cardred
            title="Nursery/Reception"
            body="Frequency Words"
            body1="Alphabet"
            body2="Associating Letter With objects"
          />

          <Cardteal
            title="Key stage 1 Year 1"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <Cardyellow
            title="Key stage 1 Year 2"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardOrange
            title="Key stage 2 Year 3"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <Cardlemon
            title="Key stage 2 Year 4"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <Cardred
            title="Key stage 2 Year 5"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Name of things (Noun)"
          />

          <Cardred
            title="Key stage 2 Year 4"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <Cardteal
            title="Key stage 2 Year 5"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <Cardyellow
            title="Key stage 2 Year 6"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />
        </div>

        <Earn />
        <Footer />
      </div>
    </div>
  );
};

export default EnglishPage;
