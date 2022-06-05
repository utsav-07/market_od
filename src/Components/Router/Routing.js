import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from '../../Pages/Auth/Login/Login';
import Register from '../../Pages/Auth/Register/Register';
import Home from '../../Pages/Home/Home';
import Shop from '../../Pages/Shop/Shop';
import ShoppingCategory from '../../Pages/ShopingCategory/ShoppingCategory';

import { Navigation } from '../Navigation/Navigation';


export default function Routing() {
  return (
      <>

    <Router>
    <Navigation />
      <Routes>
        <Route  path="/" exact element={<Home/>} />{" "}
        <Route path="/login" element={<Login/>} />{" "}
        <Route path = '/register' element={<Register/>} />
        <Route path = '/shop' element={<Shop/>} />
        <Route path='/shopinCategory/:id' element={<ShoppingCategory/>} />
      </Routes>{" "}
    </Router>{" "}
      </>
  )
}
