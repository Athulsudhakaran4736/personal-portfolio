import "./HomeExperience.css";
import { IoMdCheckmark } from "react-icons/io";
const HomeExperience = () => {
  return (
    <div className="experience-wrapper">
      <h1>
        Experience<span style={{ color: "#6e06f2" }}>.</span>
      </h1>
      <div className="experience-sub-wrapper">
        <h1 className="experience-title">
          Programmer Trainee{" "}
          <span style={{ color: "#6e06f2", fontWeight: 700 }}>
            @ Whizlabs Software PVT LTD
          </span>
        </h1>
        <p>April 2023 - March 2024</p>
        <div className="task-wrapper">
          <div className="task-items">
            <IoMdCheckmark color="#6e06f2" size={28} />
            <div className="task-item-text">
              <h1>
                Contributed extensively to the development of a web app akin to
                Jira, aimed at tracking employees activities, utilizing the PERN
                stack.
              </h1>
            </div>
          </div>
          <div className="task-items">
            <IoMdCheckmark color="#6e06f2" size={28} />
            <div className="task-item-text">
              <h1>
                Played a pivotal role in enhancing their e-learning platform for
                corporate clients.
              </h1>
            </div>
          </div>
          <div className="task-items">
            <IoMdCheckmark color="#6e06f2" size={28} />
            <div className="task-item-text">
              <h1>
                Added new features and addressed existing bugs, improving
                usability and performance in their E-Learning platform.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExperience;
