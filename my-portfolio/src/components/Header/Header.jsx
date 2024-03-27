import "./Header.css";
import { SiGooglemessages } from "react-icons/si";
const Header = () => {
  return (
    <header>
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
        <div className="contact-container"><SiGooglemessages size={42} /></div>
      </div>
    </header>
  );
};

export default Header;
