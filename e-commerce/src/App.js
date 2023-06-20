import {
  Home,
  SingleProduct,
  Checkout,
  Error,
  Cart,
  Products,
  About,
  PrivateRoute,
} from "./pages";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styled from 'styled-components'
const App = () => {
  return (
    <div>
      <h1>store</h1>
      <Router>
        <Routes>
          <Route path='./' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='product' element={<Products/>}/>

        </Routes>
      </Router>
    </div>
  );
};

export default App;
