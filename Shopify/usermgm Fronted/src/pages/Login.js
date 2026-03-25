import React, { useState } from "react";
import API from "../api/axiosConfig";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import HeroImage from "../assets/1.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorPopup, setErrorPopup] = useState("");
  const navigate = useNavigate();

  const showError = (msg) => {
    setErrorPopup(msg);
    setTimeout(() => setErrorPopup(""), 3000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", { email, password });
      
      localStorage.setItem("token", response.data.token);

      const userData = {
        id: response.data.userId || response.data.id,
        name: response.data.userName || response.data.name,
        email: response.data.userEmail || response.data.email
      };
      localStorage.setItem("user", JSON.stringify(userData));
      
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
        navigate("/products");
      }, 3000);

    } catch (error) {
      showError("Invalid Credentials ❌ Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      {errorPopup && (
        <div className="error-popup-overlay">
          {errorPopup}
        </div>
      )}

      {showSuccess && (
        <div className="success-modal-overlay">
          <div className="success-modal-content">
            <div className="success-icon">🚀</div>
            <h3>Login Successful!</h3>
            <p>Glad to see you again!</p>
            <p className="redirect-text">Redirecting to shop in 3 seconds...</p>
            <div className="progress-bar"></div>
          </div>
        </div>
      )}

      <div className="hero-section">
        <div className="illustration-wrapper">
          <img src={HeroImage} alt="E-commerce Illustration" className="hero-img" /> 
          <div className="floating-icon heart">❤</div>
          <div className="floating-icon dollar">₹</div>
          <div className="floating-icon thumb">👍</div>
        </div>
      </div>

      <div className="card">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="e.g. xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Login</button>
        </form>
        <Link to="/register" className="link">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default Login;