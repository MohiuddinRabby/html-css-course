import React from "react";
import "./Hero.css";
import HeroImage from "../img/image-bike-repair-service.jpg";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-1">
        <h1 className="styled-h-1">Mobile Bike Repairs.</h1>
        <p>
          Many people have difficulty getting their bikes to a bike shop. We
          call to your office or home anywhere in greater Dublin. Fast,
          convenient bike servicing with up-front pricing. All without the
          hassle of taking your bike into a shop.
        </p>
        <a href="/" className="btn-primary">
          Book Service
        </a>
      </div>
      <div className="hero-2">
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
