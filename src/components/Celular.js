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
function Celular({ marca, modelo, images, precio }) {
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
            <span className="p-3 text-center">$ {precio}</span>
            <Button variant="primary" className="text-center m-2">
              Detalles
            </Button>
          </Col>
        </Row>
      </Toast>
    </Container>
  );
}
export default Celular;
