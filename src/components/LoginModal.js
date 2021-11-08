import React from 'react';
import { Modal } from 'react-bootstrap';
import LoginForm from './LoginForm';

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
