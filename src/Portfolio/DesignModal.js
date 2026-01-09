import React, { useEffect } from "react";
import "./DesignModal.css";

function DesignModal({ design, onClose }) {
  // close on ESC
  useEffect(() => {
    if (!design) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [design, onClose]);

  if (!design) return null;

  return (
    <div className="design-modal-overlay" onClick={onClose}>
      <div className="design-modal" onClick={(e) => e.stopPropagation()}>
        <img className="modal-image" src={design.img} alt={design.name} />
        {design.detail && <div className="modal-detail">{design.detail}</div>}
        <button className="close-btn" onClick={onClose}>close</button>
      </div>
    </div>
  );
}

export default DesignModal;
