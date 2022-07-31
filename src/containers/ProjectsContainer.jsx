import React from "react";
import Projects from "../components/projects/Projects";
import { projects } from "../porfolio";
import "../components/sass/projects.scss";
import {Slide } from "react-awesome-reveal";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ProjectsContainer = () => {
  return (
    <div id="projects" className="projectDiv">
    <ArrowDownwardIcon fontSize="large" sx={{marginBottom: "8rem"}}/>
      <div className="projectsContainer">
        <Slide direction="up" triggerOnce>
          {projects.map((project) => (
            <Projects {...project} key={project.id} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default ProjectsContainer;
