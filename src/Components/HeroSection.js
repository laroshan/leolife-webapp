import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import styled from "styled-components";

function HeroSection({ isVid, vid, imgs, title, subtitle, btnText }) {
  return (
    <HeroWrapper>
      <div className="hero-container">
        {isVid ? (
          <video src={vid} autoPlay loop muted />
        ) : (
          <img src={imgs} alt="bg" />
        )}
        {/* <video src={vid} autoPlay loop muted /> */}
        {/* <img src={img404} alt="bg" /> */}
        <div className="container">
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
      </div>
    </HeroWrapper>
  );
}

export default HeroSection;

const HeroWrapper = styled.div`
  .hero-container {
    background: url("../images/IMG_3.jpeg") center center/cover no-repeat;
  }
`;
