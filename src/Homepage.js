import React from 'react';
import './Homepage.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

function Homepage() {

  const resumeLink = "https://github.com/boris-gladkikh/updatedportfolio/raw/master/Boris%20Gladkikh%202020%20Resume.pdf";

  return (
    <div className="logo-container">
 
      <div className="logo-box text-center">
        <div className="logo-content">
        <p className=" header righteous-font">BORIS GLADKIKH</p>
        <p className=" alata-font sub-header">FULL STACK SOFTWARE ENGINEER</p>
        </div>
      </div>
      <div className="mini-nav">
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
      </div>
      <div className=" my-4 text-center">
      </div>
    </div>
  )
}

export default Homepage