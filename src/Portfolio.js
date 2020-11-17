import React from "react";
import projectList from "./projectList";
import Project from "./Project";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import ProjectContainer from './ProjectContainer';

//displays portfolio page with grid of project components

function Portfolio() {

  //freelance projects
  const freelance = projectList.filter(p => (
    p.type === "freelance"
  ));

    //personal portfolio projects
  const personal = projectList.filter(p => (
    p.type === "personal"
  ));


  return (
    <div className="app px-5 pb-5">
      <h2 className="pt-5 pb-3">PORTFOLIO</h2>
      <h4 className="text-white alata-font">
        YOU CAN FIND EXAMPLES OF MY WORK HERE.
      </h4>
      <h6 className="pb-5 light-blue-text">Click on an image for more info.</h6>
      <Container className="mt-3 mb-5">
        <h3>FREELANCE</h3>
        <Row>
          {freelance.map((p) => (
            <Col key={p.title} xl="4" lg="6" sm="12">
              <Project project={p} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="mt-3 mb-5">
        <h3>PERSONAL</h3>
        <Row>
          {personal.map((p) => (
            <Col key={p.title} xl="4" lg="6" sm="12">
              <Project project={p} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
