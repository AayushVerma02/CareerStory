import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CareerStory from './pages/CareerStory';
import './App.css';
const App = () => {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career-story" element={<CareerStory />} />
       </Routes>
    </Router>
  )
}
export default App;