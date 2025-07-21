import React from "react";
import John from "../../assets/john.jpg";
import Resume from "../../assets/John_Mathis_Resume.pdf";

const AboutMe = () => {
  return (
    <>
      <div className="bg-[var(--dark-grey)] min-h-140 lg: min-h-260 py-12">
        <div className="max-container-width flex flex-col lg:flex-row">
          <div className="flex m-auto	lg:order-2">
            <img
              alt="john mathis using a macbook"
              src={John}
              className="max-w-[15rem]
              max-h-[15rem]mt-8 rounded-lg  sm:max-w-xs sm:max-h-100              "
            ></img>
          </div>
          <div className="text-center mb-8 lg:text-left lg:mr-8 lg:flex lg:flex-col lg:order-1 lg:mb-0 lg:justify-evenly ">
            <h3 className="text-3xl md:text-4xl my-8 underline underline-offset-[var(--text-underline-spacing)] font-normal mb-4">
              Hi, I'm John.
            </h3>
            <p className="text-base w-150 h-fit mb-8 md:text-lg md:min-h-48 md:w-84 lg:text-xl lg:max-w-[90%] xl:max-w-[85%]	">
              As a passionate software developer and perpetual learner, I hold a
              deep appreciation for the creation of clean, efficient, and
              cutting-edge solutions. I am driven by the potential of software
              to make a positive impact on individuals and society at large. The
              process of overcoming challenges and acquiring new skills to solve
              intricate problems brings me immense satisfaction in my
              development journey.
            </p>

            {/* <a
              href={Resume}
              download="John Mathis Resume"
              className="hover:scale-125 no-underline bg-[var(--red)] w-32 text-center text-white	p-3	relative"
            >
              Download CV
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
