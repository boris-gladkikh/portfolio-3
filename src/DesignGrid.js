import React from "react";
import "./DesignGrid.css";
import designList from "./designList";
import DesignItemAndModal from "./DesignItemAndModal";

//custom grid for photo designs, with design detail modal
function DesignGrid() {
 

  let photoGrid = designList.map((design) => (
    <DesignItemAndModal key={design.title} design={design} />
    
  ));
  return (

      <div className="grid-container">
        <h2 className="mb-5">DESIGN</h2>
        <div className="grid mt-5">{photoGrid}</div>
      </div>

  );
}

export default DesignGrid;
