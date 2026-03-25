import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProductNavbar from "./components/ProductNavbar"; 
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Register from "./pages/Register";
import About from "./components/About"; 
import Product from "./pages/Product";
import Notifications from "./pages/Notification";
import CustomerCare from "./pages/Customer";
import Advertise from "./pages/Advertise";
import Cart from "./pages/Cart";

function NavigationHandler() {
  const location = useLocation();

  if (location.pathname === "/products") {
    return <ProductNavbar />;
  }
  if (location.pathname === "/cart") {
    return <ProductNavbar />;
  }
  if (location.pathname === "/orders") {
    return <ProductNavbar  />;
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
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />


          
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/support" element={<CustomerCare />} />
          <Route path="/advertise" element={<Advertise />} />


          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;