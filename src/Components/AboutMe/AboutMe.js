import React from "react";
import "../AboutMe/AboutMe.css";
import John from "../../assets/john.jpg";

const AboutMe = () => {
  return (
    // About Section
    <>
      <div className="about-container">
        <div className="max-container-width about">
          <div className="about-img-container">
            <img
              alt="john mathis using a macbook"
              src={John}
              className="john-img"
            ></img>
          </div>
          <div className="about-text-container">
            <h3 className="section-title name">About John</h3>
            <p className="about-description">
              An enthusiastic front-end Web Developer who finds pleasure in
              learning new skills to solve complex problems. I highly value the
              process of producing clean, effecient, and innovative solutions.
              I'm looking foward to being surrounded with like minded people who
              will challenge, my ideas and push me to grow as a person and
              Developer!
            </p>

            <a href="/" className="download-cv">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
