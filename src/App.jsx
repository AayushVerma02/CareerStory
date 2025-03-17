import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CareerStory from './pages/CareerStory';
import './App.css';

const App = () => {
  useEffect(() => {
    // Function to ping the backend server
    const pingBackend = async () => {
      console.log("Pinging backend server to wake it up...");
      try {
        await fetch('https://careerstory.onrender.com/', {
          method: 'GET',
          mode: 'no-cors' // Important for cross-origin requests
        });
        console.log("Backend server ping completed");
      } catch (error) {
        console.log("Note: This error is expected due to CORS and can be ignored");
      }
    };

    // Call the function
    pingBackend();
  }, []); // Empty dependency array means this runs once when component mounts

  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-story" element={<CareerStory />} />
       </Routes>
    </Router>
  );
};

export default App;
