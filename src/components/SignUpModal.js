import React from 'react';
import { Modal } from 'react-bootstrap';
import SignUpForm from './SignUpForm';

function SignUpModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <SignUpForm />
      </Modal.Body>
    </Modal>
  );
}

export default SignUpModal;
