import React from "react";
import "../main.css";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Earn from "./Earn";
import Footer from "./Footer";
import Cardteal from "../programCards/Cardteal";
import Cardyellow from "../programCards/Cardyellow";
import Cardorange from "../programCards/CardOrange";
import Cardlemon from "../programCards/Cardlemon";
import Cardred from "../programCards/Cardred";

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
          >
            <Link to={"/about"}>Take class</Link>
          </Cardred>

          <Cardteal
            title="Key stage 1 Year 1"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardteal>

          <Cardyellow
            title="Key stage 1 Year 2"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardyellow>

          <Cardorange
            title="Key stage 2 Year 3"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardorange>

          <Cardlemon
            title="Key stage 2 Year 4"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardlemon>

          <Cardred
            title="Key stage 2 Year 5"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Name of things (Noun)"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardred>

          <Cardred
            title="Key stage 2 Year 4"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardred>

          <Cardteal
            title="Key stage 2 Year 5"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardteal>

          <Cardyellow
            title="Key stage 2 Year 6"
            body="Name of things (Noun)"
            body1="Singular and plural"
            body2="Identifying Proper Nouns"
          >
            <Link to={"/home"}>Take class</Link>
          </Cardyellow>
        </div>

        <Earn />
        <Footer />
      </div>
    </div>
  );
};

export default EnglishPage;
