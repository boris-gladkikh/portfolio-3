import React from 'react';
import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';
import './Contact.css';


function Contact() {
  return(
    <>
    <div className="blue-box text-center p-5">
      <h2 className="pb-5">CONTACT</h2>
      <div className="bio-text">
      <h4 className="">I am currently looking for new employment opportunities!</h4>
      <h6 className="text-white mb-4">Click on the icon below to download my resume.</h6>
      
      <a href="https://github.com/boris-gladkikh/updatedportfolio/blob/master/Boris%20Gladkikh%202020%20Resume.pdf"><p><i><i className="text-white fa-4x far fa-file"></i></i></p></a>
      <p className="mt-5">
      For project inquiries, possible employment, collaborative endeavors, etc. please E-mail 
      me, use the provided contact form, or find me at any of the social media links below.
      </p>
      </div>
      <ContactIcons />
    </div>
    <div className="text-center text-white teal-box p-5 ">
      <h2 className="mb-5">I'd love to hear from you.</h2>
      <ContactForm />
    
    </div>
    </>
  )
}

export default Contact