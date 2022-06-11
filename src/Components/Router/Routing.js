import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Address from '../../Pages/Address/Address';
import Login from '../../Pages/Auth/Login/Login';
import Register from '../../Pages/Auth/Register/Register';
import Cart from '../../Pages/Cart/Cart';
import Home from '../../Pages/Home/Home';
import Shop from '../../Pages/Shop/Shop';
import ShoppingCategory from '../../Pages/ShopingCategory/ShoppingCategory';
import ShopsItems from '../../Pages/ShopingCategory/ShopsItems/ShopsItems';

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
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/cart/AddressSection' element = {<Address/>} />
        <Route path='/shopinCategory/:id' element={<ShoppingCategory/>} />
        <Route path='/shopinCategory/:id/:id'   element={<ShopsItems/>} />
      </Routes>{" "}
    </Router>{" "}
      </>
  )
}
