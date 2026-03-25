import React from 'react';
import "./logo.css";
import logoSvg from '../logo.svg'; 

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={logoSvg} alt="App Logo" className="app-logo-img" />
        <span className="logo-text"></span>
    </div>
  );
};

export default Logo;