import React from "react";
import ContactForm from "./ContactForm";
import ContactIcons from "./ContactIcons";
import "./Contact.css";
import borisGraf2 from "../img/boris-grafiti-2-large-web.jpg";

function Contact() {
  window.scrollTo(0, 0);

  return (
    <>
      <div  className="app ">
        <div className="parallax-section">
        <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${borisGraf2})` }}
            aria-hidden="true"
          />

          <div className="parallax-content" id="contact">
            <div className="content-container" >
              <div className="pt-5 page-header">CONTACT.</div>
              <ContactForm />
            </div>
            <div className="text-center">
              <ContactIcons />
            </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
