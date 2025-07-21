import React from "react";
import ACN from "../../assets/accenture.png";

const Experience = () => {
  return (
    <div className="pb-12">
      <div className="max-container-width">
        <h3 className="text-3xl md:text-4xl my-8 underline underline-offset-[var(--text-underline-spacing)]">
          Experience
        </h3>


        <div className="flex flex-col md:flex-row  border rounded-xl p-8">
          <div>
            {" "}
            <img
              src={ACN}
              alt="Experience placeholder"
              className="rounded-lg h-[8rem] m-auto"
            />
          </div>
          <div className="m-auto text-center md:text-left ">
            {" "}
            <p className="text-2xl">
              Application Devleoper at{" "}
              <a
                className="text-[var(--red)] underline underline-offset-[5px]"
                href="https://www.accenture.com/us-en"
              >
                Accenture
              </a>
            </p>
            <p>Full-stack Development </p>
            <p>Skills:Typescript, React,js, Node.js, Express </p>

            <div className="text-center md:text-left m-auto">
            <p>Jun. 2023 - Present <span>Full time</span></p>
            
          </div>
        </div>
          </div>

          



      </div>
    </div>
  );
};

export default Experience;
