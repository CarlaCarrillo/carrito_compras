import React from 'react';
import { postData } from '../../../components/utils/api'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class Cart extends React.Component {

    constructor(props) {
        super(props);
        
    }

    create(data) {
        postData('carrito', data).then("this.props.hide").catch(this.showError);
    }

render () {
    return (
        <Row>
            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={this.props.plantas.imagen} alt="242x200" />
                <Card.Body>
                    <Card.Title><h5>{this.props.plantas.name}</h5></Card.Title>
                    <Card.Text>
                <h5>{this.props.plantas.description}</h5>
                <h2>$ {this.props.plantas.costo}</h2>
                    </Card.Text>
                    <Button variant="outline-success" onClick={()=>this.create({...this.props})}>Agregar a carrito </Button>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        )
    }
}
export default Cart;