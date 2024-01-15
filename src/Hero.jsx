import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Dive into the world of my personal projects, where innovation meets
            determination. Explore the intersection of my interests and skills,
            whether it's developing cutting-edge software solutions, crafting
            visually stunning designs, or experimenting with new forms of
            expression.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
