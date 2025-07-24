// src/components/Projects.jsx
import React from "react";
import { projects } from "../ProjectData/ProjectData";

const ProjectCard = ({ image, title, stack, description, liveUrl, repoUrl }) => (
  <a
    href={liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group block overflow-hidden rounded-lg shadow-lg"
  >
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
        <p className="text-neutral-300 text-sm">{stack}</p>
      </div>
    </div>
    <div className="p-4 bg-[#111]">
      <p className="text-white text-base mb-2 leading-snug">{description}</p>
      <div className="flex space-x-4">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--red)] hover:underline"
        >
          View Code
        </a>
        <span className="text-sm text-neutral-500">|</span>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--red)] hover:underline"
        >
          Live Demo
        </a>
      </div>
    </div>
  </a>
);

const Projects = () => (
  <section className=" py-16 px-4">
    <div className="max-container-width mx-auto">
      <h3 className="text-3xl md:text-4xl mb-8 underline underline-offset-4 text-white">
        Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;