import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProducts from "../Components/HomePage/FeaturedProducts";
// import video1 from "../videos/Trim2.mp4";
// import video2 from "../videos/leolifevideo1.mp4";
// import img1 from "../images/404.jpg";
import img1 from "../images/CoverLeo.jpg";
import LeoLogo from "../images/LeoLife01.jpg";
import HeroSectionImg from "../Components/HerSectionImg";

function Home() {
  return (
    <>
      {/* <HeroSection
        isVid={true}
        vid={video2}
        imgs={img1}
        // title="Welcome To LD LeoLife"
        // subtitle="Let's Do Shopping"
        // btnText="Get Started"
      /> */}

      <HeroSectionImg img={img1} max={true} mobImg={LeoLogo} />
      <FeaturedProducts />
    </>
  );
}

export default Home;
