import "./footer.css";
import footerLogo from "../../assets/footer-logo.svg";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import Reveal from "../../utils/Reveal";
import FooterNav from "../footerNav/FooterNav";

export default function Footer() {
  return (
    <footer className="footer--wrapper">
      <Reveal>
        <div className="container footer--container">
          <div className="footer--logo">
            <a href="#top" aria-label="Link to return to the top of the page">
              <img src={footerLogo} alt="Logo" />
            </a>
          </div>
          <div className="footer--social">
            <a
              href="#"
              aria-label="Link to Facebook"
              className="footer--social-icon"
            >
              <FiFacebook />
            </a>
            <a
              href="#"
              aria-label="Link to Instagram"
              className="footer--social-icon"
            >
              <FiInstagram />
            </a>
            <a
              href="#"
              aria-label="Link to Twitter"
              className="footer--social-icon"
            >
              <FiTwitter />
            </a>
          </div>
          <div className="footer--links col1">
            <a
              href="#"
              aria-label="Link to placeholder All Wines page"
              className="footer--link"
            >
              All Wines
            </a>
            <a
              href="#"
              aria-label="Link to placeholder Blog page"
              className="footer--link"
            >
              Blog
            </a>
            <a
              href="#"
              aria-label="Link to placeholder About Us page"
              className="footer--link"
            >
              About Us
            </a>
          </div>
          <div className="footer--links col2">
            <a
              href="#"
              aria-label="Link to placeholder FAQs page"
              className="footer--link"
            >
              FAQs
            </a>
            <a
              href="#"
              aria-label="Link to placeholder Support page"
              className="footer--link"
            >
              Support
            </a>
            <a
              href="#"
              aria-label="Link to placeholder Privacy Policy page"
              className="footer--link"
            >
              Privacy Policy
            </a>
          </div>
          <div className="footer--cta">
            <button className="btn-light">Subscribe</button>
          </div>
          <div className="footer--copyright">
            <p>&copy; NWC. All Rights Reserved.</p>
          </div>
        </div>
      </Reveal>
        <FooterNav />
    </footer>
  );
}
