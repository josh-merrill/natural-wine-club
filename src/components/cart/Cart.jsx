import "./cart.css";
import { useContext } from "react";
import { Context } from "../../context/AppContext";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, setViewCart } = useContext(
    Context
  )

  function handleClose() {
    setViewCart(false);
    document.body.style.overflow = "auto";
  }

  const cartItemsEmpty = (
    <div className="cart--empty">
      <h2>Your cart is empty 🍷</h2>
      <p>Add some items to your cart and come back!</p>
    </div>
  )

  const cartItemElements = cartItems.map((item) => {
    const itemTotal = item.price * item.order_amount

    return (
      <div key={item.id} className="cart--item">
        <div className="cart--item-img">
          <img src={item.img} alt={item.name} />
        </div>
        <div className="cart--item-name">
          <h3>{item.name}</h3>
          <p>{item.color}</p>
        </div>
        <div className="cart--item-amount">
          <button
            className="btn-secondary"
            id="card--order-btn-order"
            onClick={() => removeFromCart(item)}
          >
            <span>-</span>
            <span>{item.order_amount}</span>
            <span onClick={() => addToCart(item)}>+</span>
          </button>
        </div>
        <div className="cart--item-price">
          <h3>${itemTotal}</h3>
        </div>
      </div>
    )
  })

  return (
    <section className="cart--wrapper">
      <div className="container">
        <h2 className="cart--title">Your Cart Items</h2>
        <div className={`cart--item-container ${cartItems.length > 0 ? '' : 'center'}`}>
          {cartItems.length > 0 ? cartItemElements : cartItemsEmpty}
        </div>
        <div className="cart--nav">
          <a className="cart--nav-back bold" onClick={handleClose}>
            &#8592; Continue shopping
          </a>
          <button className="btn-secondary">Checkout</button>
        </div>
      </div>
    </section>
  )
}
