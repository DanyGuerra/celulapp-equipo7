import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Pagina no encontrada</h1>
      <h1>
        <Link
          to="/"
          style={{
            color: "#12B6BB",
            textDecoration: "none",
            fontSize: "30px",
          }}
        >
          Regresar a inicio
        </Link>
      </h1>
    </>
  );
};

export default NotFound;
