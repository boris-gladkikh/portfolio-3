import React from "react";
import "./Project.css";

function Project({ project }) {

  return (
    <div className="mt-2 mb-2">
      <h6>{project.title}</h6>
      <div className="text-right">
            </div>
            {/* <img
              style={{ maxWidth: "100%" }}
              src={project.img}
              alt={`pic of ${project.title}`}
              className="m-0 modal-pic"
            /> */}
            <div className="my-5">{project.description}</div>
            <div className="">
              <a target="_blank" rel="noopener noreferrer" href={project.link}>Link</a>
            </div>
    </div>
  );
}

export default Project;
