import React from "react";
import GridView from "./GridView";
import { useFilterContext } from "../context/filterContext";
import ListView from "./ListView";
const ProductList = () => {
    const {filtered_products: products, grid_view } = useFilterContext()
    console.log(products)
    if (grid_view === false) {
      return <ListView products={products} />
    }
    return <GridView products={products} />

  }
  
export default ProductList;

