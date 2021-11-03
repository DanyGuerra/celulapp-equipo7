import React from "react";
import { Navbar, Nav, Container, NavDropdown, NavLink } from "react-bootstrap";
import Botones from "./Botones";
import "../css/Navbar.css";
import Input from "./InputGroup";
import { Link } from "react-router-dom";

function NavbarElement() {
  return (
    <Navbar bg="light" variant="light" collapseOnSelect expand="lg">
      <Container fluid className="navbar-flex">
        <Navbar.Brand>
          {/* <Image
            src="./smartphone.png"
            width="90px"
            height="90px"
            className="img"
          /> */}
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
            }}
          >
            Celulapp
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="justify-content-center"
            activeKey="/
            "
          >
            <NavLink href="/">Home</NavLink>
            <NavDropdown title="Celulares" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Los más vendidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Marcas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink href="/agregar-celular">Agregar celular</NavLink>

            {/*<Input/>*/}

            <Input />
            {/*<Botones/>*/}
            <Botones />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarElement;
