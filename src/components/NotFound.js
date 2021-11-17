import { Link } from "react-router-dom";
import "../css/NotFound.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Página no encontrada</h1>
      <div className="not-found-go-home">
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
      </div>
    </div>
  );
};

export default NotFound;
