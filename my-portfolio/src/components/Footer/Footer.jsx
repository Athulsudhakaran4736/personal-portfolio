import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="top-footer">
          <div className="footer-links">
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-social">
            <FaInstagram size={26} className="social-link" />
            <FiLinkedin size={26} className="social-link" />
            <RiGithubLine size={26} className="social-link" />
            <FaXTwitter size={26} className="social-link" />
          </div>
        </div>
        <div className="bottom-footer">
          <div className="work-container">
            <div className="work-sub-container">
              Interseted in working together
              <span style={{ color: "#6e06f2" }}>?</span>
            </div>
            <div className="work-button">
              <button className="work-button-one">Get In Touch</button>
              <button className="work-button-two">Browse Projects</button>
            </div>
          </div>
          <div className="copy-right">©2024 All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
