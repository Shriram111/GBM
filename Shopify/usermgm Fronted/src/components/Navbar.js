import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <span className="brand-text">Ordera</span>
            <span className="plus-text">Premium ✦</span>
          </Link>
        </div>

        <div className="navbar-right">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/seller" className="nav-links">
                Become a Seller
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart" className="nav-links cart-link">
              </Link>
            </li>

            <li className="nav-item dropdown">
              <div className="more-trigger">
                More <span className="arrow-down"></span>
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/notifications" className="dropdown-item">
                    <span className="menu-icon">🔔</span> Notifications
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="dropdown-item">
                    <span className="menu-icon">🎧</span> Customer Care
                  </Link>
                </li>
                <li>
                  <Link to="/advertise" className="dropdown-item">
                    <span className="menu-icon">📈</span> Advertise
                  </Link>
                </li>
                <div className="divider"></div>
                <li>
                  <Link to="/download" className="dropdown-item">
                    <span className="menu-icon">📱</span> Download App
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/login" className="login-btn">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;