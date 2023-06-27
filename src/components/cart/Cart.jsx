import "./cart.css"
import { useState, useEffect, useContext } from "react"
import { Context } from "../../context/AppContext"


export default function Cart() {
  const { cartItems, addToCart, removeFromCart, emptyCart, setViewCart } =
    useContext(Context)

  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.order_amount
  }, 0)
  const totalPriceTax = (totalPrice * 0.205).toFixed(2)
  const totalPriceIncludingTax = (Number(totalPrice) + Number(totalPriceTax)).toFixed(2)

  useEffect(() => {
    if (isCheckingOut) {
      const timer = setTimeout(() => {
        setIsOrderPlaced(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isCheckingOut])

  function handleClose() {
    setViewCart(false)
    document.body.style.overflow = "auto"
  }

  function handleCheckout() {
    setIsCheckingOut(true)
    emptyCart()
  }

  const cartItemsEmpty = (
    <div className="cart--empty">
      <h3>Your cart is empty 🍷</h3>
      <p>Add some items to your cart and come back!</p>
    </div>
  )

  const cartCheckout = (
    <>
      {isOrderPlaced ? (
        <div>
          <h3>Your order was placed</h3>
          <p>Thank you for your purchase!</p>
        </div>
      ) : (
        <div>
          <h3>Bottling up your order</h3>
        <div className="checkout--spinner-container">
          <div className="checkout--spinner"></div>
          </div>
        </div>
      )}
    </>
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
            id="cart--item-btn-order"

          >
            <span
            onClick={() => removeFromCart(item)}
            >-</span>
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
    <section className="cart--component-wrapper">
      <div className="container">
        <div className="cart--container">

        <h2 className="cart--title">Your Cart Items</h2>
        <div className={`cart--item-container ${cartItems.length === 0 || isCheckingOut ? 'center' : ''}`}>
        {isCheckingOut ?
        (cartCheckout) : (cartItems.length > 0 ? cartItemElements : cartItemsEmpty)}
        </div>
        <div className="cart--total-container">
          <div className="cart--total">
            <p>Tax</p>
            <h3>${totalPriceTax}</h3>
            <p>Total</p>
            <h3>${totalPriceIncludingTax}</h3>
            </div>
        </div>
        <div className="cart--nav">
          <a className="cart--nav-back bold" onClick={handleClose}>
            &#8592; Continue shopping
          </a>
          <button className="btn-primary" onClick={handleCheckout}

          disabled={cartItems.length === 0 ? true : false}>
            Checkout
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}
