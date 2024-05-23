import { Link } from "react-router-dom";
import whizlabs from "../../assets/whizlabs.png";
import social from "../../assets/social.png";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-page-wrapper">
      <h1>
        My Projects<span style={{ color: "#6e06f2" }}>.</span>
      </h1>
      <div>
        <div className="my-project-main-wrapper">
          <div className="my-project-main-sub-wrapper">
            <div className="my-project-wrapper">
              <Link to="https://business.whizlabs.com/dashboard">
                <img src={social} width="100%" />
              </Link>
            </div>
            <div className="my-project-desc">
              <h2>
                Social Media Web App{" "}
                {/* <span style={{ color: "#6e06f2", fontSize: "30px" }}>.</span> */}
              </h2>
              <p>
                I developed a dynamic social media application, reminiscent of
                Facebook, utilizing the MERN stack.
              </p>
              <p>
                This project showcases my proficiency in creating interactive
                and engaging web applications.
              </p>
              <p>
                <b>MERN Stack:</b> : Built using MongoDB, Express.js, React, and
                Node.js, providing a robust and scalable foundation.
              </p>
              <p>
                <b>User InteractivityI</b> : : Implemented features such as user
                profiles, posts, comments, and real-time updates to foster a
                vibrant social environment. File upload is done by using multer.
              </p>

              {/* <p>
                <b>Major Bug Resolutions:</b> : Addressed and fixed several
                major bugs, ensuring a seamless user experience and maintaining
                high platform reliability.
              </p>
              <p>
                This project exemplifies my ability to work effectively on a
                live product, driving both innovation and stability. */}
              {/* </p> */}
              {/* <p>I have also worked on other major bug fixes</p> */}
            </div>
          </div>
        </div>
        <div className="my-project-main-wrapper">
          <div className="my-project-main-sub-wrapper">
            <div className="my-project-wrapper">
              <Link to="https://business.whizlabs.com/dashboard">
                <img src={whizlabs} width="100%" />
              </Link>
            </div>
            <div className="my-project-desc">
              <h2>
                Whizlabs Business{" "}
                {/* <span style={{ color: "#6e06f2", fontSize: "30px" }}>.</span> */}
              </h2>
              <p>
                During my internship at Whizlabs, I had the opportunity to
                contribute to an innovative E-Learning platform built using the
                PERN Stack.
              </p>
              <p>
                This platform has been live for almost three years, continuously
                serving learners worldwide.
              </p>
              <p>
                <b>Feature Development & Bug Fixes</b> : Played a pivotal role
                in enhancing the platform${`'`}s functionality by implementing
                new features and resolving critical bugs.
              </p>
              <p>
                <b>Multi-Language Functionality:</b> : Spearheaded the
                implementation of multi-language support using i18n,
                significantly broadening the platform ${`'`}s accessibility to a
                global audience.
              </p>
              {/* <p>
                <b>Major Bug Resolutions:</b> : Addressed and fixed several
                major bugs, ensuring a seamless user experience and maintaining
                high platform reliability.
              </p>
              <p>
                This project exemplifies my ability to work effectively on a
                live product, driving both innovation and stability. */}
              {/* </p> */}
              {/* <p>I have also worked on other major bug fixes</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
