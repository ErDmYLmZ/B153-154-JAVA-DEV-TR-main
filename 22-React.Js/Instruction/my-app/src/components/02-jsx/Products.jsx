import React from "react";
import products from "../../assets/data/products.js"

const Products = () => {
 

  const fruitsList = products.map((fruit) => (
    <li key={fruit.id}>{fruit.title} </li>
  ));

  return (
    <ol>
    {fruitsList}
  </ol>
  )
};

export default Products;
