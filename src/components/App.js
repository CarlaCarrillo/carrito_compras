import React from 'react';

//Componentes
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Login from './Login/Login';
import Header from './Header/Header';
import List from './List/List';

import UserRegister from './UserRegister/UserRegister';
import TiendaPlantas from './TiendaPlantas/TiendaPlantas';
import ShopCar from './ShopCar/ShopCar';

const App = () => (
  <BrowserRouter>
    <Route component={Header} />
    <Route exact path="/" component={Login} />
    <Route path="/list" component={List} />
    <Route exact path="/user" component={UserRegister} />
    <Route path="/plantas" component={TiendaPlantas} />
    <Route path="/carrito" component={ShopCar} />
    <Redirect path="/"/>
  </BrowserRouter>
)

export default App;
