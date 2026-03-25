import React from "react";
import "../styles/auth.css"; 
import HeroImage from "../assets/1.png";


function About() {
  return (
    <div className="auth-container">
      <div className="hero-section">
        <div className="illustration-wrapper">
          <img 
            src={HeroImage} 
            alt="OMS Illustration" 
            className="hero-img"
          />
        </div>
        <h1 className="hero-title">
        Master Your <span className="highlight">Marketplace</span> <br />
          with <span className="bold-white">OmniCart</span>
        </h1>
      </div>

      <div className="card about-card">
        <h2>About Our Platform</h2>
        <p style={{ color: "#666", lineHeight: "1.6", textAlign: "left" }}>
          Our <strong>Microservices App</strong> is designed to streamline your Order Management System (OMS) 
          through a decoupled, high-performance architecture.
        </p>
        
        <div className="input-group">
          <label>Core Mission</label>
          <div style={{ padding: "10px", background: "#f8fafc", borderRadius: "8px", fontSize: "14px" }}>
            To provide robust e-commerce solutions that scale effortlessly with your growing customer base.
          </div>
        </div>

        <div className="input-group">
          <label>Technology Stack</label>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
            <span style={tagStyle}>React</span>
            <span style={tagStyle}>Microservices</span>
            <span style={tagStyle}>Node.js</span>
            <span style={tagStyle}>Scalable API</span>
          </div>
        </div>

        <button className="btn" style={{ marginTop: "20px" }}>
          Explore Features
        </button>
      </div>
    </div>
  );
}


const tagStyle = {
  background: "rgba(102, 126, 234, 0.1)",
  color: "#667eea",
  padding: "5px 12px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "700"
};

export default About;