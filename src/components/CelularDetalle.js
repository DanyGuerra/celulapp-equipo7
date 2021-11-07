import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Container className="detalleCelular p-5">
      <Toast
        style={{ width: "90%" }}
        className="m-auto p-4 justify-content-md-center toastDetalle"
      >
        <Row className="justify-content-md-center xs-auto">
          <Col>
            <Card.Img
              style={{
                "max-height": "25rem",
                width: "auto",
              }}
              src={images}
              alt={modelo}
              className="imgDetalle"
            />
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
              <strong>Camara frontal: </strong>
              {camara.trasera_Mpx} megapixeles <br />
              <strong>Camara trasera: </strong>
              {camara.trasera_Mpx} megapixeles
            </p>
            <p>
              <strong>Peso: </strong> {peso_gr}g
            </p>
            <p>
              <strong>Color: </strong>
              {color.map((color) => `${color} `)}
            </p>
            <span className="p-3 text-center precio">$ {precio}</span>
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
