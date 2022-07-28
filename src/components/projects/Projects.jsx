import React from "react";
import "../sass/projects.scss";
import { Box, Divider } from "@mui/material";

const Projects = ({ name, description, stack, sourceCode, livePreview }) => {
  return (
    <Box className="projectCard" boxShadow={3}>
    <h2>{name}</h2>
    <Divider/>
    <div className="desc">
    <p>{description}</p>
    </div>
    <Divider/>
    
    <div className="paragraph">

        {stack.map((data, i) => (
            <p key={i}> {data} </p>
        ))}
    </div>
    <div className="links">
        <a href={sourceCode} rel="noreferrer" target="_blank"> Code</a>
        <a href={livePreview} rel="noreferrer" target="_blank">Preview </a>
    </div>
    </Box>
  );
};

export default Projects;
