import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function RegistrarCelular() {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="container">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="InputMarca">
                        <FloatingLabel controlId="InputMarca" label="Marca">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Marca"
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
                            />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>                    
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="3" controlId="InputAlmacenamiento">
                        <FloatingLabel controlId="InputAlmacenamiento" label="Almacenamiento">
                            <Form.Control
                                required
                                type="number"
                                placeholder="Almacenamiento"
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
                                placeholder="Modelo"
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
                            />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="InputColor">
                        <FloatingLabel controlId="InputColor" label="Color">
                            <Form.Control
                                required
                                type="color"
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
                            />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit">Guardar</Button>
            </Form>
        </div>
    );
}

export default RegistrarCelular;