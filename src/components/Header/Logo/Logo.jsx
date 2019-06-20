import React, { Component } from 'react';
//Aqui importamos nuestra imagen
import logo from './logo2.png';


class Logo extends Component {
  render() {
    return (
      <div className="logo">
        {/*Y en la etiqueta img simplemente la mostramos*/}
        <img id="logo" src={logo} />
      </div>
    );
  }
}

export default Logo;