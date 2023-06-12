import {useState} from 'react'

import "./menu.css";
import Wine from "./Wine";
import menuData from "../data/menu.json";

export default function Menu() {
  const { menu } = menuData;

  const [wineMenu, setWineMenu] = useState(menu)
  const [showOrderBtn, setShowOrderBtn] = useState(false)

  function toggle(id) {
    menu.map(wine => {
          return wine.id === id ? setShowOrderBtn(true) : setShowOrderBtn(false)

    // setWineMenu(prevMenu => {
    //   return prevMenu.map((wine) => {
    //     return wine.id === id ? {...wine, order_amount: wine.order_amount + 1} : wine
    //   })
    })
  }
  console.log(showOrderBtn)

  function addItem(id) {
    setWineMenu(prevMenu => {
      return prevMenu.map((wine) => {
        return wine.id === id ? {...wine, order_amount: wine.order_amount + 1} : wine
      })
    })
  }

  function removeItem(id) {
    setWineMenu(prevMenu => {
      return prevMenu.map((wine) => {
        return wine.id === id ? {...wine, order_amount: wine.order_amount - 1} : wine
      })
    })
  }

  console.log(wineMenu)


  const menuItemElements = menu.map((item) => (
    <Wine
      key={item.id}
      item={item}
      toggle={toggle}
      addItem={addItem}
      removeItem={removeItem}
    />
  ));

  return (
    <section className="container">
      <div id="menu" className="menu--container">
        <h2>Wines of the month</h2>
        <div className="menu--wrapper">{menuItemElements}</div>
      </div>
    </section>
  );
}
