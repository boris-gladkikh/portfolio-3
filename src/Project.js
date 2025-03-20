import React, { useState } from "react";
import "./Project.css";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function Project({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mt-2 mb-2">
      <Modal size="lg" show={show} onHide={handleClose}>
        <Card>
          <Card.Body className=" text-left bg-color">
            <div className="text-right">
              <div className="close-btn" onClick={handleClose}>close</div>
            </div>
            <img
              style={{ maxWidth: "100%" }}
              src={project.img}
              alt={`pic of ${project.title}`}
              className="m-0 modal-pic"
            />
            <h2 className="text-center m-1">{project.title.toUpperCase()}</h2>

            <p className="text-white my-5">{project.description}</p>
            <div className="text-center">
              <a target="_blank" rel="noopener noreferrer" href={project.link}>Link</a>
            </div>
          </Card.Body>
        </Card>
      </Modal>

      <h6>{project.title}</h6>
      <div onClick={handleShow} className="project-pic">
        <img
          style={{ maxWidth: "100%" }}
          src={project.img}
          alt={`pic of ${project.title}`}
        />
      </div>
    </div>
  );
}

export default Project;
