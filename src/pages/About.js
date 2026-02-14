import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">About Kuwait National Day</h1>
        <div className="about-content">
          <div className="about-text">
            <p>
              Kuwait National Day is celebrated annually on February 25th,
              commemorating independence from the British Empire in 1961.
            </p>
            <p>
              Join us for fireworks, traditional performances, cultural
              exhibitions, and family activities across Kuwait City.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Events</p>
              </div>
              <div className="stat">
                <h3>100K+</h3>
                <p>Attendees</p>
              </div>
              <div className="stat">
                <h3>65</h3>
                <p>Years</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img
              src="/images/kuwait-celebration.jpg" // ← PUBLIC PATH (WORKS!)
              alt="Kuwait Celebration"
              className="about-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
