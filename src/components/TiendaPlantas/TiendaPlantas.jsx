import React from 'react';
import { getData } from '../utils/api';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Action
import Cart from './Cart/Cart';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaPlantas.css';


class TiendaPlantas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            plantas: [],
            lastClicked: null,
        }
        this.plantaAgregada = this.plantaAgregada.bind(this);
    }

    componentWillMount() {
        getData('plantas').then((plantas) => this.setState({ plantas }));
        console.log(this.state.plantas);
    }

    plantaAgregada(planta) {
        toast.info(`${planta.name} añadida al carrito`, { autoClose: 3000 })
    }
    render() {
        console.log(this.state.plantas);
        return (
            <div>
                <Carrousel />
                <Container>
                    <Row>
                        {this.state.plantas.map(
                            planta => {
                                return (<Cart plantas={planta} guardada={this.plantaAgregada} />)
                            }
                        )}
                    </Row>
                </Container>
                <Instructions />
                <ToastContainer />
            </div>

        )

    }

}

export default TiendaPlantas;
