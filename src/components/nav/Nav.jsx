import { useState } from "react";

import "./nav.css";
import logo from "../../assets/nwc-logo.png";
import { Slant as Hamburger } from "hamburger-react";
import { BsBag } from "react-icons/bs";

export default function Nav() {
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
              <a href="#" className="nav--basket">
                Cart
              <BsBag className="nav--icon" style={{ fontSize: "1.75rem" }} />
              </a>
            </li>
          </ul>
        </div>
        <button className="nav--toggle" onClick={toggleMobileMenu}>
          <Hamburger
            duration={0.2}
            color="var(--color-blue)"
          />
        </button>
      </nav>
    </section>
  );
}
