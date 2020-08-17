import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg"  variant="dark" className=" bg-color justify-content-end" >
        <Navbar.Toggle aria-controls="navigation"/>
        <Navbar.Collapse id="navigation" className="text-center justify-content-end">
        <Nav style={{fontSize:"18px"}}className="text-white">
          <Nav.Link href="/">HOME</Nav.Link>
          <Nav.Link href="/about">ABOUT</Nav.Link>
          <Nav.Link href="portfolio">PORTFOLIO</Nav.Link>
          <Nav.Link href="/contact">CONTACT</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}

export default NavBar