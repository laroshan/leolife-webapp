import React from "react";
import styled from "styled-components";
import mainBcg from "../images/IMG_3.jpeg";

function HeroSectionImg({ img, mobImg, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img} mobImg={mobImg}>
      <div className="banner">
        <div className="title">{title}</div>
        {children}
      </div>
    </HeroWrapper>
  );
}

export default HeroSectionImg;

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.max ? "72vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${(props) => props.img}) center/cover no-repeat;
  .title {
    padding-top: 2rem;
    font-size: 3.5rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }

  @media screen and (max-width: 960px) {
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
      url(${(props) => props.mobImg}) center/cover no-repeat;
  }
`;

HeroSectionImg.defaultProps = {
  img: mainBcg,
};
HeroSectionImg.defaultProps = {
  mobImg: mainBcg,
};
