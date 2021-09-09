import React, { useState, useEffect } from "react";
import FeaturedProducts from "../Components/HomePage/FeaturedProducts";
// import video1 from "../videos/Trim2.mp4";
// import video2 from "../videos/leolifevideo1.mp4";
// import img1 from "../images/404.jpg";
import img1 from "../images/CoverLeo.jpg";
import LeoLogo from "../images/LeoLife01.jpg";
import HeroSectionImg from "../Components/HerSectionImg";

import BannerExample from "../Components/materialUi";

function Home() {
  // const [mobile, Setmobile] = useState(false);
  // let width = window.innerWidth;
  // const [dimensions, setDimensions] = React.useState({
  //   height: window.innerHeight,
  //   width: window.innerWidth,
  // });
  // React.useEffect(() => {
  //   function handleResize() {
  //     setDimensions({
  //       height: window.innerHeight,
  //       width: window.innerWidth,
  //     });
  //   }

  //   window.addEventListener("resize", handleResize);
  // }, []);
  // console.log(dimensions);
  return (
    <>
      <BannerExample />

      <FeaturedProducts />
    </>
  );
  // dimensions.width > 960 ? (

  // ) : (
  //   <>
  //     <HeroSectionImg img={img1} max={true} mobImg={LeoLogo} />

  //     <FeaturedProducts />
  //   </>
  // );
}

export default Home;
