import React from 'react';
import { 
    postData, 
    getData,
    patchData } from '../../../components/utils/api'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'react-toastify/dist/ReactToastify.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: [],
            clicked: 0,
        }
        this.limpiarCarrito = this.limpiarCarrito.bind(this);
        this.create = this.create.bind(this);
        this.addNewItemToCart = this.addNewItemToCart.bind(this);
    };

    addNewItemToCart(data) {
        postData('carrito', data.plantas).then(() => this.props.guardada(data.plantas)).catch((error) => console.log(error));
    }

    addItemQtyToCart(data) {
        console.log(data)
        patchData('carrito', data.id, data).then(() => this.props.guardada(data)).catch((error) => console.log(error));
    }

    create(data) {
        getData(`carrito/${data.plantas.id}`).then(function (response) {
            if (!Array.isArray(response)) {
                response.quantity++;
                this.addItemQtyToCart(response)
            } else {
                data.plantas.quantity = 1;
                this.addNewItemToCart(data)
            }
        }.bind(this))
    }
    limpiarCarrito = (id) => {
        console.log(this.state);
        const newState = this.state;
        const index = newState.carrito.findIndex(a => a.id === id);

        if (index === -1) return;
        newState.carrito.splice(index, 1);

        this.setState(newState); // This will update the state and trigger a rerender of the components
    }


    render() {
        return (
            <Col sm={4} md={4}>
                <Card id="carta" style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={this.props.plantas.imagen} alt="242x200" />
                    <Card.Body>
                        <Card.Title><h4>{this.props.plantas.name}</h4></Card.Title>
                        <Card.Text>
                            <h6>{this.props.plantas.description}</h6>
                            <h2>$ {this.props.plantas.costo} .00</h2>
                        </Card.Text>
                        {this.props.isViewingCart === false && <Button className="botonAgregar" variant="outline-success" onClick={() => this.create({ ...this.props })}>Agregar a carrito </Button>}
                        {this.props.isViewingCart === true && <Button variant="outline-danger" onClick={() => this.limpiarCarrito(this.props.plantas.id)}>Borrar del carrito </Button>}
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}
export default Cart;