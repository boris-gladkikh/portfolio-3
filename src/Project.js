import React from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';


function Project({ project }) {
  return (
    <div className="mt-2 mb-2">
      <Accordion>
        <h6>{project.title}</h6>
        <Card >
          <Card.Header className="bg-dark p-0">
            <Accordion.Toggle as="div" eventKey="0">
              <img style={{ maxWidth: "100%" }} src={project.img} alt={`pic of ${project.title}`} />
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body className=" text-left bg-color">
              <h2 className="text-center">{project.title.toUpperCase()}</h2>
              <p>{project.description}</p>
              <p><b className="text-white">Front end: </b>{project.frontend}</p>
              <p><b className="text-white">Back end:</b>{project.backend}</p>
              <div className="text-center">
                <a target="_blank" rel="noopener noreferrer" href={project.github}>Github</a> | <a target="_blank" rel="noopener noreferrer" href={project.link}>Live Demo</a>
              </div>
            </Card.Body>
          </Accordion.Collapse>


        </Card>
      </Accordion>
    </div>
  )

}

export default Project