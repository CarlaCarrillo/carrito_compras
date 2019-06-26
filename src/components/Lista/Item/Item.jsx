import React, { Component } from 'react';

// Components
//import UpdateItem from '../UpdateItem/UpdateItem';
import { deleteData } from '../../utils/api'
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


import '../List.css';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrito: [],
      clicked: 0,
      total: 0,
      sum: 0,
      editing: false,
    }

    this.increaseClick = this.increaseClick.bind(this);
    this.decreaseClick = this.decreaseClick.bind(this);
    this.editItem = this.editItem.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  increaseClick() {
    this.setState({clicked: this.state.clicked + 1});
  }

  decreaseClick() {
    this.setState({clicked: this.state.clicked - 1});
  }

  

  editItem() {
    this.setState({editing: true});
  }

  closeModal() {
    this.setState({editing: false});
    this.props.updateList();
  }

  removeItem(){
      deleteData('carrito',this.props.id).then(this.props.updateList).catch(console.log);
  }

  render() {
    const {id, name, description, costo,imagen,quantity} = this.props;
    return (
       
      <Row id='cartas'>
        <Col sm={4} md={4}>
        <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>     
        <Card id="carta" style={{ width: '14rem' }}>
        <Card.Img variant="top" src={imagen} alt="242x200" />
        <Card.Body>
        <Card.Title><h4>{name}</h4></Card.Title>
        <Card.Text>
          <h6>{description}</h6>
          <h2>$ {costo} .00</h2> 
          <h2> {quantity} </h2>   
        </Card.Text>
  
        <p className='botonCantidad' >
        <Button  id='botonCantidadmas' variant="dark" onClick={this.decreaseClick}>-</Button> 
        {this.state.clicked}
        <Button  id='botonCantidadmenos' variant="dark" onClick={this.increaseClick}>+</Button>
        </p><p/>
        
        <Button id='botonRemove' variant="dark" onClick={this.removeItem}>Quitar</Button>
        </Card.Body>
        </Card>
        </Container>
        </Col> 
        </Row>
        
        
    );
  }
}
export default Item;