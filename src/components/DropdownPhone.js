import "../css/DropdownPhone.css";

// import { useHistory } from "react-router";

const DropdownPhone = (props) => {
  // const history = useHistory();

  function firstUpper(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (props.showDropPhone) {
    return (
      <div className="dropdown-phone">
        <div className="todos">
          <div className="title">Todos</div>
          <div className="mas-filtros">Mas Filtros</div>
        </div>
        <div className="col">
          <div className="title">Marcas</div>
          <div className="item"> Xiaomi</div>
          <div className="item"> Apple</div>
          <div className="item"> Samsung</div>
        </div>
        <div className="col">
          <div className="title">Sistema Operativo</div>
          <div className="item"> Android</div>
          <div className="item"> IOS</div>
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
