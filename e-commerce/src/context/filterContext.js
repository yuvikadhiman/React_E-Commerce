import React, { useEffect, useContext, useReducer,createContext } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'
import { useProductContext } from './ProductsContext';
const initialstate = {
 filtered_product:[],
 all_products:[],

}

const FilterContext = createContext()


export const FilterProvider = ({ children }) => {
  const{products}=useProductContext()
  const[state,dispatch]=useReducer(reducer,initialstate)
  
  useEffect(()=>{
    dispatch({type:LOAD_PRODUCTS,payload:products})
  },[products])
//   const ClearFilter=()=>{
//     dispatch({type:CLEAR_FILTERS})
//   }
  return (
    <FilterContext.Provider
      value={{}}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}