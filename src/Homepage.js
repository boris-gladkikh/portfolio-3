import React from "react";
import "./Homepage.css";
import About from "./About";
import snowyBG from "./img/snowy-bg.jpg";
function Homepage() {
  return (
    <>
    <div className="logo-container">
      <div className="logo-area">
        <div className="logo-box text-center">
          <div className="logo-content">
            <p className=" header righteous-font">BORIS GLADKIKH</p>
            <p className=" alata-font sub-header">
              SOFTWARE ENGINEER
            </p>
          </div>
        </div>
      </div>

      <div>
        <img className="bg-img" src={snowyBG} alt="snowy background"></img>
      </div>
    </div>
          <About />
          </>

  );
}

export default Homepage;
