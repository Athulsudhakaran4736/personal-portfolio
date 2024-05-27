import "./HomeProject.css";
import whizlabs from "../../assets/whizlabs.png";
import social from "../../assets/social.png";
import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";
import "animate.css";

const HomeProject = () => {
  return (
    <div className="project-wrapper">
      <h1>
        Projects<span style={{ color: "#6e06f2" }}>.</span>
      </h1>

      <div className="main-projects-wrapper">
        <div className="left-sub-project-wrapper">
          <div className="sub-project-wrapper">
            <Link to="https://business.whizlabs.com/dashboard">
              <img src={whizlabs} height={250} />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              alignItems: "center",
              // justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <h2 className="project-header">
              Whizlabs Business{" "}
              {/* <span style={{ color: "#6e06f2", fontSize: "30px" }}>.</span> */}
            </h2>
            <Link
              to="https://business.whizlabs.com/dashboard"
              style={{ display: "flex" }}
            >
              <IoIosArrowDropright
                size={35}
                style={{ marginLeft: "10px" }}
                color="#6e06f2"
              />
            </Link>
          </div>
        </div>
        <div className="left-sub-project-wrapper">
          <div className="sub-project-wrapper">
            <Link to="https://github.com/Athulsudhakaran4736/Social">
              <img src={social} height={250} />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "10px",
              alignItems: "center",
              // justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <h2 className="project-header">
              Social Media App{" "}
              {/* <span style={{ color: "#6e06f2", fontSize: "30px" }}>.</span> */}
            </h2>
            <Link
              to="https://github.com/Athulsudhakaran4736/Social"
              style={{ display: "flex" }}
            >
              <IoIosArrowDropright
                size={35}
                style={{ marginLeft: "10px" }}
                color="#6e06f2"
              />
            </Link>
          </div>
          {/* <p style={{ fontSize: "18px", marginLeft: "20px" }}>
            It is a Social Media App similar to facebook built using MERN Stack
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
