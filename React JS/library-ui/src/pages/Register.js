import React, { useState } from "react";
import API from "../api/axiosConfig";
import { useNavigate, Link } from "react-router-dom";
import "../styles/auth.css";
import HeroImage from "../assets/1.jpeg"; 

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      
      await API.post("/auth/register", { name, email, password });
      alert("Registration Successful ✅ Please Login.");
      navigate("/"); 
    } catch (error) {
      alert("Registration Failed ❌ Email might already exist.");
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
        <h2>Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="e.g. abc@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn">Get Started</button>
        </form>
        <Link to="/" className="link">Already have an account? Sign In</Link>
      </div>
    </div>
  );
}

export default Register;