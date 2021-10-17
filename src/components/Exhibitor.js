import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/Exhibitor.css";

const slides = [
  {
    title: "Nuevo Iphone 13",
    description: "Compra el nuevo Iphone 13",
    src: "https://www.altonivel.com.mx/wp-content/uploads/2019/09/iphone-11-4.jpg",
  },
  {
    title: "Mas vendidos",
    description: "Hechale un vistaso a los celulares mas vendidos del 2021",
    src: "https://images.clarin.com/2021/01/14/samsung-galaxy-s21-el-buque___PaFSL3726_1200x630__1.jpg",
  },
  {
    title: "Mejor calificados",
    description: "Los celulares con mejores calificaciones",
    src: "https://www.unidiversidad.com.ar/cache/celulares-gama-alta-el-pais_1000_1100.jpg",
  },
];

function Exhibitor() {
  return (
    <div>
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={`Slide ${index}`}
            />
            <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Exhibitor;
