import React, { useState } from "react";
import { Navbar, Nav, Container, NavLink } from "react-bootstrap";
import Botones from "./Botones";
import "../css/Navbar.css";
import Input from "./InputGroup";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DropdownPhone from "./DropdownPhone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function NavbarElement() {
  const [showDropPhone, setShowDropPhone] = useState(false);

  function arrowDrop() {
    if (showDropPhone) {
      return <ArrowDropUpIcon></ArrowDropUpIcon>;
    } else {
      return <ArrowDropDownIcon></ArrowDropDownIcon>;
    }
  }

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

            <DropdownPhone
              showDropPhone={showDropPhone}
              setShowDropPhone={setShowDropPhone}
            />
            <NavLink
              onClick={() => {
                setShowDropPhone(!showDropPhone);
              }}
            >
              <div className="item-nav-link">
                Celulares
                {arrowDrop()}
              </div>
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
