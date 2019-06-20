import React from 'react';
import {getData} from '../utils/api';
import Cart from '../TiendaPlantas/Cart/Cart'

class ShopCar extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            carrito:[],
            lastClicked: null,
        }
    }
    componentWillMount() {
        getData('carrito').then((carrito) => this.setState({carrito}));
        console.log(this.state.carrito);
    }
  
    render() {

        console.log(this.state.carrito);
        return(            
                <div>
                   {this.state.carrito.map(
                       carro=>{
                           return(<Cart plantas={carro}/>)
                       }
                   )} 

                </div>
        )
        
    }
}

export default ShopCar;