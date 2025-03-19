import React from 'react';
import Project from "./Project";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectContainer({title, projectArray}){

  return(
    <>
    <h2 className="mb-5">{title}</h2>
    <Row>
      {projectArray.map((p) => (
        <Col key={p.title} xl="4" lg="6" sm="12">
          <Project project={p} />
        </Col>
      ))}
    </Row>
    </>

  )
}

export default ProjectContainer;