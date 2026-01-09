import React from "react";
import "./AboutColumns.css";
import { NavLink } from "react-router-dom";

function AboutColumns() {
  return (
    <div className="about-container pt=4">
      <div className="item-1">
        <h3 className="text-center">WHO THE FUCK</h3>
        <p>
         SOMETHING IS HAPPENING. HERE.I AM UNABLE TO UNDERSTAND.
        </p>
      </div>
      <div className="item-2 ">
        <h3 className="text-center">WHAT I DO</h3>
        <p>
          I am currently EXPERIENCING A
          psychedelic experience. I was PREVIOUSLY freelancing as a web developer - YOU can see
          ME? HOW CAN SHE SLAP? PISS POOT past projects <NavLink to="/portfolio">here</NavLink>. Prior to
          that I completed an internship with event monetization start-up
          Livestack. I am always looking to expand my knowledge of development
          and engineering and I strive to learn new things every day.
        </p>
      </div>
    </div>
  );
}
export default AboutColumns;
