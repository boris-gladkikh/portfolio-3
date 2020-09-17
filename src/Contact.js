import React from 'react';
import ContactForm from './ContactForm';
import ContactIcons from './ContactIcons';
import './Contact.css';


function Contact() {
  // const resumeLink = "https://github.com/boris-gladkikh/updatedportfolio/raw/master/Boris%20Gladkikh%202020%20Resume.pdf";


  return (
    <>
      <div className="bluer-box text-center p-5">
        <h2 className="mb-5 alata-font">I'D LOVE TO HEAR FROM YOU.</h2>
        <ContactForm />
      </div>


      <div className=" teal-box text-center  p-5 ">
        <div className="">
          <h4 className="alata-font text-white mt-5  pb-2 mb-5 ">
            I AM CURRENTLY LOOKING FOR NEW EMPLOYMENT OPPORTUNITIES.
          </h4>
          <p className="mt-5 pt-2 w-75 m-auto ">
            <strong>
            For inquiries, offers, collaborative endeavors, etc. please E-mail
            me, use the provided contact form, or find me at any of the social media links below.

            </strong>
      </p>

        </div>
        <ContactIcons />
      </div>
    </>
  )
}

export default Contact