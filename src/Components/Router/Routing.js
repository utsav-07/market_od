import React, { useState, createContext } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Address from '../../Pages/Address/Address';
import Login from '../../Pages/Auth/Login/Login';
import Register from '../../Pages/Auth/Register/Register';
import Cart from '../../Pages/Cart/Cart';
import Home from '../../Pages/Home/Home';
import Payment from '../../Pages/Payment/Payment';
import ProductDetail from '../../Pages/ProductDetail/ProductDetail';
import Shop from '../../Pages/Shop/Shop';
import ShoppingCategory from '../../Pages/ShopingCategory/ShoppingCategory';
import ShopsItems from '../../Pages/ShopingCategory/ShopsItems/ShopsItems';

import { Navigation } from '../Navigation/Navigation';
import { ReactNavbar } from "overlay-navbar"

import './Routing.css'
import SideBar from '../Sidebar/SideBar';

export const locationtContext = createContext();


export default function Routing() {


  const [location, setLocation] = useState("");


  function SetAddress(loc) {
    setLocation(loc);
  }


  return (
    <>

      <locationtContext.Provider value={{ location, SetAddress }}>

        <Router>
        {/* <ReactNavbar /> */}
          <Navigation />
          {/* <SideBar /> */}
          <Routes>
          
            <Route path="/market_od" exact element={<Home />} />{" "}
            <Route path="/login" element={<Login />} />{" "}
            <Route path='/register' element={<Register />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/AddressSection' element={<Address />} />
            <Route path='/shopinCategory/:id' element={<ShoppingCategory />} />
            <Route path='/shopinCategory/:id/:id' element={<ShopsItems />} />
            <Route path='/productDetail' element={<ProductDetail />} />
            <Route path='/cart/AddressSection/Payement' element={<Payment />} />

          </Routes>{" "}
        </Router>{" "}
      </locationtContext.Provider>
    </>
  )
}
