import React from 'react';
import "./header.css";

export default function Header({ setView }) {
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setView('home')} style={{cursor: 'pointer'}}>
        Ordera
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => { e.preventDefault(); setView('home'); }}>Home</a></li>
        <li><a href="#about" onClick={(e) => { e.preventDefault(); setView('about'); }}>About</a></li>
      </ul>
      <div className="nav-actions">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
}