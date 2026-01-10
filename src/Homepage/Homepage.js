import React from "react";
import "./Homepage.css";
// import { NavLink } from "react-router-dom";
import RainRepel from "../projects/001/RainRepel";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

function Homepage() {
  return (
    <div className="home-wrap" id="home">
        <RainRepel>
          <div className="content-layer">
          <div className="logo-container" >
            <div id="text-container">
              <div className="header">BORIS GLADKIKH.</div>
              <div className="sub-header">
                I am a software developer / electronic musician / A/V artist
                residing in Portland, OR.
              </div>
            </div>
          </div>
          </div>
        </RainRepel>

      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default Homepage;
