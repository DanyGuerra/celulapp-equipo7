import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from '@mui/material/Button';

function RegistrarCelular() {

    const [validated, setValidated] = useState(false);
    const [marca, setMarca] = useState('');
    const [camaraTrasera, setCamaraTrasera] = useState('');
    const [camaraFrontal, setCamaraFrontal] = useState('');
    const [color, setColor] = useState('');
    const [modelo, setModelo] = useState('');
    const [almacenamiento, setAlmacenamiento] = useState(0);
    const [ram, setRam] = useState(0);
    const [peso, setPeso] = useState(0);
    const [bateria, setBateria] = useState(0);
    const [tamano, setTamano] = useState(0);
    const [sistemaOperativo, setSistemaOperativo] = useState('');
    const [imagenFrontal, setImageFrontal] = useState('');
    const [imagenTrasera, setImageTrasera] = useState('');
    const [imagenOpcional, setImageOpcional] = useState('');
    const [precio, setPrecio] = useState(0);


    const URL = "https://celulapp.herokuapp.com/v1/celulares/crearCelular/";

    const goToBackend = (config, data) => {
        return fetch(config.url, {
            method: config.method,
            'mode': 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "X-Requested-With"
            },
            body: JSON.stringify(data)
        })
    }

    const handleChangeMarca = (event) => {
        setMarca(event.target.value);
    }

    const handleChangeCamaraTrasera = (event) => {
        setCamaraTrasera(event.target.value);
    }

    const handleChangeCamaraFrontal = (event) => {
        setCamaraFrontal(event.target.value);
    }

    const handleChangeColor = (event) => {
        setColor(event.target.value);
    }

    const handleChangeModelo = (event) => {
        setModelo(event.target.value);
    }

    const handleChangeAlmacenamiento = (event) => {
        setAlmacenamiento(event.target.value);
    }

    const handleChangeRam = (event) => {
        setRam(event.target.value);
    }

    const handleChangePeso = (event) => {
        setPeso(event.target.value);
    }

    const handleChangeBateria = (event) => {
        setBateria(event.target.value);
    }

    const handleChangeTamano = (event) => {
        setTamano(event.target.value);
    }

    const handleChangeSistemaOperativo = (event) => {
        setSistemaOperativo(event.target.value);
    }

    const handleChangePrecio = (event) => {
        setPrecio(event.target.value);
    }

    const handleChangeImagenFrontal = (event) => {
        setImageFrontal(event.target.value);
    }

    const handleChangeImagenTrasera = (event) => {
        setImageTrasera(event.target.value);
    }

    const handleChangeImagenOpcional = (event) => {
        setImageOpcional(event.target.value);
    }

    const handleSubmit = async (event) => {

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

        } else {
            const config = {
                url: URL,
                method: "POST"
            };

            const data = {
                "camara": {
                    "trasera_Mpx": camaraTrasera,
                    "frontal_Mpx": camaraFrontal
                },
                "color": [
                    "rojo"
                ],
                "marca": marca,
                "modelo": modelo,
                "almacenamiento_gb": almacenamiento,
                "ram_gb": ram,
                "peso_gr": peso,
                "bateria_mAh": bateria,
                "tamano_pantalla_in": tamano,
                "sistema_operativo": sistemaOperativo,
                "imagenes": [
                    imagenFrontal,
                    imagenTrasera,
                    imagenOpcional
                ],
                "precio": precio
            };

            console.log(JSON.stringify(data));

            try {
                const response = await goToBackend(config, data);
                if (!response.ok) throw new Error("Response not ok");

                const resultApi = await response.json();

                console.log(resultApi);

            } catch (error) {
                console.error(error);
            }

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
                                onChange={handleChangeMarca.bind(this)}
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
                                onChange={handleChangeModelo.bind(this)}
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
                                onChange={handleChangeSistemaOperativo.bind(this)}
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
                                onChange={handleChangeAlmacenamiento.bind(this)}
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
                                onChange={handleChangeRam.bind(this)}
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
                                onChange={handleChangeTamano.bind(this)}
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
                                onChange={handleChangeColor.bind(this)}
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
                                onChange={handleChangePeso.bind(this)}
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
                                onChange={handleChangeBateria.bind(this)}
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
                                onChange={handleChangeCamaraFrontal.bind(this)}
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
                                onChange={handleChangeCamaraTrasera.bind(this)}
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
                                onChange={handleChangePrecio.bind(this)}
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
                                onChange={handleChangeImagenFrontal.bind(this)}
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
                                onChange={handleChangeImagenTrasera.bind(this)}
                            />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                            Campo obligatorio.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="InputImagen3">
                        <FloatingLabel controlId="InputImagen3" label="Ruta imagen opcional">
                            <Form.Control
                                type="text"
                                placeholder="Http://imagen3.jpg"
                                onChange={handleChangeImagenOpcional.bind(this)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                </Row>
                <Button type="submit" variant="contained">Guardar</Button>
            </Form>
        </div>
    );
}

export default RegistrarCelular;