import React, { Component } from 'react';
//Aqui importamos nuestra imagen
import facebook from './facebook.jpg';
import twitter from './twitter.png';


class Iconos extends Component {
  render() {
    return (
      <div className="iconos">
        {/*Y en la etiqueta img simplemente la mostramos*/}
        <img id="facebook" src={facebook} />
        <img id="twitter" src={twitter} />
      </div>
    );
  }
}

export default Iconos;