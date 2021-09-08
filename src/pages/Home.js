import React, { useState } from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProducts from "../Components/HomePage/FeaturedProducts";
// import video1 from "../videos/Trim2.mp4";
// import video2 from "../videos/leolifevideo1.mp4";
// import img1 from "../images/404.jpg";
import img1 from "../images/CoverLeo.jpg";
import LeoLogo from "../images/LeoLife01.jpg";
import HeroSectionImg from "../Components/HerSectionImg";
import CarouselComp from "../Components/CarouselComp";
import Sliderss from "../Components/Sliderss";
import MaterialCarousel from "../Components/MaterialCarousel";
import BannerExample from "../Components/materialUi";

function Home() {
  // const [mobile, Setmobile] = useState(false);
  // let width = window.innerWidth;
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });
  console.log(dimensions);
  return dimensions.width > 960 ? (
    <>
      {/* <CarouselComp /> */}
      {/* <HeroSectionImg img={img1} max={true} mobImg={LeoLogo} /> */}
      {/* <MaterialCarousel /> */}
      <BannerExample />
      {/* <Sliderss /> */}
      <FeaturedProducts />
    </>
  ) : (
    <>
      {/* <CarouselComp /> */}
      <HeroSectionImg img={img1} max={true} mobImg={LeoLogo} />
      {/* <MaterialCarousel /> */}
      {/* <BannerExample /> */}
      {/* <Sliderss /> */}
      <FeaturedProducts />
    </>
  );
}

export default Home;
