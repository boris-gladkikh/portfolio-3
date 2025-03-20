import React from "react";
import projectList from "./projectList";
import ProjectContainer from "./ProjectContainer";
import DesignGrid from "./DesignGrid";


function Portfolio() {

  window.scrollTo(0,0);
  const freelance = projectList.filter((p) => p.type === "freelance");

  return (
    <div className="app px-5 pb-5">
      <div className="pt-5 page-header">PORTFOLIO.</div>
      <div className="mb-5">
        Examples of my freelance and design work.
      </div>
      <div className="mb-5">
      <ProjectContainer title="FREELANCE" projectArray={freelance} />
      </div>
      <DesignGrid />
      
      
    </div>
  );
}

export default Portfolio;
