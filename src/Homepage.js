import React from "react";
import "./Homepage.css";
import { NavLink } from "react-router-dom";
// import MoonLandingEffect from "./projects/001/MoonLandingEffect";
function Homepage() {
  return (
    <>
      <div className="logo-container">
        <div id="text-container">
        <div className=" header">BORIS GLADKIKH.</div>
        <div className="sub-header">
          I am a software developer / electronic musician / A/V artist residing
          in Portland, OR.
        </div>
        <div className="project-links-section">
        <NavLink className="project-link" exact to="/001">001</NavLink>
        /
        <NavLink className="project-link" exact to="/002">002</NavLink>
        /
        <NavLink className="project-link" exact to="/003">003</NavLink>


        </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
