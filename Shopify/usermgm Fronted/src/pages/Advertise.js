import React from "react";
import "../styles/pages.css";

function Advertise() {
  return (
    <div className="page-container advertise-page">
      <div className="hero-content">
        <h1 className="hero-title">Grow your business with <span className="highlight">Ordera</span></h1>
        <p>Reach over 100 million customers across the globe.</p>
        <button className="promo-btn">Start Advertising</button>
      </div>
      
      <div className="stats-row">
        <div className="stat">
          <h2>10M+</h2>
          <p>Daily Visitors</p>
        </div>
        <div className="stat">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
        <div className="stat">
          <h2>0%</h2>
          <p>Listing Fee</p>
        </div>
      </div>
    </div>
  );
}

export default Advertise;