import React from "react";
import "./DesignItem.css";

function DesignItem({ design, onOpen }) {
  return (
    <figure className="design-item">
      <button type="button" className="design-item-btn" onClick={onOpen}>
        <span className="media media--1x1">
          <img src={design.img} alt={design.title} loading="lazy" />
        </span>
      </button>
      <figcaption>{design.title}</figcaption>
    </figure>
  );
}

export default DesignItem;
