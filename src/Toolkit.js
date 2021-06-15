import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Toolkit.css';
const resumeLink = "https://github.com/boris-gladkikh/portfolio-3/blob/master/Boris%20Gladkikh%20June%202021%20Resume.pdf";

let programsArray = [
  "Javascript", "React", "Redux", "Node",  "ExpressJS",
  "HTML", "CSS", "Python", "Flask", "PostgreSQL", "MySQL", "Sequelize", "MongoDB", "Figma",
  "Photoshop", "Illustrator", "Jasmine", "Jest", "Supertest", "React Testing Library",   "RESTful APIs", "Git", "jira", "Sentry"];

let programList = programsArray.map(item => (
<Col key={item} lg="3" md="6" sm="6" xs="6"><h6 className="alata-font p-2 toolkit-item">{item.toUpperCase()}</h6></Col>
))

function Toolkit() {


  return (
    <div className="toolkit my-5 w-75 m-auto">
      <h2>TOOLKIT</h2>
      <Row className="my-5" >
        {programList}

      </Row>

      <a id="toolkit-link" href={resumeLink}><h4>DOWNLOAD RESUME</h4></a>


    </div>

  )

}

export default Toolkit