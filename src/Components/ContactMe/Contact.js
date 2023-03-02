import React from "react";
import "..//ContactMe/Contact.css";
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
          <h3 className="section-title">Get In Touch</h3>
          <div className="flex flex-row justify-around items-center max-w-[70%] my-3 mx-auto">
            <a
              className="contact-link"
              href="https://github.com/john-mathis"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className="contact-icon" />
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/john-mathis1/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="contact-icon" />
            </a>
            <AiOutlineMail
              className="contact-icon"
              onClick={sendNewEmail}
              target="_blank"
              rel="noreferrer"
            />
          </div>
          <p className="copyright">© John Mathis, 2022</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
