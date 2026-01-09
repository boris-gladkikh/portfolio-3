import React from "react";
import projectList from "./projectList";
import Project from "./Project";
import DesignGrid from "./DesignGrid";
import "./Portfolio.css";


function Portfolio() {

  const freelance = projectList.filter((p) => p.type === "freelance");

  return (
    <>
    <div className="app px-5 pb-5" id="portfolio">
      <div className="pt-5 page-header">PORTFOLIO.</div>
      <div className="mb-5">
        Examples of my freelance and design work.
      </div>
      <div className="mb-5">
      <h2 className="mb-5">FREELANCE</h2>
      {freelance.map((p) => (
          <Project project={p} />
      ))}
      </div>
      <h2 className="mb-5">DESIGN</h2>
      <DesignGrid />
      
      
    </div>
    </>
  );
}

export default Portfolio;
