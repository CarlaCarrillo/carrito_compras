import React, { Component } from 'react';

// Components
//import UpdateItem from '../UpdateItem/UpdateItem';
import { deleteData } from '../../utils/api'
import Button from 'react-bootstrap/Button';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import '../List.css';

class PagoTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrito: [],
      clicked: 0,
      total: 0,
      sum: 0,
      editing: false,
    }
  }

  Products(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }
  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  render() {
    return (
        <Container id='cajitaPago'>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Número de productos</th>
                <th>Subtotal</th>
                <th>Total a pagar</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                <td></td>
                <td>${this.sumTotal} .00</td>
                <td>${this.sumTotal} .00</td>
                </tr>
            </tbody>
        </Table>
        </Container>
    )
  }
}
export default PagoTotal;

