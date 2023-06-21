import "./cart.css";
import { useContext } from "react";
import { Context } from "../../context/AppContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, handleCart } = useContext(Context);

  const cartItemElements = cartItems.map((item) => {

    const itemTotal = item.price * item.order_amount;

    if (item.order_amount > 0) {
      return (
        <div key={item.id} className="cart--item">
          <div className="cart--item-img">
            <img src={item.img} alt={item.name} />
          </div>
          <div className="cart--item-left">
          </div>
          <div className="cart--item-left">
            <h4>{item.name}</h4>
            <p>{item.color}</p>
          </div>
          <div className="cart--item-amount">
            <button className="btn-secondary" id="card--order-btn-order">
              <span
                onClick={() => {
                  removeFromCart(item);
                }}
              >
                -
              </span>
              <span>{item.order_amount}</span>
              <span
                onClick={() => {
                  addToCart(item);
                }}
              >
                +
              </span>
            </button>
          </div>
          <div className="cart--item-price">
            <p>${itemTotal}</p>
          </div>
        </div>
      );
    }
  });

  return (
    <section className="container">

      <div className="cart--container">
        <h2>Your Cart Items</h2>
        <div className="cart--item-container">
          {cartItemElements}
        </div>
        <div className="cart--nav-button">
        <button className="btn-primary" onClick={handleCart}>Go back</button>
          <button className="btn-secondary">Checkout</button>
        </div>
      </div>
    </section>
  );
}
