import React from "react";
import HeroSection from "../Components/HeroSection";
import video1 from "../videos/leolifevideo1.mp4";
import image1 from "../images/IMG_3.jpeg";
function Home() {
  return (
    <>
      <HeroSection
        isVid={false}
        vid={video1}
        img={image1}
        title="Welcome To LD LeoLife"
        subtitle="Let's Do Shopping"
        btnText="Get Started"
      />
    </>
  );
}

export default Home;
