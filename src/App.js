import "./App.css";
import React from "react";
import Products from "./Components/Products";
import CheckoutForm from "./Components/CheckoutForm";
import ShoppingCart from "./Components/ShoppingCart";

const reducer = (accumulator, product) => {
  return accumulator + product.price;
};

const numProducts = (cart) => {
  if (cart.length === 0) return 0;
  return cart.reduce(reducer, 0) + cart.length;
};

class App extends React.Component {
  state = { cart: [], numProducts: 0 };
  addToCart = (product) => {
    this.setState({
      cart: [...this.state.cart, product],
      numProducts: this.state.numProducts + 1,
    });
  };
  render() {
    return (
      <div className="App">
        <Products addToCart={this.addToCart} />
        <CheckoutForm />
        <ShoppingCart
          cart={this.state.cart}
          numProducts={this.state.numProducts}
        />
      </div>
    );
  }
}

export default App;
