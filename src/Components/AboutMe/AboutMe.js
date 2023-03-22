import React from "react";
import John from "../../assets/john.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="min-h-140 lg: min-h-260 py-12">
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
              An enthusiastic software developer and lifelong learner. I highly
              value the process of producing clean, effecient, and innovative
              solutions! I am motivated by the opportunity that software
              provides to positively impact the life of an individual, and the
              world as a whole. I enjoy development because of the satisfaction
              that comes from overcoming challenges, and acquiring new skills to
              solve complex problems.
            </p>

            <a
              href="/"
              className="hover:scale-125 no-underline bg-[var(--red)] w-32 text-center text-white	p-3	relative"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
