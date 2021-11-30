import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "@mui/material/Button";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

export class ModificarCelular extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validated: false,
      showAlert: false,
      showError: false,
      showConexion:false,
      marca: '',
      camaraTrasera: '',
      camaraFrontal: '',
      color: '',
      modelo: '',
      almacenamiento: 0,
      ram: 0,
      peso: 0,
      bateria: 0,
      tamano: 0,
      sistemaOperativo: 0,
      imagenFrontal: '',
      imagenTrasera: '',
      imagenOpcional: '',
      precio: 0
    };

    this.id = props.match.params.id;
    this.token = localStorage.getItem('token');

    this.GetCellula = this.GetCellula.bind(this);
    this.handleBack = this.handleBack.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { //<----------------------------
    this.GetCellula(this.id);
  }

  handleBack() {
    this.props.history.push(`/details/${this.id}`);
  }

  async GetCellula(id){

    try {
      const response = await fetch(
        `https://celulapp.herokuapp.com/v1/celulares/${id}`
      );
      const data = await response.json();

      this.setValueInput("marca", data.marca.toUpperCase());
      this.setValueInput("modelo", data.modelo.toUpperCase());
      this.setValueInput("sistemaOperativo", data.sistema_operativo.toUpperCase());
      this.setValueInput("almacenamiento", data.almacenamiento_gb);
      this.setValueInput("ram", data.ram_gb);
      this.setValueInput("tamano", data.tamano_pantalla_in);
      this.setValueInput("color", data.color);
      this.setValueInput("peso", data.peso_gr);
      this.setValueInput("bateria", data.bateria_mAh);
      this.setValueInput("camaraFrontal", data.camara.frontal_Mpx);
      this.setValueInput("camaraTrasera", data.camara.trasera_Mpx);
      this.setValueInput("precio", data.precio);
      this.setValueInput("imagenFrontal", data.images[0]);
      this.setValueInput("imagenTrasera", data.images[1]);
      this.setValueInput("imagenOpcional", data.images[2]);

    } catch (e) {
      console.error(e);
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  setValueInput(tagName,value)
  {
    this.setState({
      [tagName]: value,
    });
  }

  async handleSubmit(event) {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {

      const data = {
        camara: {
          trasera_Mpx: this.state.camaraTrasera,
          frontal_Mpx: this.state.camaraFrontal,
        },
        color: this.state.color,
        marca: this.state.marca,
        modelo: this.state.modelo,
        almacenamiento_gb: this.state.almacenamiento,
        ram_gb: this.state.ram,
        peso_gr: this.state.peso,
        bateria_mAh: this.state.bateria,
        tamano_pantalla_in: this.state.tamano,
        sistema_operativo: this.state.sistemaOperativo,
        images: [this.state.imagenFrontal, this.state.imagenTrasera, this.state.imagenOpcional],
        precio: this.state.precio,
      };

      const URL = `https://celulapp.herokuapp.com/v1/celulares/modificarCelular/${this.id}`;

      const response = await fetch(URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        this.setState({
          showAlert: true,
          showError: false,
        });
      }else if (response.status === 401) {
        this.setState({
          showConexion: true,
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
      <Container>
        <Card style={{ marginTop: '100px' }}>
        <Card.Header>Actualizar datos de celular</Card.Header>
          <Card.Body>
            {this.state.showAlert && (
              <Alert variant={'success'}>Celular actualizado con exito.</Alert>
            )}
            {this.state.showError && (
              <Alert variant={'danger'}>No se pudo actualizar la información del celular.</Alert>
            )}
            {this.state.showConexion && (
              <Alert variant={'warning'}>No tienes permiso para modificar, necesitar hacer login.</Alert>
            )}
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="InputMarca">
                  <FloatingLabel controlId="InputMarca" label="Marca">
                    <Form.Control
                      required
                      type="text"
                      name="marca"
                      placeholder="Marca"
                      value={this.state.marca}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="InputlModelo">
                  <FloatingLabel controlId="InputlModelo" label="Modelo">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Modelo"
                      name="modelo"
                      value={this.state.modelo}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="InputlSO">
                  <FloatingLabel controlId="InputlSO" label="Sistema Operativo">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Sistema Operativo"
                      name="sistemaOperativo"
                      value={this.state.sistemaOperativo}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="InputAlmacenamiento">
                  <FloatingLabel
                    controlId="InputAlmacenamiento"
                    label="Almacenamiento"
                  >
                    <Form.Control
                      required
                      type="number"
                      placeholder="Almacenamiento"
                      name="almacenamiento"
                      value={this.state.almacenamiento}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="InputlRam">
                  <FloatingLabel controlId="InputlRam" label="RAM">
                    <Form.Control
                      required
                      type="numer"
                      placeholder="Memoria RAM"
                      name="ram"
                      value={this.state.ram}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="InputlTamaño">
                  <FloatingLabel controlId="InputlTamaño" label="Tamaño">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Tamaño de pantalla"
                      name="tamano"
                      value={this.state.tamano}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="InputColor">
                  <FloatingLabel controlId="InputColor" label="Colores">
                    <Form.Control
                      required
                      type="text"
                      name="color"
                      placeholder="rojo,azul,blanco"
                      value={this.state.color}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="InputPeso">
                  <FloatingLabel controlId="InputPeso" label="Peso">
                    <Form.Control
                      required
                      type="number"
                      placeholder="Peso"
                      name="peso"
                      value={this.state.peso}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="InputBateriAmAh">
                  <FloatingLabel controlId="InputBateriAmAh" label="Bateria mah">
                    <Form.Control
                      required
                      type="numer"
                      placeholder="Bateria mah"
                      name="bateria"
                      value={this.state.bateria}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="InputCamataF">
                  <FloatingLabel controlId="InputCamataF" label="Camara frontal MPX">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Camara frontal MPX"
                      name="camaraTrasera"
                      value={this.state.camaraTrasera}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="InputCamataT">
                  <FloatingLabel controlId="InputCamataT" label="Camara trasera MPX">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Camara trasera MPX"
                      name="camaraFrontal"
                      value={this.state.camaraFrontal}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="3" controlId="InputPrecio">
                  <FloatingLabel controlId="InputPrecio" label="Precio">
                    <Form.Control
                      required
                      type="numer"
                      placeholder="Precio"
                      name="precio"
                      value={this.state.precio}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="InputImagen1">
                  <FloatingLabel controlId="InputImagen1" label="Ruta imagen frontal">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Http://imagen1.jpg"
                      name="imagenFrontal"
                      value={this.state.imagenFrontal}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="InputImagen2">
                  <FloatingLabel controlId="InputImagen2" label="Ruta imagen trasera">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Http://imagen2.jpg"
                      name="imagenTrasera"
                      value={this.state.imagenTrasera}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                  <Form.Control.Feedback type="invalid">
                    Campo obligatorio.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="InputImagen3">
                  <FloatingLabel
                    controlId="InputImagen3"
                    label="Ruta imagen opcional"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Http://imagen3.jpg"
                      name="imagenOpcional"
                      value={this.state.imagenOpcional}
                      onChange={this.handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Row>
              <Button type="submit" variant="contained">
                Guardar
              </Button>
              <Button type="submit" 
                variant="outlined"
                onClick={this.handleBack}>
                Cancelar
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Row className="justify-content-md-center">
          <Col xs lg="11">

          </Col>
        </Row>
      </Container>
    );
  }
}

export default ModificarCelular;
