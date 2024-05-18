import "./AboutMe.css";
import Marquee from "react-fast-marquee";
import { FaRegStar } from "react-icons/fa";
import HomeStory from "../HomeStory/HomeStory";
import HomeExperience from "../HomeExperience/HomeExperience";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-container-wrapper">
        <h1>
          About Me<span style={{ color: "#6e06f2" }}>.</span>
        </h1>
        <div className="to-do">
          <h2>
            Developing beautiful and functional websites is what I love doing,
            and that{`'`}s why I give my all in every new challenge.
          </h2>
        </div>
        <div className="stack-globe-container">
          <div className="stack-container">
            <h4 className="my-stack-heading">My Stack.</h4>
            <div className="my-stack">
              <Marquee speed={40}>
                <div className="stack-skill-container">
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">HTML5/CSS3 Mastery</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">React JS</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Tailwind CSS</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">AntD</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Bootstrap</div>
                  </div>
                </div>
              </Marquee>
              <Marquee speed={40} direction="right">
                <div className="stack-skill-container">
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">JavaScript proficiency</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Team Player</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Responsive Design</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Attention to detail</div>
                  </div>
                </div>
              </Marquee>
              <Marquee speed={40}>
                <div className="stack-skill-container">
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Node JS</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Express JS</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Mongo DB</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Agile Methodolgy</div>
                  </div>
                  <div className="stack-skill">
                    <FaRegStar size={25} color="#6e06f2" />
                    <div className="skill">Vercel</div>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
          <div className="location-container">
            <h4 className="my-location-heading">My Special Place.</h4>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62495.93040835665!2d75.45912144834396!3d11.765356923002479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4265aa19eeb65%3A0xf5e6181d3e97d10e!2sThalassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712603237484!5m2!1sen!2sin&language=en"
                width="800"
                height="300"
                style={{ border: "0", borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="res-location-container">
            <h4 className="my-location-heading">My Special Place.</h4>
            <div className="aboutme-location-img">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62495.93040835665!2d75.45912144834396!3d11.765356923002479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4265aa19eeb65%3A0xf5e6181d3e97d10e!2sThalassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712603237484!5m2!1sen!2sin&language=en"
                width="350"
                height="300"
                style={{ border: "0", borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="aboutme-res-location-img">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62495.93040835665!2d75.45912144834396!3d11.765356923002479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4265aa19eeb65%3A0xf5e6181d3e97d10e!2sThalassery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1712603237484!5m2!1sen!2sin&language=en"
                width="auto"
                height="300"
                style={{ border: "0", borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <HomeStory />
      <HomeExperience />
    </div>
  );
};

export default AboutMe;
