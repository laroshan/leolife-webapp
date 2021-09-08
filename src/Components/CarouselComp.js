// import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/custom-animations/cube-animation.css";
// import React from "react";
import styled from "styled-components";

import img1 from "../images/kitchen.jpg";
import img2 from "../images/colorful-cleaning.jpg";
import img3 from "../images/curaten.jpeg";
import img4 from "../images/cooking.jpg";

import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
const buttonStyle = {
  padding: "15px",
  borderRadius: "50%",
  background: "red",
  opacity: 0.7,
  fontSize: "20px",
};
const contentStyle = {
  color: "var(--mainWhite)",
  fontSize: "20px",
};
const bgImg = {
  position: "absolute",
  zIndex: -1,
  left: 0,
  top: 0,
  height: "60vh",
  width: "100%",
};

export default function App() {
  return (
    <SliderWrapper>
      <AwesomeSlider
        organicArrows={true}
        buttonContentRight={<p style={buttonStyle}>{">"}</p>}
        buttonContentLeft={<p style={buttonStyle}>{"<"}</p>}
        customContent={<p style={contentStyle}>{"I am the content/text"}</p>}
        // cancelOnInteraction={false} // should stop playing on user interaction
        // interval={6000}
        play={true}
        interval={3000}
        bullets={false}
        className="main-slide"
      >
        <div style={{ zIndex: 2 }}>
          <div>
            <img style={bgImg} alt="Wow" src={img3} />
            <h1>Microsoft</h1>
            <h2>Nice to see you</h2>
            <button> Click Me </button>
          </div>
        </div>
        <div style={{ zIndex: 2 }}>
          <div>
            <img style={bgImg} alt="Wow" src={img1} />
            <h1>Microsoft 2</h1>
            <h2>Nice to see you</h2>
          </div>
        </div>
      </AwesomeSlider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  .main-slide {
    height: 60vh;
  }
`;
