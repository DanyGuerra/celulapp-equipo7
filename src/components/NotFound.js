import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = () => {
  return (
    <>
      <h1>Página no encontrada</h1>
      <h1>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontSize: "30px",
          }}
        >
          <ArrowBackIcon fontSize="Medium"></ArrowBackIcon>
          Ir a inicio
        </Link>
      </h1>
    </>
  );
};

export default NotFound;
