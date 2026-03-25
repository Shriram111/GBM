import React from "react";
import "../styles/pages.css"; 

function Notifications() {
  const alerts = [
    { id: 1, title: "Price Drop!", msg: "iPhone 15 Pro is now 10% off.", time: "2 mins ago", icon: "🔥" },
    { id: 2, title: "Order Shipped", msg: "Your package is on the way.", time: "1 hour ago", icon: "📦" },
    { id: 3, title: "Flash Sale", msg: "Midnight sale starts in 3 hours.", time: "5 hours ago", icon: "⚡" },
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Notifications</h2>
      <div className="list-container">
        {alerts.map((alert) => (
          <div key={alert.id} className="card notification-card">
            <span className="card-icon">{alert.icon}</span>
            <div className="card-content">
              <h4>{alert.title}</h4>
              <p>{alert.msg}</p>
              <span className="time-stamp">{alert.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;