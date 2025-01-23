import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/Wallpaper.jpg" alt="wallpaper" />
      <div className="item">
        <h3>Plan your Party Now!</h3>
        <div>
          <h1>Your goto Event Planner on Campus!</h1>
          <p>
            Avoid the hassle of planning and organizing Events. Let us Help you save your time and Money!
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;