import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';



class Cart extends React.Component {

    constructor(props) {
        super(props);
        
    }

    

render () {
    return (
        <Row>
            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={this.props.plantas.imagen} alt="242x200" />
                <Card.Body>
                    <Card.Title>Planta 8</Card.Title>
                    <Card.Text>
                <h5>{this.props.plantas.description}</h5>
                <h2>$ {this.props.plantas.costo}</h2>
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            </Col>
        </Row>
        )
    }
}
export default Cart;