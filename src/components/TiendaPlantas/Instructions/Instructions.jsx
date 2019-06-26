import React from 'react';

//Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//iconos de pie de página
import Entrega from '../Gallery/Entrega.png';
import Envio from '../Gallery/Envio.png'
import Planta from '../Gallery/Planta.png'
import Regalo from '../Gallery/Regalo.png'

const Instructions = () => (
    
        <Row id="cajaiconos">
            <Col sm>
                <input id="iconos" type="image" src={Planta} style={{ width: '8rem' }} ></input>
                <h6>Selecciona</h6>
            </Col>
            <Col sm>
                <input id="iconos" type="image" src={Regalo} style={{ width: '8rem' }} ></input>
                <h6>Acondicionamos</h6>
            </Col>
            <Col sm>
                <input id="iconos" type="image" src={Envio} style={{ width: '8rem' }} ></input>
                <h6>Envío rápido</h6>
            </Col>
            <Col sm>
                <input id="iconos" type="image" src={Entrega} style={{ width: '8rem' }}></input>
                <h6>Entrega puntual</h6>
            </Col>
        </Row>
    
);

export default Instructions;