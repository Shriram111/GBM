import React, { useState } from "react";
import API from "../api/axiosConfig";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import HeroImage from "../assets/1.jpeg";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login Successful ✅");
      navigate("/products");
    } catch (error) {
      alert("Invalid Credentials ❌");
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <div className="hero-section">
        <div className="illustration-wrapper">
          <img src={HeroImage} alt="E-commerce Illustration" className="hero-img" /> 
          
          
          
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

          <button type="submit" className="btn">Login </button>
        </form>
        <Link to="/register" className="link">Don't have an account? Sign up</Link>
      </div>
    </div>
  );
}

export default Login;