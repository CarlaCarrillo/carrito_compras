import React from 'react';

import Logo from './Logo/Logo';
import UserArea from './UserArea/UserArea';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';
import Hamburguer from './Hamburguer/Hamburguer';
import CartIcon from './CartIcon.png';
import { Link } from 'react-router-dom'

import './Header.css';
import Container from 'react-bootstrap/Container';

const Header = () => ( 
    <div className="header">
    <Hamburguer/>
   
    <Navbar id="barra" bg="" expand="lg"> 
      <UserArea/>
     
      <Container id="contBarSearch">
  
      <h1 className="">Plantae.com</h1>
      <Logo/>
      <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
         
      </Form>
      </Container>
            <Link to="/carrito"><a  id="submenu" className="carritoIcon"><input id="imgcarro" type="image" src={CartIcon}  Link to="/carrito"></input></a></Link>

    </Navbar>
    </div>
);
// <UserArea loggedIn/>
export default Header;