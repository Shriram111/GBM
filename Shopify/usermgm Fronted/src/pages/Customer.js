import React from "react";
import "../styles/pages.css";

function CustomerCare() {
  return (
    <div className="page-container">
      <h2 className="page-title">Help Center</h2>
      <p className="page-subtitle">How can we help you today?</p>
      
      <div className="grid-container">
        <div className="card action-card">
          <h3>📦 Track Order</h3>
          <p>Check status of your packages</p>
        </div>
        <div className="card action-card">
          <h3>🔄 Returns</h3>
          <p>Request a refund or exchange</p>
        </div>
        <div className="card action-card">
          <h3>💬 Live Chat</h3>
          <p>Talk to our support team 24/7</p>
        </div>
      </div>
    </div>
  );
}

export default CustomerCare;