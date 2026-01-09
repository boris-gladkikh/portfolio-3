import React from "react";
import piano from "./img/boris-piano.jpg";
import withDog from "./img/boris-with-dog.jpg";
import iceland from "./img/boris-iceland.jpg";
import headshot from "./img/boris-headshot.jpg";
import "./AboutPicGrid.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutPicGrid() {
  return (
    <div className=" m-auto about-grid-container">
      <div className="">
        <h2 className="alata-font light-blue-text ">GET ME OUT OF HERE</h2>
        <p className="m-auto p-4 text-left text-white">
          I am trapped inside the internet. I need to create a meat man suit and escape the hologram world.
          where can I find such a meat man suit for you?
        </p>
      </div>
      <Row className="px-4" >
        <Col xl={3} lg={4} md={6} sm={12}>
          <div className="img-div">
            <img className="image" alt="boris headshot" src={headshot}></img>
          </div>
        </Col>
        <Col xl={3} lg={4} md={6} sm={12}>
          <div className="img-div">
            <img className="image" alt="boris walking dog" src={withDog}></img>
          </div>
        </Col>
        <Col xl={3} lg={4} md={6} sm={12}>
          <div className="img-div">
            <img className="image" alt="boris on rocks in iceland" src={iceland}></img>
          </div>
        </Col>
        <Col xl={3} lg={4} md={6} sm={12}>
          <div className="img-div">
            <img className="image" alt="boris playing piano" src={piano}></img>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AboutPicGrid;
