import React from "react";

class CheckoutFrom extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    creditCard: "",
    zipCode: "",
  };
  handleSubmit = (e) => {
    window.alert(`Purchase complete `);
  };
  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  render() {
    return (
      <section className="Check Out">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" onChange={this.handleInput}></input>

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" onChange={this.handleInput}></input>

          <label htmlFor="email">Email</label>
          <input id="email" onChange={this.handleInput}></input>

          <label htmlFor="creditCard">Credit Card</label>
          <input id="creditCard" onChange={this.handleInput}></input>

          <label htmlFor="zipCode">Zip Code</label>
          <input id="zipCode" onChange={this.handleInput}></input>

          <button type="submit">Buy Now</button>
        </form>
      </section>
    );
  }
}
export default CheckoutFrom;
