import React from "react";
import { Carousel } from "react-bootstrap";
import "../css/Exhibitor.css";

const slides = [
  {
    title: "Title 1",
    description: "Conoce el modelo 1",
    src: "https://cdn.stocksnap.io/img-thumbs/960w/mobile-phone_2HSGEQ7JDB.jpg",
  },
  {
    title: "Title 2",
    description: "Conoce el modelo 2",
    src: "https://cdn.stocksnap.io/img-thumbs/960w/iphone-device_WR9GMT3HBF.jpg",
  },
  {
    title: "Title 3",
    description: "Conoce el modelo 3",
    src: "https://www.lifeofpix.com/wp-content/uploads/2018/03/P1030031-1600x1200.jpg",
  },
  {
    title: "Title 4",
    description: "Conoce el modelo 4",
    src: "https://images.pexels.com/photos/5083490/pexels-photo-5083490.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
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
