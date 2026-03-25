import React, { useState } from 'react';
import './App.css';
import Header from "./Component/header";
import Logo from './Component/logo'; 
import About from "./Component/about";

function App() {
  // 'home' is the default view
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="App">
      {/* Pass the function to the header so it can change the view */}
      <Header setView={setCurrentView} />
      
      {currentView === 'home' ? (
        <>
          <Logo />
          <div className="home-content">
            <h1>Welcome to Ordera</h1>
            <p>Manage your orders and inventory seamlessly.</p>
          </div>
        </>
      ) : (
        <About />
      )}
    </div>
  );
}

export default App;