import React from "react";
import "../main.css";
import Navigation from "./Navigation";
import Earn from "./Earn";
import Footer from "./Footer";
import CardredEone from "../englisg program card/CardredEone";
import CardredEtwo from "../englisg program card/CardredEtwo";
import CardredEthree from "../englisg program card/CardredEthree";
import CardyellowEone from "../englisg program card/CardyellowEone";
import CardorangeEone from "../englisg program card/CardorangeEone";
import CardtealEtwo from "../englisg program card/CardtealEtwo";
import CardtealEone from "../englisg program card/CardtealEone";
import CardlemonEone from "../englisg program card/CardlemonEone";

const EnglishPage = () => {
  return (
    <div>
      <Navigation />

      <div className="maths">
        <h1>English</h1>
        <div className="maths__line"></div>

        <div className="maths__container">
          <CardredEone
            title="Nursery/Reception"
            body="Frequency Words"
            body1="Alphabet"
            body2="Associating Letter With objects"
          />

          <CardtealEone
            title="Key stage 1 Year 1"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardyellowEone
            title="Key stage 1 Year 2"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardorangeEone
            title="Key stage 2 Year 3"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardlemonEone
            title="Key stage 2 Year 4"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardredEtwo
            title="Key stage 2 Year 5"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Name of things (Noun)"
          />

          <CardredEthree
            title="Key stage 2 Year 4"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardtealEtwo
            title="Key stage 2 Year 5"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          />

          <CardyellowEone
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
