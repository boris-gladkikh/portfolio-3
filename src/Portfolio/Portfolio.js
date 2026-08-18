import React, { useState } from "react";
import projectList from "../db/projectList";
import designList from "../db/designList";
import creativeProjects from "../db/creativeProjectsList";
import Project from "./Project";
import DesignItem from "./DesignItem";
import DesignModal from "./DesignModal";
import "./Portfolio.css";

function CategoryHead({ title, children }) {
  return (
    <div className="portfolio-category">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Portfolio() {
  const [activeDesign, setActiveDesign] = useState(null);

  const freelance = projectList.filter((p) => p.type === "freelance");

  return (
    <section id="portfolio" className="section portfolio">
      <div className="eyebrow">
        <span className="eyebrow-num">03</span>
        <span>Portfolio</span>
        <span className="eyebrow-rule" />
      </div>

      <h2 className="section-title portfolio-title">
        Portfolio<span className="accent">.</span>
      </h2>

      <CategoryHead title="Creative">
        A series of interactive art pieces with an emphasis on minimalism and
        user intuition / interaction. Desktop only.
      </CategoryHead>

      <div className="portfolio-creative-grid">
        {creativeProjects.map((project) => (
          <Project key={project.number} project={project} />
        ))}
      </div>

      <CategoryHead title="Freelance">
        Personal and freelance web development projects. Please contact for
        corporate/enterprise projects.
      </CategoryHead>

      <div className="portfolio-freelance">
        {freelance.map((project, i) => (
          <Project key={project.title} project={project} index={i + 1} />
        ))}
      </div>

      <CategoryHead title="Design">
        Examples of graphic design work, album art, one sheets, epk's and
        flyers.
      </CategoryHead>

      <div className="portfolio-design-grid">
        {designList.map((design) => (
          <DesignItem
            key={design.img}
            design={design}
            onOpen={() => setActiveDesign(design)}
          />
        ))}
      </div>

      <DesignModal
        design={activeDesign}
        onClose={() => setActiveDesign(null)}
      />
    </section>
  );
}

export default Portfolio;
