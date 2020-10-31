import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';

function Mininav(){

  const resumeLink = "https://github.com/boris-gladkikh/updatedportfolio/raw/master/Boris%20Gladkikh%202020%20Resume.pdf";

  return (
    <Nav className="alata-font text-white">
    <Nav.Item>
      <NavLink to="/contact">CONTACT</NavLink>|
  </Nav.Item>
    <Nav.Item>
      <NavLink to="/portfolio">PORTFOLIO</NavLink>|
  </Nav.Item>
    <Nav.Item>
      <a href={resumeLink}>RESUME</a>
    </Nav.Item>
  </Nav>
  )
}

export default Mininav

