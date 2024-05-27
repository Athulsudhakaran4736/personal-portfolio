import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { RiGithubLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="top-footer">
          <div className="footer-links">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/projects">
                <li>Projects</li>
              </Link>
              <Link to="/about-me">
                <li>About</li>
              </Link>
              <Link to="/contact-me">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="footer-social">
            <Link>
              <FaInstagram size={26} className="social-link" />
            </Link>
            <Link to="https://www.linkedin.com/in/athul-sudhakaran-07472b212/">
              <FiLinkedin size={26} className="social-link" />
            </Link>
            <Link to="https://github.com/Athulsudhakaran4736">
              <RiGithubLine size={26} className="social-link" />
            </Link>
            <Link to="https://x.com/AthulSudhakar11">
              <FaXTwitter size={26} className="social-link" />
            </Link>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="work-container">
            <div className="work-sub-container">
              Interested in working together
              <span style={{ color: "#6e06f2" }}>?</span>
            </div>
            <div className="work-button">
              <Link to="/contact-me">
                <button className="work-button-one">Get In Touch</button>
              </Link>
              <Link to="/projects">
                <button className="work-button-two">Browse Projects</button>
              </Link>
            </div>
          </div>
          <div className="copy-right">©2024 All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
