import React from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


function Project({ project }) {
  return (
    <>
    <Card>
      <Card.Header className="bg-dark">
      <a href={project.link} rel="noopener noreferrer" target="_blank">
      <img src={project.img} alt={`pic of ${project.title}`}/>
      </a>
      </Card.Header>
      <Card.Body className=" text-left bg-dark">
      <h2 className="text-center">{project.title.toUpperCase()}</h2>
      <p>{project.description}</p>
      <p><b className="text-white">Front end: </b>{project.frontend}</p>
      <p><b className="text-white">Back end:</b>{project.backend}</p>

      </Card.Body>
      <Card.Footer className=" bg-dark">
      <a href={project.github}>Github</a> | <a href={project.link}>Live Demo</a>

      </Card.Footer>

    </Card>
    </>
  )

}

export default Project