import "./menu.css";

import { useState, useContext } from "react";
import { Context } from "../../context/AppContext";
import WineItem from "./WineItem";
import Cart from "../cart/Cart";
import menuData from "../data/menu.json";

export default function Menu() {
  const { cartItems, viewCart, handleCart } = useContext(Context);

  const { menu } = menuData;
  const [showOrderBtn, setShowOrderBtn] = useState(false);

  function toggle(id) {
    menu.map((wine) => {
      return wine.id === id ? setShowOrderBtn(true) : setShowOrderBtn(false);
    });
  }

  const menuItemElements = menu.map((item) => (
    <WineItem key={item.id} item={item} toggle={toggle} />
  ));

  return (
    <section className="menu--wrapper container">
      {viewCart ? <Cart /> : null}
        <div id="menu" className="menu--container">
          <h2>Wines of the month</h2>
          <div className="menu--container-wrapper">{menuItemElements}</div>
          <div className="menu--btn-wrapper">
            <button className="btn-secondary" onClick={handleCart}>
              View Cart
            </button>
          </div>
        </div>
    </section>
  );
}
