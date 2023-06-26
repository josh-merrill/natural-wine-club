import "./footer.css";
import FooterNav from "../top/FooterNav";
import footerLogo from "../../assets/footer-logo.svg";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer--wrapper">

      <div className="footer--container container">
        <div className="footer--logo">
          <a href="#top">
            <img src={footerLogo} alt="Logo" />
          </a>
        </div>

        <div className="footer--social">
          <a href="#" className="footer--social-icon">
            <FiFacebook />
          </a>
          <a href="#" className="footer--social-icon">
            <FiInstagram />
          </a>
          <a href="#" className="footer--social-icon">
            <FiTwitter />
          </a>
        </div>

        <div className="footer--links col1">
          <a href="#">All Wines</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
        </div>

        <div className="footer--links col2">
          <a href="#">FAQs</a>
          <a href="#">Support</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer--cta">
          <button className="btn-light">Subscribe</button>
        </div>

        <div className="footer--copyright">
          <p>&copy; NWC. All Rights Reserved.</p>
        </div>

      </div>
      <FooterNav />
    </footer>
  );
}
