import React from "react";
import "./AboutColumns.css";
import { NavLink } from "react-router-dom";

function AboutColumns() {
  return (
    <div className="about-container pt=4">
      <div className="item-1">
        <h3 className="text-center">WHO I AM</h3>
        <p>
          My goal as a software engineer is to write code that is scalable,
          performant, thoughtful and easy to read. I take pleasure from finding
          optimized solutions to challenges, and from seeing applications
          through the entire product lifecycle, from conception to deployment. I
          feel comfortable working with client side front end code, as well as
          back end applications, databases and API’s.
        </p>
      </div>
      <div className="item-2 ">
        <h3 className="text-center">WHAT I DO</h3>
        <p>
          I am currently working as a full stack engineer with Health Data
          Movers. I was previously freelancing as a web developer - You can see
          some past projects <NavLink to="/portfolio">here</NavLink>. Prior to
          that I completed an internship with event monetization start-up
          Livestack. I am always looking to expand my knowledge of development
          and engineering and I strive to learn new things every day.
        </p>
      </div>
    </div>
  );
}
export default AboutColumns;
