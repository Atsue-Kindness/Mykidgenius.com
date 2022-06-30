import React from "react";
import Card from "./Card";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Card
          paragraph="I couldn’t believe how fast it took for my little son to
            become a genius in maths. Thank you mykidgenius."
          name="Math Seth"
          country="Brighton-England"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Card
          paragraph="I couldn’t believe how fast it took for my little son to
            become a genius in maths. Thank you mykidgenius."
          name="Math Seth"
          country="Brighton-England"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Card
          paragraph="I couldn’t believe how fast it took for my little son to
            become a genius in maths. Thank you mykidgenius."
          name="Math Seth"
          country="Brighton-England"
        />
      </Carousel.Item>
    </Carousel>
  );
};
