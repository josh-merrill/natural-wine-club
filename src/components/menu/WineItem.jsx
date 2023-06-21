import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/AppContext";
import "./menu.css";
import Badge from "../badge/Badge";

export default function WineItem({ item }) {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    setTotalOrderCount,
  } = useContext(Context);

  // Find the item in the cart to get the initial count value
  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const initialCount = cartItem ? cartItem.order_amount : 0;

  const [show, setShow] = useState(true);
  const [viewDetails, setViewDetails] = useState(false);
  const [count, setCount] = useState(initialCount);

  // Update the count state when the cartItem count changes
  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
    setTotalOrderCount((prevTotalCount) => prevTotalCount + 1);
  }

  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
    setTotalOrderCount((prevTotalCount) => prevTotalCount - 1);
  }

  return (
    <div key={item.id} className="menu--item">
      <div className="menu--item-top">
        <Badge item={item} />
        <img src={item.img} alt={item.name} className="menu--item-img" />
      </div>
      <div className="menu--item-title-wrapper">
        <h3>${item.price}</h3>
        <h2 className="menu--item-title">{item.name}</h2>
      </div>
      <hr className="line--blue" />
      <div className="menu--item-bottom">
        {viewDetails ? (
          <div className="menu--item-bottom-inner">
            <div className="menu--item-details">
              <p>
                <span className="bold">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="bold">Year: </span>
                {item.year}
              </p>
              <p>
                <span className="bold">Type: </span>
                {item.winemaking}
              </p>
              <p>{item.description}</p>
            </div>
            <button
              className="btn-primary"
              onClick={() => setViewDetails(!viewDetails)}
            >
              View less
            </button>
          </div>
        ) : (
          <div className="menu--item-bottom-inner">
            <div className="menu--item-basket">
              <p>
                <span className="bold">Add to basket:</span>
              </p>

              {count < 1 ? (
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setShow(true);
                    addToCart(item);
                    handlePlus();
                  }}
                >
                  Order
                </button>
              ) : (
                <button className="btn-secondary" id="card--order-btn-order">
                  <span onClick={() => { removeFromCart(item); handleMinus(); }}>
                    -
                  </span>
                  <span>{count}</span>
                  <span onClick={() => { addToCart(item); handlePlus(); }}>
                    +
                  </span>
                </button>
              )}
            </div>
            <div className="menu--item-details">
              <p>
                <span className="bold">Region: </span>
                {item.region}
              </p>
              <p>
                <span className="bold">Type: </span>
                {item.winemaking}
              </p>
            </div>
            <button
              className="btn-primary"
              onClick={() => setViewDetails(!viewDetails)}
            >
              View more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
