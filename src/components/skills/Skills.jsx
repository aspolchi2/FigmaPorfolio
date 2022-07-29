import React from "react";
import { skills } from "../../porfolio";
import "../sass/skills.scss";

const Skills = () => {
  return (
    <div className="skillSection">
    <h2>Some skills</h2>
      <div className="skills">
        <div className="skillContainer">
          {skills.map((skill, i) => (
            <div className="skillBox" key={i}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
