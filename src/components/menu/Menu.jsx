import { useState, useContext } from "react";
import { Context } from "../../context/AppContext";
import menuData from "../data/menu.json";
import Reveal from "../../utils/Reveal";
import WineItem from "./WineItem";
import Cart from "../cart/Cart";

export default function Menu() {
  const { cartItems, viewCart, handleCart } = useContext(Context);
  const { menu } = menuData;
  const [showOrderBtn, setShowOrderBtn] = useState(false);

  const toggle = (id) => {
    setShowOrderBtn(menu.some((wine) => wine.id === id));
  };

  const menuItems = menu.map((item) => (
    <WineItem key={item.id} item={item} toggle={toggle} />
  ));

  return (
    <Reveal>
      <section className="menu--wrapper container">
        {viewCart && <Cart />}
        <div className="menu--container">
          <Reveal>
            <h2 className="menu--container-title">Wines of the month</h2>
          </Reveal>
          <div className="menu--container-wrapper">{menuItems}</div>
          <div className="menu--btn-wrapper">
            <Reveal>
              <button className="btn-primary" onClick={handleCart}>
                View Cart
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
