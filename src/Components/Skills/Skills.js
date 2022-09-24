import React from "react";
import "../Skills/Skills.css";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import REACT from "../../assets/react.png";
import GIT from "../../assets/git-logo.png";
import GITHUB from "../../assets/github.png";
import FIGMA from "../../assets/figma.png";
import NODEJS from "../../assets/nodejs.webp";

const Skills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="max-container-width">
          <h3 className="skills-title">Skills</h3>

          <div className="skills-icons-container">
            <img className="skills-icon" alt="html logo" src={HTML} />
            <img className="skills-icon" alt="css logo" src={CSS} />
            <img className="skills-icon" alt="JavaScript logo" src={JS} />
            <img className="skills-icon" alt="ReactJS logo" src={REACT} />
            <img className="skills-icon" alt="Git logo" src={GIT} />
            <img className="skills-icon" alt="Github logo" src={GITHUB} />
            <img className="skills-icon" alt="Figma logo" src={FIGMA} />
            <img className="skills-icon" alt="NodeJS logo" src={NODEJS} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
