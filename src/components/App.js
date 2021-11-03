import React from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
