import {
  Home,
  SingleProduct,
  Checkout,
  Error,
  Cart,
  Products,
  About,
  PrivateRoute,
  SharedLayout,
} from "./pages";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styled from 'styled-components'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='*' element={<Error/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
