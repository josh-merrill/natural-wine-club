import "./footer.css";
import footerLogo from "../../assets/footer-logo.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer--container">
        <div className="footer--column">
          <img className="footer--logo" src={footerLogo} />
        </div>
        <div className="footer--column">
          <ul>
            <li>All wines</li>
            <li>Stocklist</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footer--column">
          <ul>
            <li>Get in Touch</li>
            <li>Shipping</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer--column">
          <h4>Distributed from</h4>
          <p>Washington 4920 SW Ober Beach Rd. Vashon, WA 98070,
            USA
          </p>
        </div>
        <div className="footer--column">
          <h4>NWC Radio</h4>
          <ul>
            <li>Link 10</li>
            <li>Link 11</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
