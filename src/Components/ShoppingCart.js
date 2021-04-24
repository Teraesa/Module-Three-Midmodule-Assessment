import React from "react";

const Cart = ({ cart, numProducts }) => {
  return (
    <section className="ShoppingCart">
      <h2>Cart</h2>
      {cart.map((product) => {
        return (
          <ul>
            <li key={product.id}>
              {product.name} ${product.price}
            </li>
            ;
          </ul>
        );
      })}
      <h2>Subtotal:{numProducts}</h2>
      <h2>Tax:$00.00</h2>
      <h2>Total:$00.00</h2>
    </section>
  );
};
export default Cart;
