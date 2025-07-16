import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const sendNewEmail = () => {
    window.open(String("mailto:john^johnmathis.net").replace("^", "@"));
  };
  return (
    <>
      <div className="contact-container">
        <div className="max-container-width">
          <h3 className="text-3xl md:text-4xl my-8 underline underline-offset-[var(--text-underline-spacing)]">
            Get In Touch
          </h3>
          <div className="flex flex-row justify-around items-center max-w-[30rem] my-12 mx-auto">
            <a
              href="https://github.com/john-mathis"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="w-8 h-12 cursor-pointer my-0 mx-4 md:w-16 md:h-20 hover:bg-[var(--dark-grey)]" />
            </a>

            <a
              href="https://www.linkedin.com/in/john-mathis1/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="w-8 h-12 cursor-pointer my-0 mx-4 md:w-16 md:h-20 hover:bg-[var(--dark-grey)]" />
            </a>
            <AiOutlineMail
              className="w-8 h-12 cursor-pointer my-0 mx-4 md:w-16 md:h-20 hover:bg-[var(--dark-grey)]"
              onClick={sendNewEmail}
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p className="uppercase mt-8 text-center tracking-[1px]">
            © John Mathis, 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
