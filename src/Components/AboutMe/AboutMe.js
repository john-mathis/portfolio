import Resume from "../../assets/John_Mathis_Resume.pdf";
import John from "../../assets/john.jpg";

const AboutMe = () => {
  return (
    <section className="min-h-140 lg: min-h-260 py-12 py-18 px-4">
      <div className="max-container-width mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="flex-1 max-w-xs lg:max-w-sm">
          <img
            src={John}
            alt="John Mathis on laptop"
            className="rounded-xl w-full object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
        {/* Right: Text */}
        <div className=" m-auto text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-semibold text-white mb-3 ">
            Hi, I’m John.
          </h1>
          <h2 className="text-2xl md:text-4xl leading-relaxed mb-8 max-w-xl">
            I’m a software developer.
          </h2>
        
          <div className="flex m-auto space-x-4 mt-4 justify-center items-center lg:justify-start">
            <a className="inline-block bg-[white] border text-black text-sm font-medium px-6 py-3 rounded-md hover:scale-105 transition-transform" href="https://github.com/johnmathis" target="_blank" rel="noopener noreferrer"> Github
            </a>
            <a
            className="inline-block bg-[var(--red)] text-white text-sm font-medium px-6 py-3 rounded-md hover:scale-105 transition-transform cursor-pointer"
          >
            Download CV
          </a>
          <a
            className="inline-block bg-[white] border text-black text-sm font-medium px-6 py-3 rounded-md hover:scale-105 transition-transform" href="https://github.com/johnmathis" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutMe;
