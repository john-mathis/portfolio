import React from "react";
import "..//ContactMe/Contact.css";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="max-container-width">
          <h3 className="section-title">Get In Touch</h3>
          <div className="icon-container">
            <a className="contact-link" href="https://github.com/mackmathis">
              <AiOutlineGithub className="contact-icon" />
            </a>

            <AiFillLinkedin className="contact-icon" />
            <AiOutlineMail className="contact-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
