import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

// Freelance work is a full-width ruled row; a creative piece is a cell in the
// 3-up grid. Both are one link, no card, no shadow.
function Project({ project, index }) {
  if (project.type === "freelance") {
    return (
      <div className="freelance-row">
        <div className="freelance-detail">
          <span className="index-num">
            {String(index).padStart(2, "0")}
          </span>
          <h4>{project.title}</h4>
          <p>{project.description}</p>
          {project.link && (
            <a
              className="btn btn-ghost freelance-visit"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit site &rarr;
            </a>
          )}
        </div>
        <figure className="media media--16x9">
          <img
            src={project.img}
            alt={`${project.title} site`}
            loading="lazy"
          />
        </figure>
      </div>
    );
  }

  return (
    <Link className="creative-cell" to={project.link}>
      <figure className="media media--4x3">
        <img
          src={project.img}
          alt={`${project.title} screen capture`}
          loading="lazy"
        />
      </figure>
      <div className="creative-caption">
        {/* <span className="index-num">{project.number}</span> */}
        <span className="creative-title">{project.title}</span>
        <span className="creative-description">{project.description}</span>
      </div>
    </Link>
  );
}

export default Project;
