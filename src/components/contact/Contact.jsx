import React from "react";
import { contact } from "../../porfolio";
import "../sass/contact.scss";

const Contact = () => {
  const { email, whatsapp } = contact;
  return (
    <div className="contactMe">
      <p>Email me at: {email} </p>
      <p>or </p>
      <a
        href={`https://api.whatsapp.com/send?phone=54${whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Whatsapp
      </a>
    </div>
  );
};

export default Contact;
