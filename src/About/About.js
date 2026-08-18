import React from "react";
import "./About.css";
import mural from "../img/boris-grafiti-large-web.jpg";

const STATEMENTS = [
  {
    statement: "I am a full-stack software developer.",
    points: [
      "I develop applications providing ethical quality of life solutions to modern and future problems.",
      "I have worked in healthcare tech, audio streaming tech, and freelance app development.",
    ],
  },
  {
    statement: "I am an audio engineer and educator.",
    points: [
      "I have engineered & done sound design for established bands and artists.",
      "I have done SFX and scoring / soundtrack for video projects.",
      "I have taught audio post-production, audio engineering, and sound fundamentals at SAE technical institute.",
    ],
  },
  {
    statement: "I am an A/V artist and musician.",
    points: [
      "I have toured the continental U.S. for over a decade as an electronic musician.",
      "I continue to write and release music under several musical aliases.",
      "I am working on exciting new A/V endeavors and interactive art.",
    ],
  },
];

const SKILLS = [
  {
    discipline: "Code",
    items: [
      "Typescript, Python, C#, PHP",
      "AngularJS, React, Next.JS, Node.JS, ExpressJS",
      ".NET MVC, .NET Core",
      "SQL, NoSQL, PostgreSQL MySQL MongoDB, MSSQL",
      "Azure - AZ900 Certified, AWS, S3, Amplify, Lambda",
    ],
  },
  {
    discipline: "Design",
    items: [
      "HTML5,CSS3, SCSS",
      "Material-UI, Bootstrap, Tailwind",
      "Photoshop, Illustrator, Indesign",
      "Figma",
    ],
  },
  {
    discipline: "Audio",
    items: [
      "Ableton Live, Pro Tools, Cubase, Logic",
      "FMOD, WWISE",
      "Signal flow, engineering, recording studio experience",
      "Composition, scoring, soundtrack",
      "Post-production, SFX design, Foley, Mixing",
    ],
  },
  {
    discipline: "Visual",
    items: ["Da Vinci Resolve", "TouchDesigner", "Resolume"],
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="eyebrow">
        <span className="eyebrow-num">02</span>
        <span>About</span>
        <span className="eyebrow-rule" />
      </div>

      <h2 className="section-title">
        I am Boris<span className="accent">.</span>
      </h2>

      <div className="about-statements">
        {STATEMENTS.map(({ statement, points }) => (
          <div className="about-statement" key={statement}>
            <h3 className="about-statement-title">{statement}</h3>
            <ul className="about-points">
              {points.map((point) => (
                <li key={point}>
                  <span className="accent">&rarr;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="about-portrait-row">
        <figure className="media media--16x10 grayscale">
          <img src={mural} alt="Boris Gladkikh in front of a mural wall" />
        </figure>
        <div className="about-portrait-note">
          <span className="label about-portrait-label">Portland, OR</span>
          <p>
            A decade of touring, teaching and building // The same principles
            applied to code, system design, and art.
          </p>
        </div>
      </div>

      <h2 className="section-title about-skills-title">
        Skills<span className="accent">.</span>
      </h2>

      <div className="about-skills">
        {SKILLS.map(({ discipline, items }, i) => (
          <div className="about-skill-row" key={discipline}>
            <div className="about-skill-head">
              <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
              <h4>{discipline}</h4>
            </div>
            <div className="about-skill-items">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
