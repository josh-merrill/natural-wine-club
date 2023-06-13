import "./footer.css";
import footerLogo from "../../assets/footer-logo.svg";
import FacebookMsgSvg from "../../assets/facebook-messenger.svg";
import InstagramSvg from "../../assets/instagram.svg";
import TwitterSvg from "../../assets/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer--container">
      <a href="#" className="footer--logo">
        <img src={footerLogo} alt="Logo"/>
      </a>

      <div className="footer--social">
          <a href="#">
            <img src={FacebookMsgSvg}  alt="Messenger" className="footer--social-icon" />
          </a>
          <a href="#">
          <img src={InstagramSvg}  alt="Instagram" className="footer--social-icon" />
          </a>
          <a href="#">
          <img src={TwitterSvg}  alt="Twitter" className="footer--social-icon" />
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

</footer>
  );
}
