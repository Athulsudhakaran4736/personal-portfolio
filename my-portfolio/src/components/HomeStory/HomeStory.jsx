import "./HomeStory.css";

const HomeStory = () => {
  return (
    <div className="story-wrapper">
      <h1>
        My Story<span style={{ color: "#6e06f2" }}>.</span>
      </h1>
      <div className="main-story-wrapper">
        <div className="main-story-sub-wrapper">
          <p>
            My journey as a web developer started during my final year of B.Tech
            to upskill my self. Udemy and YouTube tutorials became my guides,
            leading me to create small static pages.
          </p>
          <p>
            After graduation, I enrolled in a course in Bangalore, where I
            delved into building real-time projects such as a React-based social
            media clone.
          </p>
          <p>
            This journey landed me an internship at{" "}
            <span style={{ color: "#6e06f2" }}>Whizlabs</span>, where I thrived
            for 10 months. Now, I{`'`}m a{" "}
            <span style={{ color: "#6e06f2" }}>freelancer</span>, embracing
            every challenge with gusto.
          </p>
          <p>
            Join me as I continue to weave my story, crafting digital
            experiences that captivate, inspire, and endure. For in the tapestry
            of web development, the journey is as enthralling as the
            destination, and the possibilities, as limitless as the imagination
            💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeStory;
