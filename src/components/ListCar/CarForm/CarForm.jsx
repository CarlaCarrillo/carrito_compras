import React, {Component} from 'react';

//Action


//Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



class CarForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:props.data.name || '',
            description:props.data.description || '',
            costo: props.data.costo|| 0,
            imagen:props.data.imagen || '',
        };

    this.updateName = this.updateName.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.updateCosto = this.updateCosto.bind(this);
    this.updateImagen = this.updateImagen.bind(this);
    
    }
    updateName({target}) {
        this.setState({name: target.value});
    }
    updateCosto({target}) {
        this.setState({value: target.value});
    }

    updateDescription({target}) {
        this.setState({description: target.value});
    }

    updateDescription({target}) {
        this.setState({imagen: target.value});
    }

    render() {
        return (
            
            <Row>
            <Col sm>
            <Card id="carta" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={this.props.imagen} alt="242x200" />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                <h5>{this.props.description}</h5>
                <h2>$ {this.props.costo}</h2>
                    </Card.Text>
                   
                </Card.Body>
            </Card>
            </Col>
        </Row>
                       
        );
    }

}
export default CarForm;