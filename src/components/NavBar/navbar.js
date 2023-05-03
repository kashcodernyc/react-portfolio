import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillFile } from "react-icons/ai";
import Navigation from "./navigation";
import MobileNavigation from "./mobileNavigation";

const Navbar = () => {
  return (
    <div className="header">
      <a href="/" id="kash" className="heading">
        {" "}
        <span className="kashPortfolio">Kash</span> Portfolio
      </a>
      <Navigation />
      <MobileNavigation />
      <div className="icons">
        <a
          className="socmedia"
          href="https://github.com/kashcodernyc/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className="socmedia"
          href="https://www.linkedin.com/in/prakash-subba/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedin />{" "}
        </a>
        <a
          className="socmedia"
          href="https://drive.google.com/file/d/16qKrBCAwbn2AkWJBnWT7lBCV8qNHB1c9/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFile />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
