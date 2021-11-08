import React, { Component } from 'react';
import { Alert, Col, Form, Row, Button } from 'react-bootstrap';

const URL = 'https://celulapp.herokuapp.com/v1/usuarios/entrar';

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      showAlert: false,
      showError: false,
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      const data = {
        email: this.state.email,
        password: this.state.password,
      };

      console.log(JSON.stringify(data));

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        this.setState({
          showAlert: true,
          showError: false,
        });
      } else {
        this.setState({
          showError: true,
        });
      }
    }

    this.setState({
      validated: true,
    });
  }

  render() {
    return (
      <Form
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
      >
        <Row className='mb-3'>
          <Form.Group as={Col} md='6'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='johnd@mail.com'
              name='email'
              onChange={this.handleInputChange}
            />
            <Form.Control.Feedback type='invalid'>
              Porfavor ingresa tu email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md='6'>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type='password'
              name='password'
              onChange={this.handleInputChange}
            />
            <Form.Control.Feedback type='invalid'>
              Porfavor ingresa tu contraseña.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        {this.state.showAlert && (
          <Alert variant={'success'}>Has iniciado sesión.</Alert>
        )}
        {this.state.showError && (
          <Alert variant={'danger'}>Error al iniciar sesión.</Alert>
        )}
        <Button type='submit'>Log in</Button>
      </Form>
    );
  }
}

export default LoginForm;
