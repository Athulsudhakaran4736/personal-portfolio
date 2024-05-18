import "./Home.css";
import mainImage from "../../assets/portfolio_image.jpg";
import HomeExperience from "../HomeExperience/HomeExperience";
import HomeSkills from "../HomeSkills/HomeSkills";
import HomeStory from "../HomeStory/HomeStory";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useMemo } from "react";
import HomeProject from "../HomeProject/HomeProject";

const Home = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    });
  }, []);
  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 1,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            // area: 800,
          },
          value: 30,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <div className="home-container">
        {/* <div className="scroll-watcher"></div> */}
        {/* <div id="particles-js">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div> */}
        <div className="home-container-wrapper">
          <div className="title-wrapper">
            <div className="top-text">
              <p className="top-title-text">
                Hey,I{`'`}m Athul <span>👋🏻</span>
              </p>
            </div>
            <div className="position-text">
              <h1 className="position-title-text">
                <span style={{ color: "#6e06f2" }}>Web</span>
                <br />
                Developer
              </h1>
            </div>
            <div className="title-desc">
              I{`'`}m a web developer based in Kerala,India. I{`'`}ll help you{" "}
              <br />
              build beautiful websites your users will love.
            </div>
            <div className="work-button">
              <Link to="/contact-me">
                <button className="work-button-one">Get In Touch</button>
              </Link>
              <button className="work-button-two">Browse Projects</button>
              <Link to="https://drive.google.com/file/d/1HsQo4sDw-pePy70C8cJ00eDS-mpD9y3k/view?usp=sharing">
                <button className="work-button-one">Download CV</button>
              </Link>
            </div>
          </div>
          <div className="main-image-wrapper">
            <div className="image-wrapper">
              <img src={mainImage} alt="portfolio-image" />
            </div>
          </div>
        </div>

        <HomeSkills />
        {/* <HomeProject /> */}
        <HomeExperience />
        <HomeStory />
      </div>
    </>
  );
};

export default Home;
