import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CelularDetalle(props) {
  const celular = {
    camara: {
      trasera_Mpx: 108,
      frontal_Mpx: 44,
    },
    color: ["negro", "plata", "gris", "marron", "metallic blue"],
    imagenes: [],
    _id: "617dae2553b40438b85b430a",
    images: [
      "https://celulapp.blob.core.windows.net/celulares/samsung-s21-ultra.webp",
    ],
    marca: "samsung",
    modelo: "galaxy s21 ultra",
    precio: 29999,
    almacenamiento_gb: 128,
    ram_gb: 12,
    peso_gr: 227,
    bateria_mAh: 5000,
    tamano_pantalla_in: 6.8,
    sistema_operativo: "android",
    createdAt: "2021-10-30T20:42:13.210Z",
    updatedAt: "2021-10-30T20:42:13.210Z",
    __v: 0,
  };

  const id = props.match.params.id;
  console.log(id);
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
                maxHeight: "25rem",
                width: "auto",
              }}
              src={celular.images}
              alt={celular.modelo}
              className="imgDetalle"
            />
          </Col>
          <Col>
            <Card.Title as="h2" className="text-center">
              {celular.marca}
            </Card.Title>
            <Card.Subtitle as="h5" className="text-center mb-5 text-muted">
              {celular.modelo}
            </Card.Subtitle>
            <p>
              <strong>Sistemna Operativo: </strong>
              {celular.sistema_operativo}
            </p>
            <p>
              <strong>Almacenamiento: </strong> {celular.almacenamiento_gb}gb
            </p>
            <p>
              <strong>Memoria Ram: </strong> {celular.ram_gb}gb
            </p>
            <p>
              <strong>Pantalla: </strong> {celular.tamano_pantalla_in}"
            </p>
            <p>
              <strong>Camara frontal: </strong>
              {celular.camara.trasera_Mpx} megapixeles <br />
              <strong>Camara trasera: </strong>
              {celular.camara.trasera_Mpx} megapixeles
            </p>
            <p>
              <strong>Peso: </strong> {celular.peso_gr}g
            </p>
            <p>
              <strong>Color: </strong>
              {celular.color.map((color) => `${color} `)}
            </p>
            <span className="p-3 text-center precio">$ {celular.precio}</span>
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
