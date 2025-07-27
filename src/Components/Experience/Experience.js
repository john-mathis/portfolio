import React from "react";
import ACN from "../../assets/accenture.png";
import Freelaance from "../../assets/Freelance.png"; 

const experiences = [
  {
    id: 1,
    logo: ACN,
    alt: "Accenture logo",
    company: "Accenture",
    companyUrl: "https://www.accenture.com/us-en",
    title: "Software Engineer",
    subtitle: "Full-stack Development",
    skills: ["Javascript", "TypeScript", "React.js", "Node.js", "Express", "PostgreSQL"],
    date: "Jun. 2023 – Present",
    employmentType: "Full‑time",
  },
  {
    id: 2,
    logo: Freelaance,
    alt: "Freelance developer clip art",
    company: "Freelance",
    companyUrl: "",
    title: "Software Engineer",
    subtitle: "Frontend & UX",
    skills: ["React", "Next.js", "TailwindCSS", "Figma"],
    date: "Jan. 2022 – May 2023",
    employmentType: "Contract",
  },
];

const ExperienceCard = ({
  logo,
  alt,
  company,
  companyUrl,
  title,
  subtitle,
  skills,
  date,
  employmentType,
}) => (
  <div className="flex flex-col md:flex-row border rounded-xl p-5 mb-12">
    <img
      src={logo}
      alt={alt}
      className="h-20 w-36 rounded-lg m-auto md:mx-0"
    />
    <div className="flex flex-col lg:flex-row justify-between w-full mt-6 md:mt-0">
      <div className="text-center md:text-left">
        <h4 className="text-lg lg:text-2xl xl:text-3xl font-bold">
          {title} at{" "}
          <a
            href={companyUrl}
            className="text-[var(--red)] underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company}
          </a>
        </h4>
        <p className="mt-2 lg:text-lg xl:text-xl">{subtitle}</p>
        <p className="mt-1 lg:text-lg xl:text-xl">
          Skills: {skills.join(", ")}
        </p>
      </div>
      <div className="flex mt-2 m-auto md:mx-0 lg:flex-col lg:ml-12 lg:text-center lg:my-auto text-sm md:text-base lg:text-lg xl:text-xl">
        <span>{date}</span>
        <span className="ml-4 lg:ml-0">{employmentType}</span>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <section className="pb-12">
    <div className="max-container-width">
      <h3 className="text-3xl md:text-4xl my-8 underline underline-offset-[var(--text-underline-spacing)]">
        Experience
      </h3>
      {/* space-y-6 gives vertical gap between cards */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
