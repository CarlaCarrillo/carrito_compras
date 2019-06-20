import React from 'react';

//Componentes
import {BrowserRouter,Route} from 'react-router-dom'




import Login from './Login/Login';
import Header from './Header/Header';
import List from './List/List';

import UserRegister from './UserRegister/UserRegister';
import TiendaPlantas from './TiendaPlantas/TiendaPlantas';
import ShopCar from './ShopCar/ShopCar';




function App() {
  const items = [
    {id: '1', name: 'Name 1', description: 'Description 1', value: 2},
    {id: '2', name: 'Name 2', description: 'Description 2', value: 1},
    {id: '3', name: 'Name 3', description: 'Description 3', value: 0},
    {id: '4', name: 'Name 4', description: 'Description 4', value: 5},
  ];
  return (
    <BrowserRouter>
    <Route component={Header}/>
    
    <Route exact path="/" component={Login}/>
    <Route  path="/list" component={List}/>
    <Route  path="/user" component={UserRegister}/>
    <Route  path="/plantas" component={TiendaPlantas}/>
    <Route  path="/carrito" component={ShopCar}/>
    
    
    </BrowserRouter>
    
  );
}

export default App;
