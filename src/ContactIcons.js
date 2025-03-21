import React from 'react';

function ContactIcons() {
  return (
      <div className=" night-pallete p-3">
        <a href="mailto:borisagladkikh@gmail.com" rel="noopener noreferrer" target="_blank">
          <i className=" fa-2x fa fa-envelope-open-text mx-2 text-white"></i>
        </a>
        <a href="https://github.com/boris-gladkikh" rel="noopener noreferrer" target="_blank">
          <i className="fa-2x fab fa-github mx-2 text-white "></i>
        </a>
        <a href="https://www.linkedin.com/in/boris-gladkikh/" rel="noopener noreferrer" target="_blank">
          <i className="fa-2x fab fa-linkedin-in mx-2 text-white" />
        </a>
        <a href="https://www.facebook.com/borisgladkill" rel="noopener noreferrer" target="_blank">
          <i className="fa-2x fab fa-facebook mx-2 text-white "></i>
        </a>
      </div>

  )
}

export default ContactIcons