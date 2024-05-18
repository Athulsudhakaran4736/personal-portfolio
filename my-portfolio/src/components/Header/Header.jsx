import "./Header.css";
import { SiGooglemessages } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const toggleMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  const location = useLocation();
  const getLinkStyle = (path) => {
    return location.pathname === path
      ? { color: "#6E06F2" }
      : { color: "white" };
  };

  return (
    <header>
      <div className="header-responsive">
        <div className="res-name-text">
          IamAthul<span style={{ color: "#6E06F2", fontSize: "28px" }}>.</span>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          {showResponsiveMenu ? (
            <IoMdClose size={30} />
          ) : (
            <RxHamburgerMenu size={30} />
          )}
        </div>
      </div>

      <div
        className={showResponsiveMenu ? "res-container show" : "res-container"}
      >
        <div className="list-container">
          <ul>
            <Link to="/">
              <li style={getLinkStyle("/")}>Home</li>
            </Link>
            <Link to="/projects">
              <li style={getLinkStyle("/projects")}>Projects</li>
            </Link>
            <Link to="/about-me">
              <li style={getLinkStyle("/about-me")}>About</li>
            </Link>
            <Link to="/contact-me">
              <li style={getLinkStyle("/contact-me")}>Get In Touch</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="name-text">
          IamAthul<span style={{ color: "#6E06F2", fontSize: "28px" }}>.</span>
        </div>
        <div className="list-container">
          <ul>
            <Link to="/">
              <li style={getLinkStyle("/")}>Home</li>
            </Link>
            <Link to="/projects">
              <li style={getLinkStyle("/projects")}>Projects</li>
            </Link>
            <Link to="/about-me">
              <li style={getLinkStyle("/about-me")}>About</li>
            </Link>
          </ul>
        </div>
        <div className="contact-container">
          <Link to="/contact-me">
            <SiGooglemessages size={42} color="white" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
