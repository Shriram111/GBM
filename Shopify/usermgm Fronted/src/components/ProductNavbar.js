import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/productnavbar.css";

function ProductNavbar() {
  const [cartCount, setCartCount] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); 
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user")) || { name: "User", email: "Guest" };
  
  const initials = userData.name
    ? userData.name.split(" ").map((n) => n[0]).join("").toUpperCase()
    : "U";

  const updateCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCount();
    window.addEventListener("cartUpdated", updateCount);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("cartUpdated", updateCount);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear(); 
    navigate("/");
  };

  return (
    <nav className="glass-navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <Link to="/products" className="brand-logo">
            <span className="logo-icon">O</span>
            <div className="logo-text">
              <span className="brand-name">Ordera</span>
              <span className="brand-tag">Premium ✦</span>
            </div>
          </Link>
        </div>

        <div className="nav-right">
          <Link to="/cart" className="icon-btn cart-trigger" title="View Cart">
            <span className="icon">🛒</span>
            {cartCount > 0 && <span className="badge-dot">{cartCount}</span>}
          </Link>
          
          <div className="user-profile-container" ref={dropdownRef}>
            <div 
              className={`user-avatar-premium ${showDropdown ? "active" : ""}`} 
              onClick={() => setShowDropdown(!showDropdown)}
            >
              {initials}
            </div>

            {showDropdown && (
              <div className="profile-dropdown-menu neumorphic-card">
                <div className="dropdown-info">
                  <p className="user-fullname">{userData.name}</p>
                  <p className="user-sub">{userData.email}</p>
                </div>
                
                <div className="dropdown-divider"></div>
                
                <ul className="dropdown-links">
                  
                  <li>
                    <Link to="/orders" onClick={() => setShowDropdown(false)}>
                      <span className="drop-icon">📦</span> Order History
                    </Link>
                  </li>
                  <li className="logout-li">
                    <button onClick={handleLogout} className="drop-logout-btn">
                      <span className="drop-icon">🚪</span> Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ProductNavbar;