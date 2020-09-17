import React from 'react';
import profilePic from './img/profile-photo.jpg';
import ToolkitIcons from './ToolkitIcons';
import Toolkit from './Toolkit';
import './About.css';

function About() {
  return (
    <>
      <div className=" blue-box text-center text-white py-5">
        <div className="text-center">
          <img src={profilePic} alt="Boris pic" className="profile-pic" />
        </div>
        <div className="m-auto px-5 mb-5 bio-text">
          <h2 className="hello-text mt-5">HELLO! I'M BORIS.</h2>

          <h3 className="mt-5 ">
            I am a Russian born, NY raised software engineer now residing on the west coast.<br />
          </h3>
          <h5 className="my-5 light-blue-text">
            I specialize in full stack development with an emphasis on front end design and optimization.
            </h5>
        </div>
      </div>

      <div className="px-5 py-5 teal-box text-center">
        <Toolkit />
        <ToolkitIcons />
      </div>

      <div className="bluer-box text-center">
        <h3 className="py-5 light-blue-text alata-font">
          SOFTWARE DEVELOPMENT IS MY PASSION.          </h3>
        <p className="m-auto px-5 bio-text text-white">
          From a unique and creative approach towards problem
          solving, to intuitive design and intelligent layout, software development continues to captivate and inspire me, and has proven to be a rewarding and exciting
          career path.
        </p>
        <h3 className="alata-font pt-5">
          WHEN I'M NOT CODING...
        </h3>
        <p className="m-auto px-5 pb-5 bio-text">
          I spend my time playing piano, writing and recording music, cooking and loving food
          of all kinds, reading sci-fi and horror, playing games (videogames, tabletop, and board games), watching cinema and
          shows (let's talk about Watchmen!) and hanging out with my cat & dog.
        </p>
      </div>

    </>
  )
}

export default About