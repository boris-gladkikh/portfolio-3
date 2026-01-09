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

      <div className="design-grid-container">
        <div className="grid mt-5">{photoGrid}</div>
      </div>

  );
}

export default DesignGrid;
