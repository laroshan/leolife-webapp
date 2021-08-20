import React from "react";
import video1 from "../videos/leolifevideo1.mp4";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video1} autoPlay loop muted />
      <h1>Welcome To LD LeoLife</h1>
      <p>Let's Do Shopping</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
