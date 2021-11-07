import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import RegistrarCelular from "./RegistrarCelular";
class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/agregar-celular" component={RegistrarCelular} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
