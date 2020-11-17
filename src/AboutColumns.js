import React from "react";
import "./AboutColumns.css";
import {NavLink} from 'react-router-dom';

function AboutColumns() {
  return (
    <div className="about-container">
      <div className="item-1  text-left">
        <h3 className="text-center">WHO I AM</h3>
        <p>
          My goal as a software engineer is to write code that is scalable, performant,
          thoughtful and easy to read. I take pleasure
          from finding unique solutions to challenges, and from seeing
          applications through the entire product lifecycle, from conception to
          deployment. I feel comfortable working with client side
          front end code, as well as back end applications, databases and API’s.
        </p>
      </div>
      <div className="item-2 text-left">
        <h3 className="text-center">WHAT I DO</h3>
        <p>
          I am currently working as a freelance developer. My past projects
          include sites for electronic artist Gladkill and printing and
          installation company Bay Area Graphic Solutions. You can see more
          projects <NavLink to="/portfolio">here</NavLink>. I also completed an internship 
          with event monetization start-up Livestack. I am now seeking the next step in my
          development journey and I am actively pursuing employment
          opportunities.
        </p>
      </div>
    </div>
  );
}
export default AboutColumns;
