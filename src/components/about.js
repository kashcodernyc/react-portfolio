import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import {
  SiRedux,
  SiFirebase,
  SiJest,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Bio } from "../data";

const About = () => {
  return (
    <section className="aboutme" id="about">
      <div className="story">
        <div className="title">
          <h1 className="heading">About Me</h1>
          <div className="underline" />
        </div>
        <p className="para">{Bio}</p>
        <ul className="languages">
          <FaHtml5 />
          <FaCss3Alt />
          <FaBootstrap />
          <FaSass />
          <FaReact />
          <SiRedux />
          <FaNode />
          <SiTypescript />
          <DiMongodb />
          <SiFirebase />
          <SiGraphql />
          <SiJest />
        </ul>
      </div>
    </section>
  );
};

export default About;
