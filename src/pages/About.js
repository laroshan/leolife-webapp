import React from "react";
import Info from "../Components/AboutPage/Info";
import HeroSectionImg from "../Components/HerSectionImg";
import LeoLogo from "../images/LeoLife01.jpg";
import Quote from "../images/cleaningquote.jpg";

function about() {
  return (
    <div>
      <HeroSectionImg img={LeoLogo} max={false} mobImg={Quote} />
      <Info />
    </div>
  );
}

export default about;
