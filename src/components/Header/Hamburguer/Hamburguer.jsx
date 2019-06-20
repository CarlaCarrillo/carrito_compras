import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Hamburguer.css'

class Hamburguer extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="principal" className="menu-item">TIENDA</a>
              <a id="submenu" className="menu-item" href="/plantas">Plantas</a>
              <a id="submenu" className="menu-item" href="/">Mesas de cultivo</a>
              <a id="submenu" className="menu-item" href="/">Semillas</a>
              <a id="submenu" className="menu-item" href="/">Herramientas</a>
        <a id="principal" className="menu-item">REGALOS</a>
              <a id="submenu" className="menu-item" href="/regalos">Kit mi primer huerto</a>
              <a id="submenu" className="menu-item" href="/">Terrarios</a>
              <a id="submenu" className="menu-item" href="/">Arreglos Macetas</a>
        <a id="principal" className="menu-item" href="/sucursales">SUCURSALES</a>

        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
export default Hamburguer;