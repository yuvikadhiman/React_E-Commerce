import React from "react";
import { useContext, useEffect, useReducer, createContext } from "react";
import reducer from "../reducers/products_reducers";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  // GET_PRODUCTS_BEGIN,
  // GET_PRODUCTS_SUCCESS,
  // GET_PRODUCTS_ERROR,
  // GET_SINGLE_PRODUCT_BEGIN,
  // GET_SINGLE_PRODUCT_SUCCESS,
  // GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import {products_url as url} from '../utils/constants'
const ProductContext = createContext();

const initialState = {
  isSideBarOpen: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchproduct = async(url)=>{
    const response =await axios.get(url)

  }
  return (
    <ProductContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
