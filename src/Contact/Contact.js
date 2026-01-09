import React from 'react';
import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';
import './Contact.css';


function Contact() {

  window.scrollTo(0,0);

  return (
    <>
      <div id="contact" className="app p-5">
        <div className="page-header">CONTACT.</div>
        <div>Fill out this form for all your inquiries.</div>
        <ContactForm />
      </div>
      <div className='text-center'>
        <ContactIcons />
      </div>
    </>
  )
}

export default Contact