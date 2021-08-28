import React from "react";
import Info from "../Components/AboutPage/Info";
import HeroSectionImg from "../Components/HerSectionImg";
import LeoLogo from "../images/LeoLife01.jpg";

function about() {
  return (
    <div>
      <HeroSectionImg img={LeoLogo} max={false} children={<h1>.</h1>} />
      <Info />
    </div>
  );
}

export default about;
