import { useState, useContext, useEffect, useRef } from "react";
import { Context } from "../../context/AppContext";
import "./menu.css";
import Badge from "../badge/Badge";

export default function WineItem({ item }) {
  const { cartItems, addToCart, removeFromCart, setTotalOrderCount } = useContext(Context);

  const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
  const initialCount = cartItem?.order_amount || 0;

  const [show, setShow] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const menuDetailsRef = useRef(null);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const menuDetailsHeight = menuDetailsRef.current?.clientHeight;
    const lineHeight = parseInt(getComputedStyle(menuDetailsRef.current).lineHeight);
    const maxLines = 3;
    const maxHeight = lineHeight * maxLines;

    if (menuDetailsHeight > maxHeight) {
      setExpanded(true);
    }
  }, [expanded]);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  const handlePlus = () => {
    setCount((prevCount) => prevCount + 1);
    setTotalOrderCount((prevTotalCount) => prevTotalCount + 1);
  };

  const handleMinus = () => {
    setCount((prevCount) => prevCount - 1);
    setTotalOrderCount((prevTotalCount) => prevTotalCount - 1);
  };

  return (
    <div key={item.id} className="menu--item">
      <div className="menu--item-top">
        <div className="item--badge-absolute">
          <Badge item={item} />
        </div>
        <img src={item.img} alt={item.name} className="menu--item-img" />
      </div>
      <div className="menu--item-title-wrapper">
        <h3>${item.price}</h3>
        <h2 className="menu--item-title">{item.name}</h2>
      </div>
      <hr className="line--blue" />
      <div className="menu--item-bottom">
        <div className="menu--item-bottom-inner">
          <div className="menu--item-basket">
            {count < 1 ? (
              <button
                className="btn-secondary"
                onClick={() => {
                  setShow(true);
                  addToCart(item);
                  handlePlus();
                }}
              >
                Add to cart
              </button>
            ) : (
              <button className="btn-secondary" id="menu--item-btn-order">
                <span
                  onClick={() => {
                    removeFromCart(item);
                    handleMinus();
                  }}
                >
                  -
                </span>
                <span>{count}</span>
                <span
                  onClick={() => {
                    addToCart(item);
                    handlePlus();
                  }}
                >
                  +
                </span>
              </button>
            )}
          </div>
          <div className="menu--item-details">
            <div
              className={`menu--item-details-text${expanded ? " expanded" : ""}`}
              ref={menuDetailsRef}
            >
              <p>
                <span className="bold">{item.winery}</span> &#x2022; {item.year} &#x2022;{" "}
                <span className="bold">{item.winemaking}</span> &#x2022; {item.grape} &#x2022;{" "}
                <span className="bold">{item.region}</span> &#x2022; {item.description}
              </p>
            </div>
          </div>
          <button className="btn-bold" onClick={toggleExpanded}>
            {expanded ? "- View less" : "+ View more"}
          </button>
        </div>
      </div>
    </div>
  );
}
