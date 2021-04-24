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
    e.preventDefault();
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    if (creditCard.length !== 16) {
      window.alert(`Credit card number is not valid`);
    } else if (zipCode.length !== 5) {
      window.alert(`Zip code is not valid`);
    } else if (!firstName || !lastName || !email) {
      window.alert(`Input is not valid`);
    } else {
      window.alert(`Yay! Purchase complete. You will be charged .`);
    }
  };
  handleInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { firstName, lastName, email, creditCard, zipCode } = this.state;
    return (
      <section className="Check Out">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            onChange={this.handleInput}
            value={firstName}
          ></input>

          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            onChange={this.handleInput}
            value={lastName}
          ></input>

          <label htmlFor="email">Email</label>
          <input id="email" onChange={this.handleInput} value={email}></input>

          <label htmlFor="creditCard">Credit Card</label>
          <input
            id="creditCard"
            type="tel"
            max="16"
            min="16"
            value={creditCard}
            onChange={this.handleInput}
          ></input>

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            onChange={this.handleInput}
            min="5"
            max="5"
            value={zipCode}
          ></input>

          <button type="submit">Buy Now</button>
        </form>
      </section>
    );
  }
}
export default CheckoutFrom;
