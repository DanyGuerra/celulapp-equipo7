import React from "react";

import { Button, InputGroup, FormControl, Form } from "react-bootstrap";
import "../css/botones.css";

class Input extends React.Component {
  render() {
    return (
      <div className="Input">
        <Form className="d-flex" style={{ width: "350px" }}>
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
    );
  }
}
export default Input;

/**
  * <InputGroup className="mb-3">
                     <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                        placeholder="Buscar"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    </InputGroup>
  */
