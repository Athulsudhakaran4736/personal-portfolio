import "./HomeSkills.css";

const HomeSkills = () => {
  return (
    <div className="skills-wrapper">
      <h1>
        Skills<span style={{ color: "#6e06f2" }}>.</span>
      </h1>
      <div className="main-skill-wrapper">
        <div className="main-skill-sub-wrapper">
          <h1 className="main-skill-header">Frontend</h1>
          <p className="main-skill-items">HTML5</p>
          <p className="main-skill-items">CSS3</p>
          <p className="main-skill-items">Javascript</p>
          <p className="main-skill-items">ReactJS</p>
        </div>
        <div className="main-skill-sub-wrapper">
          <h1 className="main-skill-header">Backend</h1>
          <p className="main-skill-items">NodeJs</p>
          <p className="main-skill-items">MongoDB</p>
          <p className="main-skill-items">ExpressJS</p>
          <p className="main-skill-items">Vercel</p>
        </div>
        <div className="main-skill-sub-wrapper">
          <h1 className="main-skill-header">Soft Skills</h1>
          <p className="main-skill-items">Effective communication</p>
          <p className="main-skill-items">Collaboration</p>
          <p className="main-skill-items">Commitment</p>
          <p className="main-skill-items">Work Ethic</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
