import React from "react";
import projectList from "./projectList";
import ProjectContainer from "./ProjectContainer";
// import DesignGrid from "./DesignGrid";

//displays portfolio page with grid of project components

function Portfolio() {
  //freelance projects
  const freelance = projectList.filter((p) => p.type === "freelance");

  //personal portfolio projects
  const personal = projectList.filter((p) => p.type === "personal");

  return (
    <div className="app px-5 pb-5">
      <h2 className="pt-5 pb-3">PORTFOLIO</h2>
      <h4 className="text-white alata-font">
        YOU CAN FIND EXAMPLES OF MY WORK HERE.
      </h4>
      <h6 className="pb-5 light-blue-text">Click on an image for more info.</h6>
      <ProjectContainer title="FREELANCE" projectArray={freelance} />
      <ProjectContainer title="PERSONAL" projectArray={personal} />
      {/* <DesignGrid /> */}
      
      
    </div>
  );
}

export default Portfolio;
