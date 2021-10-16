

import React from 'react';
import NavbarElement from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'


class App extends React.Component {
  state = { }


  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <NavbarElement />
          
        </div>
      </div>
    );
  }
}

export default App;