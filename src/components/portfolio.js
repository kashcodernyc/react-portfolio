import React from "react";
import AllProjects from "../allProjects";
import { Projects } from "../data";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="title">
        <h1 className="heading">Portfolio</h1>
        <div className="underline" />
      </div>
      <div className="projects">
        {Projects.map((project) => {
          return <AllProjects key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Portfolio;
