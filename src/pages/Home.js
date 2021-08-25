import React from "react";
import HeroSection from "../Components/HeroSection";
import video1 from "../videos/leolifevideo1.mp4";
import img1 from "../images/404.jpg";
function Home() {
  return (
    <>
      <HeroSection
        isVid={true}
        vid={video1}
        imgs={img1}
        title="Welcome To LD LeoLife"
        subtitle="Let's Do Shopping"
        btnText="Get Started"
      />
    </>
  );
}

export default Home;
