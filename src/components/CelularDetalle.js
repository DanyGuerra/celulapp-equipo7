import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CelularDetalle(props) {
  const [celular, setCelular] = React.useState({});
  const id = props.match.params.id;

  React.useEffect(
    function () {
      const getData = async () => {
        try {
          const response = await fetch(
            `https://celulapp.herokuapp.com/v1/celulares/${id}`
          );
          const data = await response.json();
          setCelular(data);
          console.log(data);
        } catch (e) {
          console.error(e);
        }
      };

      getData();
    },
    [id]
  );

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
              <strong>Sistema Operativo: </strong>
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
            {/* <p>
              <strong> {"Camara frontal:"} </strong>
              {Object.values(celular.camara)}
              <br />
              <strong>Camara trasera: </strong>
              {Object.values(celular.camara)}
            </p> */}
            <p>
              <strong>Peso: </strong> {celular.peso_gr}g
            </p>
            <p>
              <strong>Color: </strong>
              {celular.color + " "}
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
