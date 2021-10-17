import React from "react";
import NavbarElement from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import CelularesList from "./CelularesList";
import Exhibitor from "./Exhibitor";
import "../css/App.css";
import RegistrarCelular from "./RegistrarCelular";

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="card frame">
            <NavbarElement />
          </div>
        </div>
        <Exhibitor />
        <CelularesList />
        <RegistrarCelular />
      </>
    );
  }
}

export default App;
