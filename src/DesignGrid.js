import React from "react";
import "./DesignGrid.css";
import designList from "./designList";
import Container from "react-bootstrap/Container";
import DesignItemAndModal from "./DesignItemAndModal";

//custom grid for photo designs, with design detail modal
function DesignGrid() {
 

  let photoGrid = designList.map((design) => (
    <DesignItemAndModal key={design.title} design={design} />
    
  ));
  return (

      <Container className="grid-container">
        <h3>DESIGN</h3>
        <div className="grid mt-5">{photoGrid}</div>
      </Container>

  );
}

export default DesignGrid;
