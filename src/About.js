import React from "react";
import profilePic from "./img/profile-photo.jpg";
import ToolkitIcons from "./ToolkitIcons";
import Toolkit from "./Toolkit";
import "./About.css";
import AboutColumns from "./AboutColumns";
import AboutPicGrid from "./AboutPicGrid";

function About() {
  return (
    <>
      <div className=" blue-box text-center text-white py-5">
        <div className="pt-5 text-center">
          <img src={profilePic} alt="Boris pic" className=" profile-pic" />
        </div>
        <div className="m-auto px-5 mb-5 bio-text">
          <h2 className="hello-text mt-5">HELLO! I'M BORIS.</h2>

          <h4 className="mt-5 prompt-font text-white ">
            I am a Russian born, NY raised software engineer now residing on the
            west coast.
            <br />
          </h4>
          <h5 className="my-2 light-blue-text">
            I specialize in full stack development with an emphasis on front end
            design and optimization.
          </h5>
          <AboutColumns className="pt-4" />
        </div>
      </div>

      <div className="px-5 py-5 teal-box text-center">
        <Toolkit />
        <ToolkitIcons />
      </div>

      <div className="bluer-box text-center">
        
        <div className="py-4 pb-5">
          <AboutPicGrid />
        </div>
      </div>
    </>
  );
}

export default About;
