import { useState, useContext } from "react";
import { Context } from "../../context/AppContext";
import "./menu.css";
import WineItem from "./WineItem";
import Cart from "../cart/Cart";
import menuData from "../data/menu.json";

export default function Menu() {
  const { cartItems } = useContext(Context);
  const { menu } = menuData;
  const [showOrderBtn, setShowOrderBtn] = useState(false);

  function toggle(id) {
    menu.map((wine) => {
      return wine.id === id ? setShowOrderBtn(true) : setShowOrderBtn(false);
    });
  }
  console.log("cartItems", cartItems);

  const menuItemElements = menu.map((item) => (
    <WineItem
      key={item.id}
      item={item}
      toggle={toggle}
    />
  ));

  return (
    <section className="container">
      <div id="menu" className="menu--container">
        <h2>Wines of the month</h2>
        <div className="menu--wrapper">{menuItemElements}</div>
        <Cart />
      </div>
    </section>
  );
}
