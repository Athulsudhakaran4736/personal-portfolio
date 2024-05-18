import "./HomeSkills.css";
import html5 from "../../assets/html-5.png";
import css from "../../assets/css3.png";
import js from "../../assets/javascript.png";
import react from "../../assets/react.png";
import nodejs from "../../assets/node-dot-js.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";

import "animate.css";
const HomeSkills = () => {
  return (
    <div className="skills-wrapper">
      <h1>
        Skills<span style={{ color: "#6e06f2" }}>.</span>
      </h1>
      <div className="main-skill-wrapper">
        <div className="main-skill-sub-wrapper">
          <div className="skill-wrapper">
            <div className="image-wrapper-icon">
              <img src={html5} />
              <img src={css} />
            </div>
            <h4>HTML & CSS</h4>
          </div>
        </div>
        <div className="main-skill-sub-wrapper">
          <div className="skill-wrapper">
            <div className="image-wrapper-icon">
              <img src={js} />
            </div>
            <h4>JavaScript</h4>
          </div>
        </div>
        <div className="main-skill-sub-wrapper">
          <div className="skill-wrapper">
            <div className="image-wrapper-icon">
              <img src={react} />
            </div>
            <h4>ReactJS</h4>
          </div>
        </div>
      </div>
      <div className="main-skill-wrapper">
        <div className="main-skill-sub-wrapper">
          <div className="skill-wrapper">
            <div className="image-wrapper-icon">
              <img src={nodejs} />
            </div>
            <h4>NodeJS</h4>
          </div>
        </div>
        <div className="main-skill-sub-wrapper">
          <div className="skill-wrapper">
            <div className="image-wrapper-icon">
              <img src={express} />
            </div>
            <h4>ExpressJS</h4>
          </div>
        </div>
        <div className="main-skill-sub-wrapper">
          <div className="skill-wrapper">
            <div className="image-wrapper-icon">
              <img src={mongodb} />
            </div>
            <h4>MongoDB</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
