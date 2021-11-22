import { useEffect, useState } from "react";
import Celular from "./Celular";
import "../css/Celulares.css";
import Container from "react-bootstrap/Container";

const CelularesList = (props) => {
  const [celulares, setCelulares] = useState([]);
  const marca = props.match.params.marca;

  useEffect(() => {
    const URL = `https://celulapp.herokuapp.com/v1/celulares/marca/${marca}`;
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setCelulares(data));
  }, [marca]);

  return (
    <Container className="List d-f">
      {celulares.map((item) => (
        <Celular key={item._id} {...item} />
      ))}
    </Container>
  );
};
export default CelularesList;
