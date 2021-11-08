import React from 'react';

import { Button } from 'react-bootstrap';
import '../css/botones.css';
import SignUpModal from './SignUpModal';

function Botones() {
  const [modalSignUpShow, setModalSignUpShow] = React.useState(false);

  return (
    <div className='botones'>
      <Button variant='outline-primary'>Login</Button>
      <Button
        variant='outline-secondary'
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
