import React from "react";
import "../AboutMe/AboutMe.css";
import John from "../../assets/john.jpg";

const AboutMe = () => {
  return (
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
            <h3 className="section-title name bold">Hi, I'm John.</h3>
            <p className="about-description">
              An enthusiastic software developer and lifelong learner. I highly
              value the process of producing clean, effecient, and innovative
              solutions! I am motivated by the opportunity that software
              provides to positively impact the life of an individual, and the
              world as a whole. I enjoy development because of the satisfaction
              that comes from overcoming challenges, and acquiring new skills to
              solve complex problems.
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
