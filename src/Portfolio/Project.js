import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

function Project({ project }) {
  const CardContent = (
    <>
      <h5 className="project-title">{project.title}</h5>
      <img
        src={project.img}
        alt={`pic of ${project.title}`}
        className="project-pic"
      />

      {project.type === "freelance" && project.description && (
        <div className="project-text">
          {project.description}
        </div>
      )}
    </>
  );

  if (project.type === "freelance") {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-item project-link"
        data-card
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link
      to={project.link}
      className="project-item project-link"
      data-card
    >
      {CardContent}
    </Link>
  );
}

export default Project;
