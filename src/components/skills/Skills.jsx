import React from "react";
import { skills } from "../../porfolio";
import "../sass/skills.scss";

const Skills = () => {
  const { lang, programs } = skills;
  return (
    <div className="skillSection">
      <div className="skillSection__box">
        <div className="skillSection__box__inner">
          <p className="skillSection__box__inner__title">Main Programs: </p>
          <p className="skillSection__box__inner__content">{programs}</p>
        </div>
        <div className="skillSection__box__inner">
          <p className="skillSection__box__inner__title">Main Skills: </p>
          <p className="skillSection__box__inner__content">{lang}</p>
        </div>
      </div>
      <div className="divisor"></div>
    </div>
  );
};

export default Skills;
