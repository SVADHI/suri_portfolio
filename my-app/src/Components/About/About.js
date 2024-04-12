import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import suri_latest from "../../assets/suri_latest.jpeg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="img" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={suri_latest} alt="alt" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Iam experienced FrontEnd developer over 5 years of experience in
              the field. Throughout my carrer.I have the privilige of
              collaborating with prestegious organizations, contributing to
              their success and growth.
            </p>
            <p>
              My passion for frontend developement is not only reflected in my
              extensive Experience but also in the enthusiasm and dedication i
              bring to each project.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p> <hr style={{ width: "50%" }}></hr>
            </div>
            <div className="about-skill">
              <p>React js </p> <hr style={{ width: "60%" }}></hr>
            </div>
            <div className="about-skill">
              <p>JavaScript </p> <hr style={{ width: "80%" }}></hr>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About;
