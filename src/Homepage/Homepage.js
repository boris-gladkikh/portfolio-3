import React from "react";
import "./Homepage.css";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer";
import portrait from "../img/boris-tree-vertical.jpg";

const DISCIPLINES = ["Code", "Design", "Audio", "Visual"];

function Homepage() {
  return (
    <>
      <section id="home" className="section home">
        <div className="eyebrow">
          <span className="eyebrow-num">01</span>
          <span>welcome</span>
          <span className="eyebrow-rule" />
        </div>

        <h1 className="home-name">
          Boris
          <br />
          Gladkikh<span className="accent">.</span>
        </h1>

        <div className="home-grid">
          <div className="home-lede">
            <p className="home-tagline">
              I am a software developer / electronic musician / A/V artist
              residing in Portland, OR.
            </p>

            <div className="home-disciplines">
              <span className="label">Disciplines</span>
              <div className="home-discipline-row">
                {DISCIPLINES.map((discipline) => (
                  <span key={discipline}>{discipline}</span>
                ))}
              </div>
            </div>
          </div>

          <figure className="media media--3x4">
            <img src={portrait} alt="Boris Gladkikh" />
          </figure>
        </div>
      </section>

      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
