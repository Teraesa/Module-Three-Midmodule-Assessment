import "./App.css";
import React from "react";
import Products from "./Components/Products";
import CheckoutForm from "./Components/CheckoutForm";
import ShoppingCart from "./Components/ShoppingCart";

const reducer = (accumulator, product) => {
  return accumulator + product.price;
};

const getTax = (cart) => {
  if (cart.length === 0) return 0;
  return cart.reduce(reducer, 0) * 0.05;
};

const total = (cart) => {
  if (cart.length === 0) return 0;
  return cart.reduce(reducer, 0);
};
class App extends React.Component {
  state = { cart: [], numProducts: 0, totalTax: 0, total: 0 };

  addToCart = (product, numProducts, totalTax, total) => {
    this.setState({
      cart: [...this.state.cart, product],
      // line below updates subtotal count
      numProducts: this.state.numProducts + product.price,
      totalTax: getTax([...this.state.cart, product]),
      total: this.state.numProducts + this.state.totalTax,
    });
    console.log("numproduct", this.state.numProducts);
    console.log("totaltax", this.state.totalTax);
  };

  render() {
    return (
      <div className="App">
        <Products
          addToCart={this.addToCart}
          totalTax={this.state.totalTax}
          total={this.state.total}
          numProducts={this.state.numProducts}
        />
        <CheckoutForm />
        <ShoppingCart
          cart={this.state.cart}
          numProducts={this.state.numProducts}
          totalTax={this.state.totalTax}
          total={this.state.total}
        />
      </div>
    );
  }
}

export default App;
