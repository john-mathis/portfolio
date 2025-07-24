import Resume from "../../assets/John_Mathis_Resume.pdf";
import John from "../../assets/john.jpg";

const AboutMe = () => {

const heroButtons = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/john-mathis",
    className:
      "w-28 h-14 my-2 sm:my-0 text-center bg-white border text-black text-sm font-medium px-6 py-4 rounded-md hover:scale-105 transition-transform",
    external: true,
  },
  {
    key: "download",
    label: "Download CV",
    href: Resume,
    className:
      "w-28 h-16 my-2 sm:my-0 text-center bg-[var(--red)] text-white text-sm font-medium px-6 py-3 rounded-md hover:scale-105 transition-transform",
    download: "John_Mathis_CV_2025.pdf",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/john-mathis1/",
    className:
      "w-28 h-14 my-2 sm:my-0 text-center bg-white border text-black text-sm font-medium px-6 py-4 rounded-md hover:scale-105 transition-transform",
    external: true,
  },
];

  return (
    <section className="min-h-140 lg: min-h-260 py-12 py-18 px-4">
      <div className="max-container-width mx-auto flex flex-col lg:flex-row items-center gap-12">
       
        <div className="flex-1 max-w-xs lg:max-w-sm">
          <img
            src={John}
            alt="John Mathis on laptop"
            className="rounded-xl w-full object-cover grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
       
        <div className=" m-auto text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white mb-3 ">
            Hi, I’m John.
          </h1>
          <h2 className="text-2xl md:text-4xl leading-relaxed mb-8 max-w-xl">
            I’m a software developer.
          </h2>
        
          <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-4 justify-center items-center lg:justify-start">
            {heroButtons.map(({ key, label, href, className, download, external }) => (
              <a
                key={key}
                href={href}
                className={className}
                {...(download ? { download } : {})}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
