import React from "react";
import Card from "react-bootstrap/Card";

// class Celular extends React.Component {
//   render() {
function Celular({
  marca,
  modelo,
  sistema_operativo,
  almacenamiento_gb,
  color,
  img,
}) {
  // <img src={img} alt={img}></img>
  // <img src={`./img/${marca}.jpg`} alt={img}></img>
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img src={img} alt={img} />
      <Card.Body>
        <h2>{marca}</h2>
        <h3>{modelo}</h3>
        <p>
          <strong>Sistemna Operativo: </strong>
          {sistema_operativo}
        </p>
        <p>
          <strong>Almacenamiento: </strong> {almacenamiento_gb}gb
        </p>
        <p>
          <strong>Color: </strong>
          {color}
        </p>
        <p>{`../img/${marca}.jpg`}</p>
      </Card.Body>
    </Card>
  );
}

export default Celular;
