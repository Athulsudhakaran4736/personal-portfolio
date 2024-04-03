import "./Header.css";
import { SiGooglemessages } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const Header = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);
  const toggleMenu = () => {
    setShowResponsiveMenu(!showResponsiveMenu);
  };

  return (
    <header>
      <div className="header-responsive">
        <div className="res-name-text">
          IamAthul<span style={{ color: "#6E06F2", fontSize: "28px" }}>.</span>
        </div>
        <div className="hamburger-icon" onClick={toggleMenu}>
          <RxHamburgerMenu size={30} />
        </div>
      </div>

      <div
        className={showResponsiveMenu ? "res-container show" : "res-container"}
      >
        <div className="list-container">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Get In Touch</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="name-text">
          IamAthul<span style={{ color: "#6E06F2", fontSize: "28px" }}>.</span>
        </div>
        <div className="list-container">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </div>
        <div className="contact-container">
          <SiGooglemessages size={42} />
        </div>
      </div>
    </header>
  );
};

export default Header;
