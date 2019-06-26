import React, { Component } from 'react';
import { getData } from '../utils/api';
import Itemcart from './Item/Item';
import PagoTotal from './PagoTotal/PagoTotal';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: [],
        }
        this.updateList = this.updateList.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.updateList();
    }

    updateList() {
        getData('carrito').then((carrito) => this.setState({ carrito }));
    }

    closeModal() {
        this.setState({ creating: false });
        this.updateList();
    }

    renderCarrito() {
        return this.state.carrito.map((itemcart, i) => (
            <Itemcart
                key={`itemcart-${i}`}
                updateList={this.updateList}
                {...itemcart}
            />
        ))
    }
    
    render() {
        return (
            <>
                <div className="List" >
                    <h1 style={{ color: 'black', textAlign: 'center' }}>
                        Carrito de compras: ¡Bienvenido!
                    </h1><p />
                    <PagoTotal carrito={this.state.carrito}/>
                    <Container>
                        <Row>
                            {this.renderCarrito()}
                        </Row>
                    </Container>
                </div>

            </>
        );
    }
}


export default List;

