import React from "react";

const ProductCard = ({ product, addToCart }) => {
  const { name, price, description, img } = product;
  const formatPrice = (price) => `$${price.toFixed(2)}`;
  return (
    <div>
      <h2>{name}</h2>
      <h6>Price: $00.00{price.toFixed(2)}</h6>
      <p>{description}</p>
      <img src={img} alt="product photo" />
      <button onClick={() => addToCart(product)}>Add To Cart</button>
    </div>
  );
};
export default ProductCard;
