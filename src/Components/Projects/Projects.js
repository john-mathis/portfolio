import React from "react";
import "..//Projects/Projects.css";
import CAT from "..//..//assets/cat.webp";

const Projects = () => {
  return (
    <>
      <div className="projects-container">
        <div className="max-container-width">
          <h3 className="section-title">Projects</h3>

          <div className="container">
            <div className="project-card">
              <p>REST Countries API</p>
              <div className="card-img">
                <div className="card-overlay">
                  <img className="project-img" src={CAT} />
                </div>
              </div>
            </div>

            <div className="project-card">
              <img className="project-img" src={CAT} />
            </div>

            <div className="project-card">
              <img className="project-img" src={CAT} />
            </div>

            <div className="project-card">
              <img className="project-img" src={CAT} />
            </div>

            <div className="project-card">
              <img className="project-img" src={CAT} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
