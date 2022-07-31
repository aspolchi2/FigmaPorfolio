import React from "react";
import { header } from "../../porfolio";
import "../sass/header.scss";

const Header = () => {
  const { homepage, title } = header;
  return (
    <nav className="header">
      <a className="headLink" href={homepage} >
        {title}
        <span >.</span>
      </a>
      
      <div className="ulDiv">
        <ul className="ulDiv__ul">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
