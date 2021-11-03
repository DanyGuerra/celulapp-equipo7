import Celular from "./Celular";
import CelularDetalle from "./CelularDetalle";
import "../css/Celulares.css";
// import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function CelularesList(props) {
  const dbCelulares = [
    {
      marca: "xiaomi",
      modelo: "mi 11 lite",
      almacenamiento_gb: 64,
      color: "Amarillo",
      sistema_operativo: "android",
      precio: "$7,099",
      img: "https://resources.sears.com.mx/medios-plazavip/s2/10243/2989305/611a84933a228-bfb83f81-b7ba-4cf0-a43d-371beab0ed28-1600x1600.jpg",
    },
    {
      marca: "asus",
      modelo: "rog phone 5",
      almacenamiento_gb: 512,
      color: "Negro",
      sistema_operativo: "android",
      precio: "$26,899",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0gxGQR9JDyRbfFqLftnliUoLjjEIPYi-L7Q&usqp=CAU",
    },
    {
      marca: "apple",
      modelo: "iphone 12 pro",
      almacenamiento_gb: 128,
      color: "Azul",
      sistema_operativo: "ios",
      precio: "$22,999",
      img: "https://www.techinn.com/f/13782/137821848/apple-iphone-12-pro-max-6gb-128gb-6.7.jpg",
    },
    {
      marca: "huawei",
      modelo: "p40 pro+",
      almacenamiento_gb: 512,
      color: "negro",
      sistema_operativo: "android",
      precio: "$13,780",
      img: "https://www.naiz.eus/media/asset_publics/resources/000/694/999/article_main_landscape/08_konex38Huawei.jpg",
    },
    {
      marca: "samsung",
      modelo: "galaxy note10+",
      almacenamiento_gb: 256,
      color: "aura glow",
      sistema_operativo: "android",
      precio: "$14,999",
      img: "https://http2.mlstatic.com/D_NQ_NP_873722-MLA44677980211_012021-O.jpg",
    },
  ];

  return (
    <Container className="List d-f">
      {dbCelulares.map((item, index) => (
        <CelularDetalle
          key={index}
          {...item}
          //   marca={item.marca}
          //   modelo={item.modelo}
          //   sistema_operativo={item.sistema_operativo}
          //   almacenamiento_gb={item.almacenamiento_gb}
          //   color={item.color}
          //   img={item.img}
        />
      ))}
    </Container>
  );
}
export default CelularesList;
