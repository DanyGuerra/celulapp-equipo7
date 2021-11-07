import React from "react";
import "../css/Celulares.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Celular({ marca, modelo, images, precio }) {
  return (
    <Container>
      <Toast style={{ width: "28rem", height: "532px" }} className="m-3 p-3">
        <Row className="justify-content-md-center">
          <Card.Img
            style={{
              "max-height": "20rem",
              width: "auto",
              "text-align": "center",
            }}
            src={images}
            alt={modelo}
          />
          <Card.Title as="h2" className="text-center">
            {marca}
          </Card.Title>
          <Card.Subtitle as="h5" className="text-center mb-2 text-muted">
            {modelo}
          </Card.Subtitle>
          <span className="precio p-2 text-center">$ {precio}</span>
          <Button
            style={{ width: "20rem" }}
            variant="primary"
            className="text-center "
          >
            Detalles...
          </Button>
        </Row>
      </Toast>
    </Container>
  );
}
export default Celular;
