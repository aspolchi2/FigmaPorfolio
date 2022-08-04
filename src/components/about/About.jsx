import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { about } from "../../porfolio";
import "../sass/about.scss";

const About = () => {
  const {
    name,
    role,
    description,
    description2,
    photo,
    resume,
    social,
  } = about;

  return (
    <div className="aboutSection" id="about">
      <div className="aboutSection__left">
        <div className="aboutSection__left__nameAndRole">
          <p>
            Hi I'm {name}, a {role}
          </p>
        </div>
        <div className="aboutSection__left__description">
          <p>{description}</p>
          <p>{description2}</p>
        </div>
      </div>
      <div className="aboutSection__right">
        <img src={photo} alt={name}></img>
      </div>
    </div>
  );
};

export default About;
