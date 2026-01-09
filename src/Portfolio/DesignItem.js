import React from "react";
import "./DesignItem.css";

function DesignItem({ design, onOpen }) {
  return (
    <div className="design-card" data-card onClick={onOpen}>
      <img src={design.img} alt={design.name} />
    </div>
  );
}

export default DesignItem;
