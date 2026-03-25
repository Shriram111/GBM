import React, { useEffect } from "react";
import API from "../api/axiosConfig";
import "../styles/dashboard.css"; 

function Dashboard() {

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await API.get("/user/profile");
      console.log(response.data);
    } catch (error) {
      console.log("Unauthorized ❌");
    }
  };

  return <h2>Dashboard</h2>;
}

export default Dashboard;