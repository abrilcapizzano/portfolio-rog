import React from "react";
import "./navegador.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
function Navegador() {
  return (
    <Nav justify variant="tabs">
      <Nav.Item>
      <NavLink to="/"> <p>Portfolio</p> </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/about"> <p>About Me</p> </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/contact"> <p>Contact</p> </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navegador;