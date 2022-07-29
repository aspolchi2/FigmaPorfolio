import React from "react";
import { Slide, Bounce } from "react-awesome-reveal";
import { header } from "../../porfolio";
import "../sass/header.scss";

const Header = () => {
  const { homepage, title } = header;
  return (
    <div className="header">
      <a href={homepage} target="_blank" rel="noreferrer" >
        {title}
      </a>
      <span >.</span>
    </div>
  );
};

export default Header;
