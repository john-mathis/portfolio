import React from "react";
import ACN from "../../assets/accenture.png";



const Experience = () => (
  <section className="pb-12">
    <div className="max-container-width">
      <h3 className="text-3xl md:text-4xl my-8 underline underline-offset-[var(--text-underline-spacing)]">
        Experience
      </h3>
      <div className="flex flex-col md:flex-row border rounded-xl p-5">
        <img
          src={ACN}
          alt="Accenture logo"
          className="h-20 rounded-lg m-auto md:mx-0"
        />
        <div className="flex flex-col lg:flex-row justify-between  w-full mt-6 md:mt-0">
          <div className="text-center md:text-left">
            <h4 className="text-lg lg:text-2xl xl:text-3xl font-bold">
              Application Dev at{' '}
              <a
                href="https://www.accenture.com/us-en"
                className="text-[var(--red)] underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accenture
              </a>
            </h4>
            <p className="mt-2 lg:text-lg xl:text-xl">Full-stack Development</p>
            <p className="mt-1 lg:text-lg xl:text-xl">
              Skills: Javascript, TypeScript, React.js, Node.js, Express, PostgreSQL
            </p>
          </div>
          <div className="flex mt-2 m-auto md:mx-0  lg:flex-col lg:ml-12 lg:text-center lg:my-auto text-sm md:text-base lg:text-lg xl:text-xl">
            <span>Jun. 2023 – Present</span>
            <span className="ml-4 lg:ml-0">Full‑time</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;



