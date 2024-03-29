import React from "react";
import { useContext, useEffect, useReducer, createContext } from "react";
import reducer from "../reducers/products_reducers";
import axios from "axios";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { products_url as url } from "../utils/constants";
const ProductContext = createContext();

const initialState = {
  isSideBarOpen: false,
  product_loading: false,
  product_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchproduct = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      console.log(response)
      const products = response.data;
      console.log(products)
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleproduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const Singleproducts = response.data;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: Singleproducts });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };
 
  useEffect(() => {
    fetchproduct(url);
  }, []);
  return (
    <ProductContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleproduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
