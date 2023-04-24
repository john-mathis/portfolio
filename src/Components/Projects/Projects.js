import React from "react";
import "..//Projects/Projects.css";
import { FiGithub } from "react-icons/fi";
import { CgExport } from "react-icons/cg";
import { ProjectData } from "../ProjectData/ProjectData";

const Projects = () => {
  const displayProjectInfo = ProjectData.map((display) => {
    return (
      <React.Fragment key={display.name}>
        <div className="relative max-w-xs project-card">
          <p className="uppercase mb-4">{display.name}</p>
          <img
            className="min-h-[13rem] max-h-[13rem] min-w-[17rem] max-w-[17rem] rounded-lg"
            src={display.img}
            alt="screenshot of projects"
          />
          <div className="card-overlay flex flex-col justify-center items-center absolute top-10 left-0 right-0 bottom-0 opacity-0 bg-[var(--transparent-black)] ease-in duration-300">
            <div className="text-center font-bold underline">
              {display.name}
            </div>
            <div className="text-center font-bold mb-4 px-3 text-base	my-2">
              {display.description}
            </div>
            <div className="flex flex-row">
              <a target="blank" href={display.github}>
                <FiGithub className="w-10 h-16 mx-6 hover:bg-[var(--icon-light-hover)]" />
              </a>

              <a target="_blank" href={display.live} rel="noreferrer">
                <CgExport className="w-10 h-16 mx-6 hover:bg-[var(--icon-light-hover)]" />
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      <div className="bg-[var(--dark-grey)] pb-12">
        <div className="max-container-width">
          <h3 className="text-3xl md:text-4xl my-8 underline underline-offset-[var(--text-underline-spacing)]">
            Projects
          </h3>
          <div className="relative grid place-items-center grid-cols-1 my-4 mx-auto gap-16 max-w-5xl md:grid-cols-2 lg:grid-cols-2">
            {displayProjectInfo}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
