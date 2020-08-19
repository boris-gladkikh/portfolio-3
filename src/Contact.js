import React from 'react';
import ContactForm from './ContactForm';
import ContactButtons from './ContactButtons';
import './Contact.css';


function Contact() {
  return(
    <>
    <div className="blue-box text-center p-5">
      <h2 className="pb-5">CONTACT</h2>
      <div className="bio-text">
      <h5 className="py-3">I am currently looking for new employment opportunities!</h5>
      <a href=""><h4><i>Download Resume</i></h4></a>
      <p className="mt-5">
      For project inquiries, possible employment, collaborative endeavors, etc. please E-mail 
      me, use the provided contact form, or find me at any of the social media links below.
      </p>
      </div>
      <ContactButtons />
    </div>
    <div className="text-center text-white red-box p-5 ">
      <h2 className="mb-5">I'd love to hear from you.</h2>
      <ContactForm />
    
    </div>
    </>
  )
}

export default Contact