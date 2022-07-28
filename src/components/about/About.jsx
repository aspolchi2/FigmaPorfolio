import { GitHub, LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { about } from "../../porfolio";

const About = () => {
  const { name, role, description, resume, social } = about;


  return <div>
    <h1>Hi! I'm <span>{name}</span></h1>
    <h2>{role}</h2>
    <p>{description}</p>
    <a href={resume} rel="noreferrer" target="_blank">My Resume</a>
    <a href={social.github} rel="noreferrer" target="_blank"><GitHub/> </a>
    <a href={social.linkedin} rel="noreferrer" target="_blank"> <LinkedIn /></a>


  </div>;
};

export default About;
