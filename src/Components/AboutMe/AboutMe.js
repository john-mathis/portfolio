import React from "react";
import John from "../../assets/john.jpg";

const AboutMe = () => {
  return (
    <>
      <div className="min-h-140 lg: min-h-260">
        <div className="max-container-width flex flex-col md:flex-row">
          <div className="flex m-auto	md:order-2">
            <img
              alt="john mathis using a macbook"
              src={John}
              className="max-w-xs mt-8 max-h-100 rounded-lg              "
            ></img>
          </div>
          <div className="text-center mb-8 md:text-left md:mr-8 md:flex md:flex-col md:order-1 lg:mb-0 lg:justify-evenly ">
            <h3 className="section-title font-normal mb-4">Hi, I'm John.</h3>
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
