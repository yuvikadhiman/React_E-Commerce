import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductContext } from "../context/ProductsContext";

const initialstate = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filter: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialstate);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({type:FILTER_PRODUCTS})
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort,state.filter]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
    const ClearFilter=()=>{
      dispatch({type:CLEAR_FILTERS})
    }
  const updatesort = (e) => {
    const value = e.target.value;
    // console.log( value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilter = (e) => {
    let value= e.target.value
    let name=e.target.name

    if(name==='category'){
      value=e.target.textContent
    }
    if(name==='color'){
      value=e.target.dataset.color
    }
    if(name==='price'){
      value=Number(value)
    }
    console.log(name,value)
    dispatch({type:UPDATE_FILTERS,payload:{name,value}})
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updatesort,
        updateFilter,ClearFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
