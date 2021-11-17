import React from "react";

import { Button } from "react-bootstrap";
import "../css/botones.css";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

function Botones() {
  const [modalSignUpShow, setModalSignUpShow] = React.useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  return (
    <div className="botones">
      <Button variant="primary" onClick={() => setModalLoginShow(true)}>
        Login
      </Button>
      <LoginModal
        show={modalLoginShow}
        onHide={() => setModalLoginShow(false)}
      />
      <Button
        variant="outline-secondary"
        onClick={() => setModalSignUpShow(true)}
      >
        Sign Up
      </Button>
      <SignUpModal
        show={modalSignUpShow}
        onHide={() => setModalSignUpShow(false)}
      />
    </div>
  );
}

export default Botones;
