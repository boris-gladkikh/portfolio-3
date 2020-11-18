import React, { useState } from "react";
import "./DesignGrid.css";

//Clickable design grid item with modal displaying item and details

function DesignItemAndModal({ design }) {
  const [show, setShow] = useState(false);

  let modalView = show ? " " : "hidden";

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <>
      <div onClick={handleHide} className={`design-modal ${modalView} `}>
        <div className="modal-detail"><p>{design.detail}</p></div>
        <img className="modal-image" src={design.img} alt={design.name}></img>
        <button onClick={handleHide}>X</button>
      </div>

      <div onClick={handleShow} key={design.title} className="grid-item">
        <img className="img-fluid" src={design.img} alt={design.name}></img>
      </div>
    </>
  );
}

export default DesignItemAndModal;
