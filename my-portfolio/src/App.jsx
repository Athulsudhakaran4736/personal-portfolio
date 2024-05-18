import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageHome from "./pages/PageHome/PageHome";
import AboutMePage from "./pages/AboutMePage/AboutMePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/about-me" element={<AboutMePage />} />
          <Route path="/contact-me" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
