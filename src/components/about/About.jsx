import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { about } from "../../porfolio";
import "../sass/about.scss";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about">
    <Slide cascade triggerOnce>
      <h1>
        Hi! I'm <span>{name}</span>
      </h1>
      <h2>{role}</h2>
      <p>{description}</p>
      </Slide>
      <div className="socials">
        <a href={resume} rel="noreferrer" target="_blank">
          My Resume
        </a>
        <a href={social.github} rel="noreferrer" target="_blank">
          <GitHub />{" "}
        </a>
        <a href={social.linkedin} rel="noreferrer" target="_blank">
          {" "}
          <LinkedIn />
        </a>
      </div>
    </div>
  );
};

export default About;
