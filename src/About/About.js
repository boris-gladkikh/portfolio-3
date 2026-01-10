import React from "react";
import "./About.css";
import borisTrees from "../img/boris-trees-large-web.jpg";

function About() {
  return (
    <section className="app">
      <div className="parallax-section">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(${borisTrees})` }}
          aria-hidden="true"
        />

        <div className="parallax-content">
          <div className="content-container" id="about">
            <div className="pt-5 page-header">ABOUT.</div>

            <div className="">
              <h1 className="my-5">I AM BORIS.</h1>

              <h2 className="about-subheader">
                I am a full-stack software developer.
              </h2>
              <ul className="about-ul">
                <li>
                  I develop applications providing ethical quality of life
                  solutions to modern and future problems.
                </li>
                <li>
                  I have worked in healthcare tech, audio streaming tech, and
                  freelance app development.
                </li>
              </ul>
              <h2 className="about-subheader">
                I am an audio engineer and educator.
              </h2>
              <ul className="about-ul">
                <li>
                  I have engineered & done sound design for established bands and artists.
                </li>
                <li>
                  I have done SFX and scoring / soundtrack for video projects.
                </li>
                <li>
                  I have taught audio post-production, audio engineering, and sound
                  fundamentals at SAE technical institute.
                </li>
              </ul>
              <h2 className="about-subheader">
                I am an A/V artist and musician.
              </h2>
              <ul className="about-ul">
                <li>
                I have toured the continental U.S. for over a decade as an
                electronic musician.
                </li>
                <li>
                I continue to write and release music
                under several musical aliases.
                </li>
                <li>
                I am working on exciting new A/V
                endeavors and interactive art.
                </li>
              </ul>
              <p className="about-p">

              </p>

              {/* <h3 className="">
                I am currently part of the dev team at Radio Paradise, working
                to bring human-curated music to people for free, without ads.
              </h3> */}
              <div className="pt-5 page-header">SKILLS.</div>
              <div className="skills-grid">
                <div className="skills-box">
                  <h4>CODE</h4>
                  <ul>
                    <li>Javascript, Typescript, C#, Python</li>
                    <li>Angular, React, Next.JS, Node.JS, ExpressJS</li>
                    <li>.NET MVC, .NET Core</li>
                    <li>SQL, NoSQL, PostgreSQL MySQL MongoDB, MSSQL</li>
                    <li>Azure - AZ900 Certified, AWS, S3, Amplify, Lambda</li>
                  </ul>
                </div>
                <div className="skills-box">
                  <h4>DESIGN </h4>
                  <ul>
                    <li>HTML5,CSS3, SCSS</li>
                    <li>Material-UI, Bootstrap, Tailwind</li>
                    <li>Photoshop, Illustrator, Indesign</li> <li>Figma</li>
                  </ul>
                </div>
                <div className="skills-box">
                  <h4>AUDIO </h4>
                  <ul>
                    <li>Ableton Live, Pro Tools, Cubase, Logic</li>
                    <li>FMOD, WWISE</li>
                    <li>
                      Signal flow, engineering, recording studio experience
                    </li>
                    <li>Composition, scoring, soundtrack </li>
                    <li>Post-production, SFX design, Foley, Mixing</li>
                  </ul>
                </div>
                <div className="skills-box">
                  <h4>VISUAL </h4>
                  <ul>
                    <li>Da Vinci Resolve</li> <li>TouchDesigner</li>{" "}
                    <li>Resolume</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
