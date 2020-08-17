import React from 'react';
import profilePic from './img/profile-photo.png';
import './About.css';

function About() {
  return (
    <>
      <div className="text-center text-white bg-color py-5">
        <div className="text-center">
          <img src={profilePic} alt="Boris pic" className="profile-pic" />
        </div>
        <div className="px-5 mb-5">
          <h2 className="mt-5">HELLO! I'M BORIS.</h2>
          <p style={{ fontSize: "24px" }}>
            I am a Russian born, NY raised software engineer now residing on the west coast.<br />
            I specialize in full stack development with an emphasis on front end design and optimization.</p>
          <p className="m-auto">
            Software engineering is both a career and a passion for me. From a unique and creative approach towards problem
            solving, to intuitive design and intelligent layout, software development has proven to be a rewarding and exciting
            experience. I constantly strive to learn new things and increase my skillset every day.
            When I'm not coding or learning I spend my time playing piano, writing and recording music, cooking and loving food
            of all kinds, reading sci-fi and horror, playing games (videogames, tabletop, and board games), watching cinema and
            shows (let's talk about Watchmen!) and hanging out with my cat and dog.
        </p>
        </div>
      </div>

      <div style={{ width: "100%", height: "50vh" }} className="px-5 py-5 red-color text-white text-center">
        <h2>TOOLKIT</h2>
        <h5>
          Javascript, React, Redux, Node/Express, Python, Flask, SQL, Postgres, NoSQL, MongoDB, AWS
        </h5>
        <h3 className="mt-5">ADDITIONAL SKILLS</h3>
        <h5>
          HTML5, CSS3, Photoshop, Illustrator, Figma, RESTful APIs, Git, Github
        </h5>

      </div>

    </>
  )
}

export default About