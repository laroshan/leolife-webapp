import React from "react";
import HeroSectionImg from "../Components/HerSectionImg";
import img from "../images/404.jpg";
import { Link } from "react-router-dom";

function Default() {
  return (
    <div>
      <HeroSectionImg max={true} title="There was en error" img={img}>
        <h2 className="text-uppercase">page not found</h2>
        <Link to="/" className="main-link">
          return home
        </Link>
      </HeroSectionImg>
    </div>
  );
}

export default Default;
