import React from 'react';
import { getData } from '../utils/api';
import Cart from '../TiendaPlantas/Cart/Cart'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class ShopCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carrito: [],
            clicked: 0,
            lastClicked: null,
        }

    }

    componentDidMount() {
        getData('carrito').then((carrito) => {
            this.setState({ carrito });
            console.log(this.state.carrito);
        });
    }


    render() {
        return (
            <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                <h1 style={{ color: 'black', textAlign: 'center' }}>
                    Carrito de compras
                    </h1>
                <Row>
                    {this.state.carrito.map(plantaCarrito => <Cart plantas={plantaCarrito} isViewingCart={true} />)}
                </Row>
            </Container>
        )

    }
}

export default ShopCar;