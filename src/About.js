import React from "react";
import "./About.css";
import borisHeadshot from '././img/boris-headshot.jpg';



function About() {
  return (
    <>
    <div>
      <img className="boris-img" src={borisHeadshot} alt="boris-headshot"></img>

    </div>

    </>
  );
}

export default About;
