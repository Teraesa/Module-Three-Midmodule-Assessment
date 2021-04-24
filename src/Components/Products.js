import React from "react";
import productData from "../data/productData";
import Product from "./ProductCard";
import "./Products.css";

const Products = ({ addToCart }) => {
  console.log(Products);
  return (
    <>
      <h1> My Garage Sale</h1>
      <section className="Products">
        {productData.map((product) => {
          return (
            <Product product={product} addToCart={addToCart} key={product.id} />
          );
        })}
      </section>
    </>
  );
};
export default Products;
