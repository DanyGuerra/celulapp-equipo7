import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router";

function CelularDetalle(props) {
  const [celular, setCelular] = React.useState({});
  const id = props.match.params.id;
  const [images, setimages] = React.useState({});
  const [token, setToken] = React.useState(localStorage.getItem('token'));

  React.useEffect(
    function () {
      const getData = async () => {
        try {
          const response = await fetch(
            `https://celulapp.herokuapp.com/v1/celulares/${id}`
          );
          const data = await response.json();
          setCelular(data);
          setimages(data.images[0]);
        } catch (e) {
          console.error(e);
        }
      };

      getData();
    },
    [id]
  );

  const history = useHistory();
  const handleDetalles = (e) => {
    history.push(`/modificarcelular/${id}`);
  };

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
              src={images}
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
              <strong>Almacenamiento: </strong> {celular.almacenamiento_gb} gb
            </p>
            <p>
              <strong>Memoria Ram: </strong> {celular.ram_gb} gb
            </p>
            <p>
              <strong>Pantalla: </strong> {celular.tamano_pantalla_in} "
            </p>
            {/* <p>
              <strong>Camara trasera: </strong>
              {celular.camara.trasera_Mpx}
            </p> */}

            {/*
            <p>
              <strong> Camara frontal: </strong>
              {Object.values(celular.camara)[1]}
            </p>
            <p>
              <strong>Peso: </strong> {celular.peso_gr}g
            </p> */}
            <p>
              <strong>Peso: </strong> {celular.peso_gr} gr
            </p>

            <p>
              <strong>Bateria: </strong> {celular.bateria_mAh} mAh
            </p>

            <p>
              <strong>Color: </strong>
              {celular.color + " "}
            </p>
            <p className="p-3 text-center precio"><strong>$ {celular.precio}</strong></p>
            <Button variant="primary" className="text-center m-2">
              Agregar al carrito
            </Button>
            {token && (
                          <Button
                          variant="success"
                          className="text-center m-2"
                          onClick={(e) => handleDetalles(e)}
                          >
                           Editar
                        </Button>
            )}
          </Col>
        </Row>
      </Toast>
    </Container>
  );
}
export default CelularDetalle;
