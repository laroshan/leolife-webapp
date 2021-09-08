import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

import img1 from "../images/kitchen.jpg";
import img2 from "../images/colorful-cleaning.jpg";
import img3 from "../images/curaten.jpeg";
import img4 from "../images/cooking.jpg";

export default function MaterialCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      img: { img1 },
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: { img2 },
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      img: { img3 },
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src={props.item.img} />
      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
