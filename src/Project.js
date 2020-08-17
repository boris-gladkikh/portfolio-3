import React from 'react';
import './Project.css';

function Project({ project }) {
  return (
    <>
    <div className="img-card my-3">
      <a href={project.link} rel="noopener noreferrer" target="_blank">
      <img src={project.img} alt={`pic of ${project.title}`}/>
      </a>
    </div>
    <div className="info-card my-3"> 
      <h2>{project.title.toUpperCase()}</h2>
      <hr className="line m-auto" />
      <div className="text-left">
      <p>{project.description}</p>
      <hr className="line m-auto" />
      <p>Front end: {project.frontend}</p>
      <p>Back end: {project.backend}</p>
      <a href={project.github}>Github</a>
      </div>

    </div>
    </>
  )

}

export default Project