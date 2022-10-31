import React from "react";
import "..//Projects/Projects.css";
import Country from "..//..//assets/country-project.png";
import Portfolio from "..//..//assets/portfolio-project.png";
import Groupchat from "..//..//assets/groupchat-landing-page.png";
import Mastercraft from "..//..//assets/mastercraft-project.png";
import { FiGithub } from "react-icons/fi";
import { CgExport } from "react-icons/cg";

const Projects = () => {
  const projectInfo = [
    {
      name: "Rest Countries API",
      github: "https://github.com/mackmathis/Country-API",
      live: "https://mackmathis.github.io/Country-API/",
      img: Country,
    },

    {
      name: "Portfolio ",
      github: "https://github.com/mackmathis/portfolio",
      live: "https://mackmathis.github.io/portfolio/",
      img: Portfolio,
    },
    {
      name: "Groupchat ",
      github: "https://github.com/mackmathis/react-landing-page",
      live: "https://mackmathis.github.io/react-landing-page/",
      img: Groupchat,
    },

    {
      name: "Mastercraft ",
      github: "https://github.com/mackmathis/crowdfunding-product-page",
      live: "https://mackmathis.github.io/crowdfunding-product-page/",
      img: Mastercraft,
    },
  ];

  const displayProjectInfo = projectInfo.map((display) => {
    return (
      <React.Fragment key={display.name}>
        <div className="project-card">
          <p className="project-name">{display.name}</p>
          <img
            className="project-img"
            src={display.img}
            alt="screenshot of projects"
          />
          <div className="card-overlay">
            <a target="blank" href={display.github}>
              <FiGithub className="project-icons" />
            </a>

            <a target="blank" href={display.live}>
              <CgExport className="project-icons" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      {/* <div className="projects-container" id="projects">
        <div className="max-container-width">
          <h3 className="section-title">Projects</h3>

          <div className="container">
            <div className="project-card">
              <p className="project-name">REST Countries API</p>
              <img className="project-img" src={Country} />
              <div className="card-overlay">
                <a
                  target="blank"
                  href="https://github.com/mackmathis/Country-API"
                >
                  <FiGithub className="project-icons" />
                </a>

                <a
                  target="blank"
                  href="https://mackmathis.github.io/Country-API/"
                >
                  <CgExport className="project-icons" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="projects-container" id="projects">
        <div className="max-container-width">
          <h3 className="section-title">Projects</h3>
          <div className="container"> {displayProjectInfo}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
