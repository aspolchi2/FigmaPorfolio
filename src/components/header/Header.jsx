import React from "react";
import { header } from "../../porfolio";
import "../sass/header.scss";
const Header = () => {
  const { homepage, title } = header;
  return (
    <div className="header">
      <a href={homepage} target="_blank" rel="noreferrer">
        {title}.
      </a>
    </div>
  );
};

export default Header;
