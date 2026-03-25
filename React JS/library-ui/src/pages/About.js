import React from "react";
import "../styles/about.css"; 
import HeroImage from "../assets/1.jpeg";

function About() {
  return (
    <div className="auth-container">
      <div className="hero-section">
        <div className="illustration-wrapper">
          <img 
            src={HeroImage} 
            alt="Library Illustration" 
            className="hero-img"
          />
          <div className="floating-icon heart">📖</div>
          <div className="floating-icon dollar">⚡</div>
          <div className="floating-icon thumb">📍</div>
        </div>
        <h1 className="hero-title">
          Focus on Your <span className="highlight">Future</span> <br />
          at <span className="bold-white">Infinity Library</span>
        </h1>
      </div>

      <div className="card about-card">
        <h2>About Our Centre</h2>
        <p className="about-description">
          <strong>Infinity Library</strong> is a premium Self Study Centre and Work Space 
          designed to provide a peaceful, high-productivity environment for students and professionals.
        </p>
        
        <div className="input-group">
          <label>📍 Location & Address</label>
          <div className="info-box">
            Shop No. A-4, Shree Ram Apartments, Plot No. E-115, Sector 3, Belpada, Kharghar, Navi Mumbai, Maharashtra 410210
          </div>
        </div>

        <div className="input-group">
          <label>✨ Why Choose Us?</label>
          <div className="tag-container">
            <span className="tag">Open 24 Hours</span>
            <span className="tag">High Speed Wi-Fi</span>
            <span className="tag">Air Conditioned</span>
            <span className="tag">Silent Zone</span>
            <span className="tag">Power Backup</span>
          </div>
        </div>

        <div className="input-group">
          <label>📞 Get In Touch</label>
          <div className="info-box highlight-info">
            Phone: 077159 44891
          </div>
        </div>

        <button className="btn" onClick={() => window.open('https://maps.google.com', '_blank')}>
          Navigate to Location
        </button>
      </div>
    </div>
  );
}

export default About;