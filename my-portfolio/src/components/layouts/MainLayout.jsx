import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import "./MainLayout.css";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="page-wrapper">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
