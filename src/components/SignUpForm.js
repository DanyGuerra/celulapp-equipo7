import React, { Component } from 'react';
import { Col, Form, InputGroup, Row, Button, Alert } from 'react-bootstrap';

const URL = 'https://celulapp.herokuapp.com/v1/usuarios';

export class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      showAlert: false,
      showError: false,
      nombre: '',
      apellido: '',
      username: '',
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
        username: this.state.username,
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        email: this.state.email,
        password: this.state.password,
        tipo: 'Comprador',
        status: true,
      };

      console.log(JSON.stringify(data));

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
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
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='John'
              name='nombre'
              onChange={this.handleInputChange}
            />
            <Form.Control.Feedback type='invalid'>
              Porfavor ingresa tu nombre.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='6'>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Doe'
              name='apellido'
              onChange={this.handleInputChange}
            />
            <Form.Control.Feedback type='invalid'>
              Porfavor ingresa tu apellido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col} md='6'>
            <Form.Label>Nombre de usuario</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type='text'
                placeholder='johnDoe182'
                required
                name='username'
                onChange={this.handleInputChange}
              />
              <Form.Control.Feedback type='invalid'>
                Porfavor ingresa tu nombre de usuario.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
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
        </Row>
        <Row className='mb-3'>
          <Form.Group as={Col}>
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
          <Alert variant={'success'}>Has sido registrado correctamente.</Alert>
        )}
        {this.state.showError && (
          <Alert variant={'danger'}>No ha sido posible registrarte.</Alert>
        )}
        <Button type='submit'>Sign Up</Button>
      </Form>
    );
  }
}

export default SignUpForm;
