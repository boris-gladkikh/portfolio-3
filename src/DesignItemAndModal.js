import React from "react";
import "./DesignGrid.css";

//Clickable design grid item with modal displaying item and details
function DesignItemAndModal({ design }) {
  return (
    <>
      <div className="design-modal">
        <img className="img-fluid" src={design.img} alt={design.name}></img>
      </div>

      <div key={design.title} className="grid-item">
        <img className="img-fluid" src={design.img} alt={design.name}></img>
      </div>
    </>
  );
}

export default DesignItemAndModal;
