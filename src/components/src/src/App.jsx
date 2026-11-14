
import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Bring Nature Home – Discover the Beauty of Plants!
        </p>
        <button
          className="get-started"
          onClick={() => window.location.href = '#plants'}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
