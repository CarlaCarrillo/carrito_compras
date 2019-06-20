import React, {Component} from 'react';
import {getData} from '../utils/api';
import Planta from './Planta/Planta';
import Cart from '../TiendaPlantas/Cart/Cart';
import Button from 'react-bootstrap/Button';

class ListCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plantas:[],
            lastClicked: null,
        }
        this.updateListCar = this.updateListCar.bind(this);
        this.changeLastClicked = this.changeLastClicked.bind(this);
        this.Cart = this.Cart.bind(this);
        this.closeModal = this.closeModal.bind(this);
        }

   componentDidMount() {
       this.updateListCar();
   }

   updateListCar() {
       getData('plantas').then((plantas) => this.setState({plantas}));
   }
   changeLastClicked(id) {
       this.setState({lastClicked:id});
    }
    Cart() {
        this.setState({creating:true});
    }

    closeModal() {
        this.setState({creating:false});
        this.updateList();
    }
    
    renderPlants(){
        return this.state.plantas.map((planta,i) => (
          <Planta
          key={`planta-${i}`}
          lastClicked={this.state.lastClicked}
          changeLastClicked={this.changeLastClicked}
          updateList={this.updateList}
          {...planta} 
          /> 
    ));
}
    render() {
        return (
            <>
            <Cart show={this.state.creating} hide={this.closeModal}/>
            <Button variant="primary" onClick={this.cart}>Add new product</Button> 
            <table className="List">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Costo</th>
                        <th>Clicked</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPlants()}
                </tbody>
            </table>
            </>
        );
    }
}


export default ListCar;