import "../css/DropdownPhone.css";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";

const DropdownPhone = (props) => {
  // const history = useHistory();

  const closeDropPhone = () => {
    props.setShowDropPhone(false);
  };

  if (props.showDropPhone) {
    return (
      <div
        className="dropdown-phone"
        onMouseLeave={() => {
          props.setShowDropPhone(false);
        }}
      >
        <div className="todos">
          <Link to="/todos-los-celulares">
            <div className="title" onClick={closeDropPhone}>
              Todos
            </div>
          </Link>
          <div className="mas-filtros">Mas Filtros</div>
        </div>
        <div className="col">
          <div className="title">Marcas</div>
          <div className="item" onClick={closeDropPhone}>
            <Link to="/marca/xiaomi" className="item">
              Xiaomi
            </Link>
          </div>
          <div className="item" onClick={closeDropPhone}>
            <Link to="/marca/apple" className="item">
              Apple
            </Link>
          </div>
          <div className="item" onClick={closeDropPhone}>
            <Link to="/marca/samsung" className="item">
              Samsung
            </Link>
          </div>
          <div className="mas-filtros"> Todas las marcas</div>
        </div>
        <div className="col">
          <div className="title">Sistema Operativo</div>
          <div className="item" onClick={closeDropPhone}>
            <Link to="/so/android" className="item">
              Android
            </Link>
          </div>
          <div className="item" onClick={closeDropPhone}>
            <Link to="/so/ios" className="item">
              IOS
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="title">Memoria Ram</div>
          <div className="item"> 2 gb</div>
          <div className="item"> 4 gb</div>
          <div className="item"> 6 gb</div>
          <div className="item"> 12 gb</div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default DropdownPhone;
