import React from "react";
import "./Hero.css";
import suri_latest from "../../assets/suri_latest.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  return (
    <div id="home" className="hero">
      <img src={suri_latest} alt="hero" />
      <h1>
        <span>Iam Surendra Vaddi.</span> Front end developer based in India.
      </h1>
      <p>
        Iam a frontend Developer from India, with 5 years of Experience in
        multiple companies like verizon,Capgemini,HCL.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
