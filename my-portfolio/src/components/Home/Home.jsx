import "./Home.css";
import mainImage from "../../assets/portfolio_image.jpg";
import { MainLayout } from "../layouts/MainLayout";
import HomeExperience from "../HomeExperience/HomeExperience";
import HomeSkills from "../HomeSkills/HomeSkills";
import HomeStory from "../HomeStory/HomeStory";

const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="home-container">
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
                <button className="work-button-one">Get In Touch</button>
                <button className="work-button-two">Browse Projects</button>
              </div>
            </div>
            <div className="main-image-wrapper">
              <div className="image-wrapper">
                <img src={mainImage} alt="portfolio-image" />
              </div>
            </div>
          </div>
          <HomeExperience />
          <HomeSkills />
          <HomeStory />
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
