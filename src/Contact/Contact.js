import React from "react";
import ContactForm from "./ContactForm";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="eyebrow">
        <span className="eyebrow-num">04</span>
        <span>Contact</span>
        <span className="eyebrow-rule" />
      </div>

      <h2 className="section-title contact-title">
        Contact<span className="accent">.</span>
      </h2>

      <div className="contact-form-wrap">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
