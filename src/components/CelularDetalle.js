import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// class Celular extends React.Component {
//   render() {
function CelularDetalle({
  marca,
  modelo,
  sistema_operativo,
  almacenamiento_gb,
  ram_gb,
  camara,
  tamano_pantalla_in,
  peso_gr,
  color,
  images,
  precio,
}) {
  return (
    <Container>
      <Toast style={{ width: "35rem" }} className="m-3 p-3">
        <Row className="justify-content-md-center">
          <Col>
            <Card.Img src={images} alt={modelo} />
          </Col>
          <Col>
            <Card.Title as="h2" className="text-center">
              {marca}
            </Card.Title>
            <Card.Subtitle as="h5" className="text-center mb-5 text-muted">
              {modelo}
            </Card.Subtitle>
            <p>
              <strong>Sistemna Operativo: </strong>
              {sistema_operativo}
            </p>
            <p>
              <strong>Almacenamiento: </strong> {almacenamiento_gb}gb
            </p>
            <p>
              <strong>Memoria Ram: </strong> {ram_gb}gb
            </p>
            <p>
              <strong>Pantalla: </strong> {tamano_pantalla_in}"
            </p>
            <p>
              <strong>Camara: </strong> {}
            </p>
            <p>
              <strong>Peso: </strong> {peso_gr}g
            </p>
            <p>
              <strong>Color: </strong>
              {color.map}
            </p>
            <span className="p-3 text-center">{precio}</span>
            <Button variant="primary" className="text-center m-2">
              Agregar al carrito
            </Button>
          </Col>
        </Row>
      </Toast>
    </Container>
  );
}
export default CelularDetalle;
