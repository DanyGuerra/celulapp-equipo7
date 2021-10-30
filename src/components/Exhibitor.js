import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/Exhibitor.css";

const slides = [
  {
    title: "Title 1",
    description: "Conoce el modelo 1",
    src: "https://celulapp.blob.core.windows.net/exhibitor/redmi-exhibitor.jpg",
  },
  {
    title: "Title 2",
    description: "Conoce el modelo 2",
    src: "https://celulapp.blob.core.windows.net/exhibitor/Mi-11-lite-Null-banner.jpg",
  },
  {
    title: "Title 3",
    description: "Conoce el modelo 3",
    src: "https://celulapp.blob.core.windows.net/exhibitor/redmi11pro.webp",
  },
];

function Exhibitor() {
  return (
    <div className="exhibitor">
      <Carousel>
        {slides.map((slide, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slide.src}
              alt={`Slide ${index}`}
            />
            {/* <Carousel.Caption>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Exhibitor;
