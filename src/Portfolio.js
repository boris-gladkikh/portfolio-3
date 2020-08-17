import React from 'react';
import Project from './Project';
import projectList from './projectList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Portfolio() {

  return (
    <div className="app px-5">
      <h2 className="pt-5 pb-3">PORTFOLIO</h2>
      <h5 className="pb-5">You can find some of my personal projects here.</h5>
      <Container className="m-auto mt-5">
        <Row>
          {projectList.map(p => (
            <Col key={p.title} lg="6" sm="12">
              <Project project={p} />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  )
}

export default Portfolio