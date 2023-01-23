import React from "react";
import "./navegador.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
function Navegador() {
  return (
    <Nav justify variant="tabs">
      <Nav.Item>
      <NavLink to="/about"> <p>Sobre Mim</p> </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/portfolio"> <p>Ilustrações</p> </NavLink>
      </Nav.Item>
      <Nav.Item>
      <NavLink to="/contacto"> <p>Contacto</p> </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navegador;