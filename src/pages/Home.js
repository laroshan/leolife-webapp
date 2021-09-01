import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturedProducts from "../Components/HomePage/FeaturedProducts";
// import video1 from "../videos/Trim2.mp4";
import video2 from "../videos/leolifevideo1.mp4";
import img1 from "../images/404.jpg";
function Home() {
  return (
    <>
      <HeroSection
        isVid={true}
        vid={video2}
        imgs={img1}
        // title="Welcome To LD LeoLife"
        // subtitle="Let's Do Shopping"
        // btnText="Get Started"
      />
      <FeaturedProducts />
    </>
  );
}

export default Home;
