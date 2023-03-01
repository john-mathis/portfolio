import React from "react";
import "../AboutMe/AboutMe.css";
import John from "../../assets/john.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="min-h-140 lg: min-h-260">
        <div className="max-container-width flex flex-col md:flex-row">
          <div className="flex m-auto	md:order-2">
            <img
              alt="john mathis using a macbook"
              src={John}
              className="max-w-xs mt-8 max-h-100 rounded-lg              "
            ></img>
          </div>
          <div className="text-center mb-8 md:text-left md:mr-8 md:flex md:flex-col md:order-1">
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
