import "./Contact.css";
import mainImage from "../../assets/portfolio_image.jpg";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <div className="contact-me-wrapper">
        <div className="contact-me-left-wrapper">
          <div className="contact-me-left-header">
            <h1>
              Get In Touch<span style={{ color: "#6e06f2" }}>.</span>
            </h1>
            <p>
              Looking to partner or work together? Reach out through the form
              and I{`'`}ll get back to you in the next 48 hours.
            </p>
            <div className="contact-me-icon-wrapper">
              <div className="contact-me-icon-sub-wrapper">
                <div className="contact-me-icon">
                  <CiMail size={30} color="black" />
                </div>
                <div>
                  <p>athulsudhakaran4736@gmail.com</p>
                </div>
              </div>
              <div className="contact-me-icon-sub-wrapper">
                <div className="contact-me-icon">
                  <CiPhone size={30} color="black" />
                </div>
                <p>+91 8089614530</p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-image-wrapper">
          <div className="image-wrapper">
            <img src={mainImage} alt="portfolio-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
