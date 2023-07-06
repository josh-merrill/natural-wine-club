import { useState, useContext, useEffect } from "react";
import { Context } from "../../context/AppContext";

import "./nav.css";
import logo from "../../assets/nwc-logo.svg";
import { Slant as Hamburger } from "hamburger-react";
import { BsBag } from "react-icons/bs";

export default function Nav() {
  const { totalOrderCount, handleCart } = useContext(Context)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  function closeMobileMenu() {
    setMobileMenu(false)
  }

  return (
    <section id="top" className="container">
      <nav className="nav--container">
        <a href="/" onClick={closeMobileMenu}>
          <img src={logo} alt="Natural Wine Club logo" className="nav--logo" />
        </a>
        <div
          className={`nav--menu ${mobileMenu && isSmallScreen ? "active" : ""}`}
        >
          <ul className="nav--list" onClick={closeMobileMenu}>
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
        <div aria-label="Hamburger menu to expand mobile menu"className="nav--toggle">
          <Hamburger
            className="nav--toggle"
            duration={0.2}
            color="var(--color-blue)"
            toggled={mobileMenu}
            toggle={setMobileMenu}
          />
        </div>
      </nav>
    </section>
  )
}
