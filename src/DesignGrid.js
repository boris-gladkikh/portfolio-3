import React from "react";
import "./DesignGrid.css";
import designList from "./designList";

import Container from 'react-bootstrap/Container'

//#TODO: finish writing custom design grid
function DesignGrid() {

  let photoGrid = designList.map((design) => (
    <div key={design.title} className="grid-item">

      <img className="img-fluid" src={design.img} alt={design.name}></img>
    </div>
  ));
  return (
    <Container className="grid-container">
      <h3>DESIGN</h3>
      <div className="grid mt-5">{photoGrid}</div>
    </Container>
  );
}

export default DesignGrid;
