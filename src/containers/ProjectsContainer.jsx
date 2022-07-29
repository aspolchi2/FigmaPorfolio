import React from "react";
import Projects from "../components/projects/Projects";
import { projects } from "../porfolio";
import "../components/sass/projects.scss";
import { Fade, Slide } from "react-awesome-reveal";

const ProjectsContainer = () => {
  return (
    <div className="projectDiv">
      <h2 className="title">My Projects</h2>
      <div className="projectsContainer">
        <Slide direction="up" triggerOnce>
          {projects.map((project, i) => (
            <Projects {...project} key={i} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ProjectsContainer;
