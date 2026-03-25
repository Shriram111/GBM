import React, { useState, useEffect } from "react";
import API from "../api/axiosConfig";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import HeroImage from "../assets/1.png";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPopup, setErrorPopup] = useState("");
  const [showSuccess, setShowSuccess] = useState(false); 
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (/[0-9]/.test(value)) {
      showError("Numbers are not allowed in the name field! ❌");
    } else {
      setName(value);
    }
  };

  const showError = (msg) => {
    setErrorPopup(msg);
    setTimeout(() => setErrorPopup(""), 3000);
  };

  const validatePassword = (pass) => {
    const regex = /^(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(pass);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      showError("Password must be 8+ chars with at least 1 special character (@, #, etc.) 🔑");
      return;
    }

    try {
      await API.post("/auth/register", { name, email, password });
      
      // Trigger Success Popup instead of alert
      setShowSuccess(true);

      // Wait 3 seconds for the user to see the success message, then navigate
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/");
      }, 3000);

    } catch (error) {
      showError("Registration Failed! Email might already exist.");
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      {/* Error Notification (Top Right) */}
      {errorPopup && (
        <div className="error-popup-overlay">
          {errorPopup}
        </div>
      )}

      {/* SUCCESS MODAL (Centered) */}
      {showSuccess && (
        <div className="success-modal-overlay">
          <div className="success-modal-content">
            <div className="success-icon">✅</div>
            <h3>Registration Successful!</h3>
            <p>Welcome to the family, <strong>{name}</strong>.</p>
            <p className="redirect-text">Redirecting to Login in 3 seconds...</p>
            <div className="progress-bar"></div>
          </div>
        </div>
      )}

      <div className="hero-section">
        <div className="illustration-wrapper">
          <img src={HeroImage} alt="E-commerce" className="hero-img" /> 
          <div className="floating-icon heart">❤</div>
          <div className="floating-icon dollar">₹</div>
          <div className="floating-icon thumb">👍</div>
        </div>
      </div>

      <div className="card">
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter name" value={name} onChange={handleNameChange} required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="abc@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Min 8 chars + 1 special symbol" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {password && (
              <span className={`pwd-hint ${validatePassword(password) ? "strong" : "weak"}`}>
                {validatePassword(password) ? "✔ Strong" : "✘ Too weak"}
              </span>
            )}
          </div>

          <button type="submit" className="btn">Get Started</button>
        </form>
        <Link to="/" className="link">Already have an account? Sign In</Link>
      </div>
    </div>
  );
}

export default Register;