import "./menu.css";
import Wine from "./Wine";
import menuData from "../../data/menu";

export default function Menu() {
  const { menu } = menuData;
  const menuItemElements = menu.map((item) => (
    <Wine key={item.id} item={item} />
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
