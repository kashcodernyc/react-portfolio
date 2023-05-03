import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";

const NavLinks = () => {
  return (
    <>
      <ul className={"navbar"}>
        <li>
          <a className="navlink" href="/home">
            Home
          </a>
        </li>
        <li>
          <a className="navlink" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="navlink" href="/portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="navlink" href="/contact">
            Contact
          </a>
        </li>
        <div className="mobileicons">
          <a
            className="socmedia"
            href="https://github.com/kashcodernyc/"
            target="_blank" rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="socmedia"
            href="www.linkedin.com/in/prakash-subba"
            target="_blank"
          >
            {" "}
            <FaLinkedin />{" "}
          </a>
          <a
            className="socmedia"
            href="https://prakashsubba.com/resume/WebDev.pdf"
            target="_blank" rel="noreferrer"
          >
            <AiFillFile />
          </a>
        </div>
      </ul>
    </>
  );
};

export default NavLinks;
