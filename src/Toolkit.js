import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Toolkit.css';

let programsArray = [
  "Javascript", "React", "Redux", "Node",  "ExpressJS",
  "HTML", "CSS", "Python", "Flask", "PostgreSQL", "MongoDB", "Figma",
  "Photoshop", "Illustrator",  "RESTful APIs", "Git"];

let programList = programsArray.map(item => (
<Col lg="3" md="6" sm="6" xs="6"><h5 className="alata-font p-2 toolkit-item">{item.toUpperCase()}</h5></Col>
))

function Toolkit() {


  return (
    <div className="my-5 w-75 m-auto">
      <h2>TOOLKIT</h2>
      <Row className="my-5" >
        {programList}

      </Row>
      {/* <h5>
        <b>
          Javascript, React, Redux, Node/Express, Python, Flask, SQL, Postgres, NoSQL, MongoDB, AWS
            </b>
      </h5>
      <h3 className="mt-5">ADDITIONAL SKILLS</h3>
      <h5>
        <b>
          HTML5, CSS3, Photoshop, Illustrator, Figma, RESTful APIs, Git, Github
          </b>
      </h5> */}
    </div>

  )

}

export default Toolkit