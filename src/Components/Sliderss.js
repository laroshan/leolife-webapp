import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import React, { Component } from "react";
// import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import styled from "styled-components";

import img1 from "../images/kitchen.jpg";
import img2 from "../images/colorful-cleaning.jpg";
import img3 from "../images/curaten.jpeg";
import img4 from "../images/cooking.jpg";

// import AwesomeSliderStyles from "react-awesome-slider/dist/styles.css";
// import "react-awesome-slider/dist/styles.css";
import AwesomeSliderStyles from "react-awesome-slider/dist/captioned.css";
export default class Sliderss extends Component {
  render() {
    return (
      <SliderWrapper>
        <AutoplaySlider
          className="slider"
          cssModule={AwesomeSliderStyles}
          play={true}
          interval={3000}
          bullets={false}
        >
          <div data-src={img4} className="image__description">
            <h1>Alimentos Finos Mexicanos</h1>
            <p>De exportación saludable.</p>
          </div>
          <div data-src={img3} className="image__description">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <div data-src={img1} className="image__description">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </AutoplaySlider>
      </SliderWrapper>
    );
  }
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexWrap: "wrap",
    overflowY: "scroll",
    width: "80%",
    height: "50vh",
    justifyContent: "space-between",
  },
};
const AutoplaySlider = withAutoplay(AwesomeSlider);

// function Sliderss() {
//   return (
//     <div>
//       <Slider />
//     </div>
//   );
// }

// export default Sliderss;

const SliderWrapper = styled.div`
  .slider {
    /* margin-top: 100px; */
    /* top: 50%;
    left: 50%;
    right: auto;
    bottom: auto; */
    /* margin-right: -50%; */
    /* transform: translate(-50%, -50%); */
    display: flex;
    flex-wrap: wrap;
    /* overflow-y: scroll; */
    width: 100%;
    height: 50vh;
    /* justify-content: space-between; */
  }

  .image__description {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;
