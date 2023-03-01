import React from "react";
import "..//Projects/Projects.css";
import { FiGithub } from "react-icons/fi";
import { CgExport } from "react-icons/cg";
import { ProjectData } from "../ProjectData/ProjectData";

const Projects = () => {
  const displayProjectInfo = ProjectData.map((display) => {
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

            <a target="_blank" href={display.live} rel="noreferrer">
              <CgExport className="project-icons" />
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="projects-container">
        <div className="max-container-width">
          <h3 className="section-title">Projects</h3>
          <div className="container"> {displayProjectInfo}</div>
        </div>
      </div>
    </>
  );
};

export default Projects;
