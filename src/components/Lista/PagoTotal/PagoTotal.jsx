import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import '../List.css';

class PagoTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      total: 0,
      sum: 0,
      editing: false,
    }
  }

  componentDidUpdate(prevProps) {
    let total = 0;
    let sum = 0;
    if (this.props.carrito !== prevProps.carrito) {
      this.props.carrito.forEach(product => total += product.quantity)
      this.props.carrito.forEach(product => sum += product.quantity * product.costo)
      this.setState({
        total,
        sum
      })
    }
    console.log(total)
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
              <td>{this.state.total}</td>
              <td>${this.state.sum}.00</td>
              <td>${this.state.sum}.00</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    )
  }
}
export default PagoTotal;

