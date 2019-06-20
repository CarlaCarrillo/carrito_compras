import React from 'react';



//Component
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Slideone from '../Gallery/Slideone.jpg';
import Planta1 from '../Gallery/Planta1.jpg';
import Planta2 from '../Gallery/Planta2.jpg';
import Planta3 from '../Gallery/Planta3.jpg';
import Planta4 from '../Gallery/Planta4.jpg';
import Planta5 from '../Gallery/Planta5.jpg';
import Planta6 from '../Gallery/Planta6.jpg';
import Planta7 from '../Gallery/Planta7.jpg';
import Planta8 from '../Gallery/Planta8.jpg';

//iconos de pie de página
import Entrega from '../Gallery/Entrega.png';
import Envio from '../Gallery/Envio.png'
import Planta from '../Gallery/Planta.png'
import Regalo from '../Gallery/Regalo.png'




const Instructions = () => ( 

    <div className="TiendaPlantas">
 
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
                 <input id="iconos" type="image" src={Entrega}  style={{ width: '8rem' }}></input>
                 <h6>Entrega puntual</h6>
                 </Col>
        </Row>
 
 
     <Container>
         <Row>
             <Col sm={8}>sm=8</Col>
             <Col sm={4}>sm=4</Col>
         </Row>
     </Container>
 
     </div>

);

export default Instructions;