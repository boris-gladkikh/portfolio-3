import React, { useState } from "react";
import projectList from "../db/projectList";
import designList from "../db/designList";
import creativeProjects from "../db/creativeProjectsList";
import Project from "./Project";
import DesignItem from "./DesignItem";
import DesignModal from "./DesignModal";
import "./Portfolio.css";
import borisGraf from "../img/boris-grafiti-large-web.jpg";
import SnapCarousel from "../components/SnapCarousel";

function Portfolio() {
  const [activeDesign, setActiveDesign] = useState(null);

  const freelance = projectList.filter((p) => p.type === "freelance");

  return (
    <>
      <div className="app">
        <div className="parallax-section">
          <div
            className="parallax-bg"
            style={{ backgroundImage: `url(${borisGraf})` }}
            aria-hidden="true"
          />
          <div className="parallax-content">
            <div className="content-container" id="portfolio">
              <div className="pt-5 page-header">PORTFOLIO.</div>
              <div className="mb-5">
                <h2 className="my-5">FREELANCE</h2>
                <div className="my-4">
                  Personal and freelance web development projects. Please
                  contact for corporate/enterprise projects.
                </div>
                <SnapCarousel>
                  {freelance.map((p) => (
                    <Project key={p.id ?? p.title} project={p} type={p.type} />
                  ))}
                </SnapCarousel>
              </div>
              <div className="mb-5">
                <h2 className="mb-5">CREATIVE</h2>
                <div className="my-4">
                  A series of interactive art pieces with an emphasis on
                  minimalism and user intuition / interaction. Desktop only.
                </div>

                <SnapCarousel>
                  {creativeProjects.map((p) => (
                    <Project key={p.id ?? p.title} project={p} />
                  ))}
                </SnapCarousel>
              </div>
              <h2 className="mb-5">DESIGN</h2>
              <SnapCarousel>
                {designList.map((d) => (
                  <DesignItem
                    key={d.id ?? d.name}
                    design={d}
                    onOpen={() => setActiveDesign(d)}
                  />
                ))}
              </SnapCarousel>
              <DesignModal
                design={activeDesign}
                onClose={() => setActiveDesign(null)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
