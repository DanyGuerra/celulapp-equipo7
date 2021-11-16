import React from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import Botones from "./Botones";
import "../css/Navbar.css";
import Input from "./InputGroup";
import { Link } from "react-router-dom";
// import { PhoneAndroidIcon } from "@mui/icons-material";

function NavbarElement() {
  return (
    <Navbar bg="light" variant="light" collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">Celulapp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="justify-content-center"
            activeKey="/
            "
          >
            <NavLink href="/">Home</NavLink>
            <NavLink
              onMouseOver={() => {
                console.log("Hola");
              }}
            >
              Celulares
            </NavLink>

            <NavLink href="/agregar-celular">Agregar celular</NavLink>

            <Input />
            <Botones />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
