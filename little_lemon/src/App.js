import './App.css';
import React from 'react';
import Header from './Components/Header.js'
import Nav from './Components/Nav.js';
import Footer from './Components/Footer.js';
import Main from './Components/Main.js';
import {Home , About, Menu, OrderOnline, Reservation, Login} from './Routers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/menu' element = {<Menu/>} />
          <Route path='/reservation' element = {<Reservation/>} />
          <Route path='/order-online' element = {<OrderOnline/>} />
          <Route path='/login' element = {<Login/>} />
        </Routes>
      </>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
