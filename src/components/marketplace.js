import React, { Component } from 'react'
import {Routes, Route } from "react-router-dom";
import{Shop} from './market/shop/shop'
import {Cart} from './market/cart/cart'
import { Bar } from './market/bar';
import { ShopContextProvider } from "../context/shop-context";
import { Contact } from "./market/contact";

export class Marketplace extends Component {
  render() {
    return (
      <div>
         <ShopContextProvider>
          <Bar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </ShopContextProvider>

      </div>
    )
  }
}

export default Marketplace