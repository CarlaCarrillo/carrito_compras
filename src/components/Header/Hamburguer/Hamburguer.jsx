import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import './Hamburguer.css'

class Hamburguer extends React.Component {
  showSettings(event) {
    event.preventDefault();

  }

  render() {
    return (
      <Menu>
        <Link to="/" ><a id="home" className="menu-item">HOME</a></Link><p/>
        <a id="principal" className="menu-item">TIENDA</a>
        <Link to="/plantas"> <a id="submenu" className="menu-item">Plantas</a> </Link>
        <a id="submenu" className="menu-item" href="/">Mesas de cultivo</a>
        <a id="submenu" className="menu-item" href="/">Semillas</a>
        <a id="submenu" className="menu-item" href="/">Herramientas</a><p/>
        <a id="principal" className="menu-item">REGALOS</a>
        <Link to="/regalos"> <a id="submenu" className="menu-item">Kit mi primer huerto</a></Link>
        <a id="submenu" className="menu-item" href="/">Terrarios</a>
        <a id="submenu" className="menu-item" href="/">Arreglos Macetas</a><p/>
        <a id="principal" className="menu-item" href="/sucursales">SUCURSALES</a>

        
      </Menu>
    );
  }
}
export default Hamburguer;
//<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>