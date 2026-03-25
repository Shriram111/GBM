import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Infinity <span>Library</span>
        </a>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/" className="nav-links">Home</a>
          </li>

          <li 
            className="nav-item dropdown"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
          >
            <span className="nav-links dropdown-title">
              Services <i className="arrow-down"></i>
            </span>
            
            {dropdown && (
              <ul className="dropdown-menu">
                <li><a href="/books">📚 Book Catalog</a></li>
                <li><a href="/issue-return">🔄 Issue & Return</a></li>
                <li><a href="/members">👥 Member Records</a></li>
                <li><a href="/e-resources">💻 Digital Library</a></li>
              </ul>
            )}
          
          </li>
          <li className="nav-item">
            <a href="/fine" className="nav-links">Fine Management</a>
          </li>

          <li className="nav-item">
            <a href="/about" className="nav-links">About</a>
          </li>

<li className="nav-item">
  <a href="/admin" className="nav-links admin-link">
    <span className="admin-icon">🛡️</span> Admin
  </a>
</li>

          <li className="nav-item">
            <a href="/login" className="nav-links nav-btn">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;