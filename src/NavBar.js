import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function NavBar() {
  return (
    <div>
      {/* <Navbar expand="lg"  variant="dark" className="justify-content-end" id="nav-style" >
        <Navbar.Toggle aria-controls="navigation"/>
        <Navbar.Collapse id="navigation" className="text-center justify-content-end">
        <Nav style={{fontSize:"18px"}}className=" alata-font text-white ">
          <Nav.Item>
          <NavLink className="px-1" exact to="/">HOME</NavLink>
          </Nav.Item>
          <Nav.Item>
          <NavLink className="px-1" to="/portfolio">PORTFOLIO</NavLink>
          </Nav.Item>
          <Nav.Item>
          <NavLink className="px-1" to="/contact">CONTACT</NavLink>
          </Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <Navbar expand="lg"  variant="dark" className="justify-content-start" id="nav-style" >
        {/* <Navbar.Toggle aria-controls="navigation"/> */}
        <Nav style={{fontSize:"18px"}}className=" alata-font text-white ">
          <Nav.Item>
          <NavLink className="px-1" exact to="/">HOME</NavLink>
          </Nav.Item>
          {/* <Nav.Item>
          <NavLink className="px-1" to="/contact">CONTACT</NavLink>
          </Nav.Item> */}
        </Nav>
      </Navbar>

    </div>
  )
}

export default NavBar