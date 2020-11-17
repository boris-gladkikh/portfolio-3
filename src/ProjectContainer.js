import React from 'react';
import Project from "./Project";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function ProjectContainer({title, projectArray}){

  return(
    <Container className="mt-3 mb-5">
    <h3>{title}</h3>
    <Row>
      {projectArray.map((p) => (
        <Col key={p.title} xl="4" lg="6" sm="12">
          <Project project={p} />
        </Col>
      ))}
    </Row>
  </Container>

  )
}

export default ProjectContainer;