import { useEffect, useState } from "react";
import Celular from "./Celular";
// import CelularDetalle from "./CelularDetalle";
import "../css/Celulares.css";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CelularDetalle from "./CelularDetalle";

const CelularesList = (props) => {
  const celulares = [
    {
      camara: {
        trasera_Mpx: 108,
        frontal_Mpx: 44,
      },
      color: ["negro", "plata", "gris", "marron", "metallic blue"],
      imagenes: [],
      _id: "617dae2553b40438b85b430a",
      images: [
        "https://celulapp.blob.core.windows.net/celulares/samsung-s21-ultra.webp",
      ],
      marca: "samsung",
      modelo: "galaxy s21 ultra",
      precio: 29999,
      almacenamiento_gb: 128,
      ram_gb: 12,
      peso_gr: 227,
      bateria_mAh: 5000,
      tamano_pantalla_in: 6.8,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.210Z",
      updatedAt: "2021-10-30T20:42:13.210Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 48,
        frontal_Mpx: 20,
      },
      color: ["negro", "azul", "bronce"],
      imagenes: [],
      _id: "617dae2553b40438b85b430b",
      images: [
        "https://celulapp.blob.core.windows.net/celulares/poco-x3-pro.webp",
      ],
      marca: "xiaomi",
      modelo: "poco x3 pro",
      precio: 5055,
      almacenamiento_gb: 128,
      ram_gb: 6,
      peso_gr: 215,
      bateria_mAh: 5160,
      tamano_pantalla_in: 6.67,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.210Z",
      updatedAt: "2021-10-30T20:42:13.210Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 48,
        frontal_Mpx: 20,
      },
      color: ["negro", "blanco", "azul"],
      imagenes: [],
      _id: "617dae2553b40438b85b430c",
      images: ["https://celulapp.blob.core.windows.net/celulares/poco-f3.webp"],
      marca: "xiaomi",
      modelo: "poco f3",
      precio: 6679,
      almacenamiento_gb: 128,
      ram_gb: 6,
      peso_gr: 196,
      bateria_mAh: 4520,
      tamano_pantalla_in: 6.67,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.210Z",
      updatedAt: "2021-10-30T20:42:13.210Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 108,
        frontal_Mpx: 16,
      },
      color: ["gris", "blanco", "bronce"],
      imagenes: [],
      _id: "617dae2553b40438b85b430d",
      images: [
        "https://celulapp.blob.core.windows.net/celulares/redmi-note-10-pro.webp",
      ],
      marca: "xiaomi",
      modelo: "redmi note 10 pro",
      precio: 5794,
      almacenamiento_gb: 64,
      ram_gb: 6,
      peso_gr: 193,
      bateria_mAh: 5020,
      tamano_pantalla_in: 6.67,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.211Z",
      updatedAt: "2021-10-30T20:42:13.211Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 50,
        frontal_Mpx: 32,
      },
      color: ["gris", "cian"],
      imagenes: [],
      _id: "617dae2553b40438b85b430e",
      images: ["https://celulapp.blob.core.windows.net/celulares/nord-2.webp"],
      marca: "one plus",
      modelo: "nord 2",
      precio: 10294,
      almacenamiento_gb: 128,
      ram_gb: 8,
      peso_gr: 189,
      bateria_mAh: 4500,
      tamano_pantalla_in: 6.43,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.211Z",
      updatedAt: "2021-10-30T20:42:13.211Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 64,
        frontal_Mpx: 16,
      },
      color: ["azul", "negro", "oro rosa"],
      imagenes: [],
      _id: "617dae2553b40438b85b430f",
      images: [
        "https://celulapp.blob.core.windows.net/celulares/mi-11-lite.jpeg",
      ],
      marca: "xiaomi",
      modelo: "mi 11 lite",
      precio: 5461,
      almacenamiento_gb: 64,
      ram_gb: 6,
      peso_gr: 157,
      bateria_mAh: 4250,
      tamano_pantalla_in: 6.55,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.211Z",
      updatedAt: "2021-10-30T20:42:13.211Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 64,
        frontal_Mpx: 24,
      },
      color: ["blanco"],
      imagenes: [],
      _id: "617dae2553b40438b85b4310",
      images: [
        "https://celulapp.blob.core.windows.net/celulares/rog-phone-5.webp",
      ],
      marca: "asus",
      modelo: "rog phone 5",
      precio: 12647,
      almacenamiento_gb: 512,
      ram_gb: 18,
      peso_gr: 242,
      bateria_mAh: 6000,
      tamano_pantalla_in: 6.78,
      sistema_operativo: "android",
      createdAt: "2021-10-30T20:42:13.211Z",
      updatedAt: "2021-10-30T20:42:13.211Z",
      __v: 0,
    },
    {
      camara: {
        trasera_Mpx: 12,
        frontal_Mpx: 12,
      },
      color: ["gris", "azul", "oro", "plata"],
      imagenes: [],
      _id: "617dae2553b40438b85b4311",
      images: [
        "https://celulapp.blob.core.windows.net/celulares/iphone-12-pro.webp",
      ],
      marca: "apple",
      modelo: "iphone 12 pro",
      precio: 27499,
      almacenamiento_gb: 128,
      ram_gb: 6,
      peso_gr: 187,
      bateria_mAh: 2815,
      tamano_pantalla_in: 6.1,
      sistema_operativo: "ios",
      createdAt: "2021-10-30T20:42:13.211Z",
      updatedAt: "2021-10-30T20:42:13.211Z",
      __v: 0,
    },
  ];
  // const [celulares, setCelulares] = useState([]);

  // useEffect(() => {
  //   // const URL = "https://celulapp.herokuapp.com/v1/celulares";
  //   fetch("https://celulapp.herokuapp.com/v1/celulares")
  //     .then((res) => res.json())
  //     .then((data) => setCelulares(data));
  //   // const getData = async () => {
  //   //   const res = await fetch(URL);
  //   //   const data = await res.json();
  //   //   setCelulares(data);
  //   // };
  //   // getData();
  // }, []);

  return (
    <Container className="List d-f">
      {celulares.map((item) => (
        // <Celular
        //   key={item._id}
        //   {...item}
        //   //   marca={item.marca}
        //   //   modelo={item.modelo}
        //   //   sistema_operativo={item.sistema_operativo}
        //   //   almacenamiento_gb={item.almacenamiento_gb}
        //   //   color={item.color}
        //   //   img={item.img}
        // />
        <CelularDetalle key={item._id} {...item} />
      ))}
    </Container>
  );
};
export default CelularesList;
