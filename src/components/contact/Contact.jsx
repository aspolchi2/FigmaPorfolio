import React from "react";
import { about, contact } from "../../porfolio";
import "../sass/contact.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Contact = () => {
  const { email, whatsapp } = contact;
  const { resume } = about;
  return (
    <div className="contactMe" id="contact">
      <div className="contactMe__text">
        <p>
          I am thrilled to answer any questions{" "}
          <ArrowForwardIcon fontSize="large" />
        </p>
      </div>
      <div className="contactMe__contact">
        <p>{email}</p>
        <a href={whatsapp} target="_blank" rel="noreferrer">
          whatsapp
        </a>
        <a href={resume} target="_blank" rel="noreferrer">
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
