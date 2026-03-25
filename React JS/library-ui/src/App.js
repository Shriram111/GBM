import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Fine from "./pages/Fine";

function NavigationHandler() {
  const location = useLocation();

  // Show ProductNavbar only on the products page

  // Optional: Hide Navbar entirely on Login/Register if you prefer
  if (location.pathname === "/" || location.pathname === "/login") {
    return <Navbar />; // Or return null to hide it
  }

  return <Navbar />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavigationHandler />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/fine" element={<Fine/>} />

          </Routes>
          </Router>
          </AuthProvider>


  );
}

export default App;
