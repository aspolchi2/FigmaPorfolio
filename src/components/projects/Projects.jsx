import React from "react";
import "../sass/projects.scss";
import { Box, Divider } from "@mui/material";

const Projects = ({
  gif,
  id,
  name,
  description,
  stack,
  sourceCode,
  livePreview,
}) => {
  return (
    <div className="projectSection__box">
      <div className="projectSection__box__inner">
        <div className="projectSection__box__inner__text">
          <p className="projectSection__box__inner__text__title">
            {id} / {name}
          </p>
          <p className="projectSection__box__inner__text__description">
            {description}
          </p>
          <p>Technology used: </p>
          {stack.map((lang, i) => (
            <p className="projectSection__box__inner__text__stack">{lang}</p>
          ))}
          <div className="projectSection__box__inner__text__links">
            <a href={livePreview} target="_blank" rel="noreferrer">
              Live preview
            </a>
            <a href={sourceCode} target="_blank" rel="noreferrer">
              Code
            </a>
          </div>
        </div>
        <div className="projectSection__box__inner__img">
          <img
            className="projectSection__box__inner__img__image"
            src={gif}
          ></img>
        </div>
      </div>
      <div className="divisor"></div>
    </div>
  );
};

export default Projects;
