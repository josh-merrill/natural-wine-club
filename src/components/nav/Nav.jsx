import { useState, useContext } from "react";
import { Context } from "../../context/AppContext";

import "./nav.css";
import logo from "../../assets/nwc-logo.svg";
import { Slant as Hamburger } from "hamburger-react";
import { BsBag } from "react-icons/bs";

export default function Nav() {
  const { totalOrderCount, handleCart } = useContext(Context);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <section className="container">
      <nav className="nav--container">
        <img className="nav--logo" src={logo} />
        <div className={`nav--menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="nav--list">
            <li className="nav--item">
              <a href="#menu">Menu</a>
            </li>
            <li className="nav--item">
              <a href="#about">About</a>
            </li>
            <li className="nav--item">
              <a href="#" className="nav--basket" onClick={handleCart}>
                Cart
                <div className="nav--basket-icon-badge">
                  <BsBag style={{ fontSize: "2rem" }} />
                  {totalOrderCount ? <h4>{totalOrderCount}</h4> : null}
                </div>
              </a>
            </li>
          </ul>
        </div>
        <button className="nav--toggle" onClick={toggleMobileMenu}>
          <Hamburger duration={0.2} color="var(--color-blue)" />
        </button>
      </nav>
    </section>
  );
}
