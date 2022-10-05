import React from "react";
import "..//Projects/Projects.css";
import Country from "..//..//assets/country-project.png";
import Portfolio from "..//..//assets/portfolio-project.png";
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
  ];

  const maack = projectInfo.map((mack) => {
    return (
      <div className="project-card">
        <p className="project-name">{mack.name}</p>
        <img className="project-img" src={mack.img} />
        <div className="card-overlay">
          <a target="blank" href={mack.github}>
            <FiGithub className="project-icons" />
          </a>

          <a target="blank" href={mack.live}>
            <CgExport className="project-icons" />
          </a>
        </div>
      </div>
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
          <div className="container"> {maack}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
