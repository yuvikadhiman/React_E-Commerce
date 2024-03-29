import {
  Home,
  SingleProduct,
  Error,
  Cart,
  Products,
  About,
  SharedLayout,
  AuthWrapper,
  Checkout,PrivateRoute
} from "./pages";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styled from 'styled-components'

const App = () => {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </AuthWrapper>
  );
};

export default App;
