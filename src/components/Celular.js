import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useHistory } from "react-router";

function Celular({ marca, modelo, images, precio, _id }) {
  const history = useHistory();
  const handleDetalles = (e) => {
    history.push(`/details/${_id}`);
  };

  function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Container>
      <Toast style={{ width: "28rem", height: "532px" }} className="m-3 p-3">
        <Row className="justify-content-md-center Row ">
          <Card.Img
            style={{
              maxHeight: "20rem",
              width: "auto",
              textAlign: "center",
            }}
            src={images[0]}
            alt={modelo}
          />
          <Card.Title as="h2" className="text-center">
            {firstUpper(marca)}
          </Card.Title>
          <Card.Subtitle as="h5" className="text-center mb-1 text-muted">
            {firstUpper(modelo)}
          </Card.Subtitle>
          <span className="precio text-center">$ {precio}</span>
          <Button
            style={{ width: "20rem" }}
            variant="primary"
            className="text-center btn-detalle m-0"
            onClick={(e) => handleDetalles(e)}
          >
            Detalles
          </Button>
        </Row>
      </Toast>
    </Container>
  );
}
export default Celular;
