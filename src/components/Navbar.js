import React from 'react';
import {Navbar,Nav,Container,NavDropdown,Image} from 'react-bootstrap';
import Botones from './Botones';
import '../css/Navbar.css';
import Input from './InputGroup'


function NavbarElement() {
  return (
<Navbar bg="light" expand="lg">
  <Container>

    <Navbar.Brand href="#home"><Image src="./smartphone.png" width="90px" height="90px" class="img" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <NavDropdown title="Celulares" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Categorias</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Los más vendidos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Marcas</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">Agregar Dispostivo</Nav.Link>

        {/*<Input/>*/}

          <Input/>
          {/*<Botones/>*/}
          <Botones/>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


)
};



export default NavbarElement;
