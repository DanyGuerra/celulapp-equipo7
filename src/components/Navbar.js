import React, { useState } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import Botones from "./Botones";
import "../css/Navbar.css";
import Input from "./InputGroup";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DropdownPhone from "./DropdownPhone";

function NavbarElement() {
  const [showDropPhone, setShowDropPhone] = useState(false);
  const [activeDropPhone, setActiveDropPhone] = useState(false);

  return (
    <Navbar bg="light" variant="light" collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <PhoneAndroidIcon></PhoneAndroidIcon>
          Celulapp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="justify-content-center"
            activeKey="/
            "
          >
            <NavLink href="/">Home</NavLink>

            <DropdownPhone showDropPhone={showDropPhone} />
            <NavLink
              onMouseOver={() => {
                setShowDropPhone(true);
              }}
              // onMouseOut={() => {
              //   setShowDropPhone(false);
              // }}
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
