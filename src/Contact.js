import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';


function Contact() {
  return(
    <>
    <div className="text-white text-center bg-color p-5">
      <h2 className="pb-5">CONTACT</h2>
      <h3 classNamew="pt-5">I am currently looking for new employment opportunities!</h3>
      <p className="pt-3">
      For project inquiries, possible employment, collaborative endeavors, etc. please E-mail 
      me, use the provided contact form, or find me at any of the social media links below.
      </p>
    </div>
    <div className="text-center text-white red-color p-5 contact-div">
      <h2 className="mb-5">I'd love to hear from you.</h2>
      <ContactForm />
    
    </div>
    </>
  )
}

export default Contact