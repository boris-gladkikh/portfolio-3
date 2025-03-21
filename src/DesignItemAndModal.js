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
        <img title={design.detail} className="modal-image" src={design.img} alt={design.name}></img>
        <div onClick={handleHide} className="close-btn">
          close
        </div>
      </div>

      <div onClick={handleShow} key={design.title} className="grid-item">
        <img className="img-fluid" src={design.img} alt={design.name}></img>
      </div>
    </>
  );
}

export default DesignItemAndModal;
