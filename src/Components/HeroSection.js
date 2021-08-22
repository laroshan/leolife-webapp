import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import img404 from "../images/404.jpg";

function HeroSection({ isVid, vid, img, title, subtitle, btnText }) {
  return (
    <div className="hero-container">
      {{ isVid } ? (
        <video src={vid} autoPlay loop muted />
      ) : (
        <img src={img404} alt="bg" />
      )}
      {/* <video src={vid} autoPlay loop muted /> */}
      {/* <img src={img404} alt="bg" /> */}
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {btnText}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
