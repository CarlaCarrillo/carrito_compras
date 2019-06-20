import React from 'react';
import {getData} from '../utils/api';

//Action
import Cart from './Cart/Cart';
import Instructions from './Instructions/Instructions';
import Carrousel from './Carrousel/Carrousel'

import './TiendaPlantas.css';


class TiendaPlantas extends React.Component { 
      

        constructor(props) {
        super(props);
        this.state = {
            plantas:[],
            lastClicked: null,
        }
    
        
    }
    componentWillMount() {
        getData('plantas').then((plantas) => this.setState({plantas}));
        console.log(this.state.plantas);
    }
  
    render() {

        console.log(this.state.plantas);
        return(            
                <div>
                   <Carrousel/>

                   {this.state.plantas.map(
                       planta=>{
                           return(<Cart plantas={planta}/>)
                       }
                   )} 
                   
                   <Instructions/>
                </div>
                
        )
        
    }       

}

export default TiendaPlantas;

//return (
  //  {this.state.plantas.map(planta => {
        
    //    return (
      //  <Cart plantas={planta}/>
    //)})}
   
   
//);