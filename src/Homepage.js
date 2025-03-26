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
        /
        <NavLink className="project-link" exact to="/004">004</NavLink>
        /
        <NavLink className="project-link" exact to="/005">005</NavLink>
        /
        <NavLink className="project-link" exact to="/006">006</NavLink>
        <div className="reminder">* some of these may not work on mobile.</div>


        </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
