import "./footer.css";
import Top from "../top/FooterNav";
import footerLogo from "../../assets/footer-logo.svg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer--wrapper">
      <div className="footer--container container">
        <div className="footer--info">
          <a href="#top" className="footer--logo">
            <img src={footerLogo} alt="Logo" />
          </a>

          <div className="footer--social">
            <a href="#" className="footer--social-icon">
              <FaInstagramSquare />
            </a>
            <a href="#" className="footer--social-icon">
              <FaLinkedin />
            </a>
            <a href="#" className="footer--social-icon">
              <FaTwitterSquare />
            </a>
          </div>
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
      <Top />
    </footer>
  );
}
