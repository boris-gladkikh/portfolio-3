import React, {useState, useEffect} from 'react';
import './Homepage.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Homepage() {
  let [snowEnable, setSnowEnable] = useState(true);
  let showHideSnow;

  const resumeLink = "https://github.com/boris-gladkikh/updatedportfolio/raw/master/Boris%20Gladkikh%202020%20Resume.pdf";


  //TODO: toggle visibility of divs, get animation working
  useEffect(function showSnow(){
    snowEnable ? showHideSnow = {opacity:"1"} : showHideSnow = {visibility:"hidden"}; 
    console.log("inside", snowEnable)
  },[snowEnable])

  function makeSnow(){
    setSnowEnable(!snowEnable); 
    console.log("is snow on?", showHideSnow);

  }


  return (
    <div className="logo-container">
      {/* <div  style={showHideSnow} className="snow-one"></div>
      <div style={showHideSnow}  className="snow-two"></div> */}
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
            <NavLink to={resumeLink}>RESUME</NavLink>
          </Nav.Item>
        </Nav>
      </div>
      <div className=" my-4 text-center">
      {/* <Button onClick={makeSnow} size="lg" className="bg-transparent" id="snowflake-btn" >
      <i className=" text-white fas fa-snowflake"></i>
      </Button> */}
      </div>
    </div>
  )
}

export default Homepage